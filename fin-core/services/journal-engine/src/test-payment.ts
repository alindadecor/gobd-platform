import { Pool } from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()
import { PaymentService } from './payment.service'

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

async function testPayment() {
  const client = await pool.connect()
  const companyRes = await client.query('SELECT id FROM companies LIMIT 1')
  const companyId = companyRes.rows[0].id
  await client.query(`SET app.company_id = '${companyId}'`)
  const invRes = await client.query(`
    SELECT id, invoice_number, total FROM invoices
    WHERE company_id = $1 AND status = 'sent'
    LIMIT 1
  `, [companyId])
  client.release()

  if (!invRes.rows[0]) throw new Error('No sent invoice found')
  const invoice = invRes.rows[0]

  console.log(`\n💳 Recording payment for ${invoice.invoice_number} (Total: ${invoice.total})`)

  const service = new PaymentService(pool)
  const result = await service.recordPayment({
    invoice_id: invoice.id,
    company_id: companyId,
    amount: parseFloat(invoice.total),
    payment_date: '2026-01-25',
    payment_method: 'bank_transfer',
    reference: 'REF-2026-001'
  })

  console.log('\n✅ Payment recorded!')
  console.log('   Journal Entry:', result.entry_number)
  console.log('   Invoice Status:', result.invoice_status)

  await pool.end()
}

testPayment().catch(console.error)
