import { Pool } from 'pg'
import { v4 as uuidv4 } from 'uuid'
import { JournalService } from './journal.service'

export interface RecordPaymentInput {
  invoice_id: string
  company_id: string
  amount: number
  payment_date: string
  payment_method: 'bank_transfer' | 'cash' | 'cheque' | 'promptpay'
  reference?: string
}

export class PaymentService {
  private pool: Pool
  private journalService: JournalService

  constructor(pool: Pool) {
    this.pool = pool
    this.journalService = new JournalService()
  }

  async recordPayment(input: RecordPaymentInput): Promise<{
    journal_entry_id: string
    entry_number: string
    invoice_status: string
    event: object
  }> {
    const client = await this.pool.connect()
    try {
      await client.query('BEGIN')
      await client.query(`SET LOCAL app.company_id = '${input.company_id}'`)

      // 1. Get invoice
      const invRes = await client.query(`
        SELECT id, invoice_number, total, paid_amount, status
        FROM invoices
        WHERE id = $1 AND company_id = $2
      `, [input.invoice_id, input.company_id])

      if (!invRes.rows[0]) throw new Error('Invoice not found')
      const inv = invRes.rows[0]

      if (inv.status === 'paid') throw new Error('Invoice already paid')
      if (inv.status === 'cancelled') throw new Error('Invoice is cancelled')

      const total = parseFloat(inv.total)
      const paidSoFar = parseFloat(inv.paid_amount)
      const newPaidAmount = paidSoFar + input.amount

      if (newPaidAmount > total) throw new Error(`Payment ${newPaidAmount} exceeds invoice total ${total}`)

      // 2. Get accounts
      const accounts = await client.query(`
        SELECT code, id FROM chart_of_accounts
        WHERE company_id = $1 AND code IN ('1101','1102','1201')
      `, [input.company_id])

      const acctMap: Record<string, string> = {}
      accounts.rows.forEach(r => { acctMap[r.code] = r.id })

      // Choose debit account based on payment method
      const debitAccountId = input.payment_method === 'cash'
        ? acctMap['1101']  // เงินสด
        : acctMap['1102']  // เงินฝากธนาคาร

      // 3. Get period
      const periodRes = await client.query(`
        SELECT ap.id as period_id, fy.id as fiscal_year_id
        FROM accounting_periods ap
        JOIN fiscal_years fy ON fy.id = ap.fiscal_year_id
        WHERE ap.company_id = $1
          AND $2 BETWEEN ap.start_date AND ap.end_date
        LIMIT 1
      `, [input.company_id, input.payment_date])

      if (!periodRes.rows[0]) throw new Error('No accounting period for payment date')
      const { period_id, fiscal_year_id } = periodRes.rows[0]

      // 4. Create Journal Entry
      const journalEntryId = await this.journalService.createEntry({
        company_id: input.company_id,
        fiscal_year_id,
        period_id,
        entry_date: input.payment_date,
        description: `รับชำระ: ${inv.invoice_number}`,
        reference: input.reference || inv.invoice_number,
        source_type: 'payment',
        source_id: input.invoice_id,
        lines: [
          {
            account_id: debitAccountId,
            debit: input.amount,
            credit: 0,
            description: input.payment_method === 'cash' ? 'รับเงินสด' : 'รับโอนเงิน'
          },
          {
            account_id: acctMap['1201'],
            debit: 0,
            credit: input.amount,
            description: `ตัดลูกหนี้: ${inv.invoice_number}` 
          }
        ]
      })

      // 5. Determine new invoice status
      const newStatus = newPaidAmount >= total ? 'paid' : 'partial'

      // 6. Update invoice
      await client.query(`
        UPDATE invoices
        SET paid_amount = $1,
            status = $2,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $3
      `, [newPaidAmount, newStatus, input.invoice_id])

      // 7. Get entry number
      const jeRes = await client.query(
        'SELECT entry_number FROM journal_entries WHERE id = $1',
        [journalEntryId]
      )
      const entryNumber = jeRes.rows[0].entry_number

      await client.query('COMMIT')

      // 8. Emit event
      const paymentEvent = {
        event: 'payment.received',
        event_id: uuidv4(),
        timestamp: new Date().toISOString(),
        company_id: input.company_id,
        source_system: 'fin-core',
        version: '1.0',
        payload: {
          payment_id: journalEntryId,
          invoice_id: input.invoice_id,
          invoice_number: inv.invoice_number,
          amount: input.amount,
          currency: 'THB',
          payment_date: input.payment_date,
          payment_method: input.payment_method,
          invoice_status: newStatus
        }
      }

      console.log('\n📡 Event emitted:')
      console.log(JSON.stringify(paymentEvent, null, 2))

      return {
        journal_entry_id: journalEntryId,
        entry_number: entryNumber,
        invoice_status: newStatus,
        event: paymentEvent
      }

    } catch (err) {
      await client.query('ROLLBACK')
      throw err
    } finally {
      client.release()
    }
  }
}
