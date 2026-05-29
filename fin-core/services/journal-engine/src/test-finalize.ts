import { Pool } from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()
import { InvoicePostingService } from './invoice-posting.service'

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

async function testFinalize() {
  const client = await pool.connect()
  const companyRes = await client.query('SELECT id FROM companies LIMIT 1')
  const companyId = companyRes.rows[0].id
  await client.query(`SET app.company_id = '${companyId}'`)
  const invRes = await client.query(
    `SELECT id FROM invoices WHERE company_id = $1 AND status = 'draft' LIMIT 1`,
    [companyId]
  )
  client.release()

  if (!invRes.rows[0]) throw new Error('No draft invoice found')
  const invoiceId = invRes.rows[0].id

  const service = new InvoicePostingService(pool)
  const result = await service.finalizeInvoice(invoiceId, companyId)

  console.log('\n✅ Invoice finalized!')
  console.log('   Invoice:', result.invoice_number)
  console.log('   Journal Entry:', result.entry_number)
  console.log('   JE ID:', result.journal_entry_id)

  await pool.end()
}

testFinalize().catch(console.error)
