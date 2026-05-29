import { Pool, PoolClient } from 'pg'
import { v4 as uuidv4 } from 'uuid'
import { JournalService } from './journal.service'

export class InvoicePostingService {
  private pool: Pool
  private journalService: JournalService

  constructor(pool: Pool) {
    this.pool = pool
    this.journalService = new JournalService()
  }

  async finalizeInvoice(invoiceId: string, companyId: string): Promise<{
    invoice_number: string
    journal_entry_id: string
    entry_number: string
    event: object
  }> {
    const client = await this.pool.connect()
    try {
      await client.query('BEGIN')
      await client.query(`SET LOCAL app.company_id = '${companyId}'`)

      // 1. Get invoice + lines
      const invRes = await client.query(`
        SELECT i.*, 
               SUM(il.line_total) as subtotal,
               SUM(il.vat_amount) as vat_total,
               SUM(il.line_total + il.vat_amount) as grand_total
        FROM invoices i
        JOIN invoice_lines il ON il.invoice_id = i.id
        WHERE i.id = $1 AND i.company_id = $2
        GROUP BY i.id
      `, [invoiceId, companyId])

      if (!invRes.rows[0]) throw new Error('Invoice not found')
      const inv = invRes.rows[0]

      if (inv.status !== 'draft') throw new Error(`Invoice status is ${inv.status}, cannot finalize`)

      // 2. Get account IDs
      const accounts = await client.query(`
        SELECT code, id FROM chart_of_accounts 
        WHERE company_id = $1 AND code IN ('1201','4101','2301')
      `, [companyId])

      const acctMap: Record<string, string> = {}
      accounts.rows.forEach(r => { acctMap[r.code] = r.id })

      if (!acctMap['1201'] || !acctMap['4101'] || !acctMap['2301']) {
        throw new Error('Required accounts not found: 1201, 4101, 2301')
      }

      // 3. Get fiscal year + period
      const periodRes = await client.query(`
        SELECT ap.id as period_id, fy.id as fiscal_year_id
        FROM accounting_periods ap
        JOIN fiscal_years fy ON fy.id = ap.fiscal_year_id
        WHERE ap.company_id = $1
          AND $2 BETWEEN ap.start_date AND ap.end_date
        LIMIT 1
      `, [companyId, inv.invoice_date])

      if (!periodRes.rows[0]) throw new Error('No accounting period found for invoice date')
      const { period_id, fiscal_year_id } = periodRes.rows[0]

      // 4. Create Journal Entry
      const subtotal = parseFloat(inv.subtotal)
      const vatTotal = parseFloat(inv.vat_total)
      const grandTotal = parseFloat(inv.grand_total)

      const journalEntryId = await this.journalService.createEntry({
        company_id: companyId,
        fiscal_year_id,
        period_id,
        entry_date: inv.invoice_date.toISOString().split('T')[0],
        description: `Auto-post: ${inv.invoice_number}`,
        reference: inv.invoice_number,
        source_type: 'invoice',
        source_id: invoiceId,
        lines: [
          {
            account_id: acctMap['1201'],
            debit: grandTotal,
            credit: 0,
            description: 'ลูกหนี้การค้า'
          },
          {
            account_id: acctMap['4101'],
            debit: 0,
            credit: subtotal,
            description: 'รายได้จากการขาย'
          },
          {
            account_id: acctMap['2301'],
            debit: 0,
            credit: vatTotal,
            description: 'ภาษีมูลค่าเพิ่มค้างจ่าย'
          }
        ]
      })

      // 5. Update invoice status + link journal entry
      await client.query(`
        UPDATE invoices 
        SET status = 'sent', 
            journal_entry_id = $1,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $2
      `, [journalEntryId, invoiceId])

      // 6. Get entry number
      const jeRes = await client.query(
        'SELECT entry_number FROM journal_entries WHERE id = $1',
        [journalEntryId]
      )
      const entryNumber = jeRes.rows[0].entry_number

      await client.query('COMMIT')

      // 7. Build events
      const invoiceFinalizedEvent = {
        event: 'invoice.finalized',
        event_id: uuidv4(),
        timestamp: new Date().toISOString(),
        company_id: companyId,
        source_system: 'fin-core',
        version: '1.0',
        payload: {
          invoice_id: invoiceId,
          invoice_number: inv.invoice_number,
          journal_entry_id: journalEntryId,
          total: grandTotal,
          currency: 'THB'
        }
      }

      const journalPostedEvent = {
        event: 'journal.posted',
        event_id: uuidv4(),
        timestamp: new Date().toISOString(),
        company_id: companyId,
        source_system: 'fin-core',
        version: '1.0',
        payload: {
          journal_entry_id: journalEntryId,
          entry_number: entryNumber,
          entry_date: inv.invoice_date,
          total_debit: grandTotal,
          total_credit: grandTotal,
          source_type: 'invoice',
          source_id: invoiceId
        }
      }

      console.log('\n📡 Events emitted:')
      console.log(JSON.stringify(invoiceFinalizedEvent, null, 2))
      console.log(JSON.stringify(journalPostedEvent, null, 2))

      return {
        invoice_number: inv.invoice_number,
        journal_entry_id: journalEntryId,
        entry_number: entryNumber,
        event: invoiceFinalizedEvent
      }

    } catch (err) {
      await client.query('ROLLBACK')
      throw err
    } finally {
      client.release()
    }
  }
}
