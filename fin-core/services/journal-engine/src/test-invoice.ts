import { Pool } from 'pg'
import { v4 as uuidv4 } from 'uuid'
import * as dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

async function testInvoice() {
  const client = await pool.connect()
  try {
    // Get IDs
    const companyRes = await client.query('SELECT id FROM companies LIMIT 1')
    const companyId = companyRes.rows[0].id

    await client.query(`SET app.company_id = '${companyId}'`)

    // Insert customer
    const custRes = await client.query(`
      INSERT INTO customers (company_id, name, tax_id, email, payment_terms)
      VALUES ($1, 'บริษัท ทดสอบ จำกัด', '0105567099999', 'test@testcompany.co.th', 30)
      ON CONFLICT (company_id, tax_id) DO UPDATE SET name = EXCLUDED.name
      RETURNING id
    `, [companyId])
    const customerId = custRes.rows[0].id

    // Insert invoice
    const invRes = await client.query(`
      INSERT INTO invoices (company_id, customer_id, invoice_date, due_date, notes)
      VALUES ($1, $2, '2026-01-20', '2026-02-19', 'ใบแจ้งหนี้ทดสอบ')
      RETURNING id, invoice_number
    `, [companyId, customerId])
    const invoiceId = invRes.rows[0].id
    const invoiceNumber = invRes.rows[0].invoice_number

    // Insert lines
    await client.query(`
      INSERT INTO invoice_lines (invoice_id, company_id, description, quantity, unit_price, vat_rate)
      VALUES 
        ($1, $2, 'ค่าบริการพัฒนาซอฟต์แวร์', 1, 50000, 7),
        ($1, $2, 'ค่า Hosting รายเดือน', 3, 2000, 7)
    `, [invoiceId, companyId])

    // Get totals
    const totals = await client.query(`
      SELECT 
        SUM(line_total) as subtotal,
        SUM(vat_amount) as vat_amount,
        SUM(line_total + vat_amount) as total
      FROM invoice_lines WHERE invoice_id = $1
    `, [invoiceId])

    const { subtotal, vat_amount, total } = totals.rows[0]

    console.log('✅ Invoice created:', invoiceNumber)
    console.log('   Subtotal:', subtotal)
    console.log('   VAT:', vat_amount)
    console.log('   Total:', total)

    // Emit event
    const event = {
      event: 'invoice.created',
      event_id: uuidv4(),
      timestamp: new Date().toISOString(),
      company_id: companyId,
      source_system: 'fin-core',
      version: '1.0',
      payload: { invoice_id: invoiceId, invoice_number: invoiceNumber, subtotal, vat_amount, total, currency: 'THB' }
    }
    console.log('\n📡 Event emitted:')
    console.log(JSON.stringify(event, null, 2))

  } finally {
    client.release()
    await pool.end()
  }
}

testInvoice().catch(console.error)
