import { Pool } from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()
import { ReportsService } from './reports.service'

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

async function testReports() {
  const client = await pool.connect()
  const companyRes = await client.query('SELECT id FROM companies LIMIT 1')
  const companyId = companyRes.rows[0].id
  client.release()

  const service = new ReportsService(pool)

  // 1. Trial Balance
  console.log('\n========================================')
  console.log('งบทดลอง (Trial Balance) - As of 2026-01-31')
  console.log('========================================')
  const tb = await service.getTrialBalance(companyId, '2026-01-31')
  tb.accounts.forEach(a => {
    if (a.total_debit > 0 || a.total_credit > 0) {
      console.log(`${a.code} ${a.name.padEnd(25)} DR: ${a.total_debit.toFixed(2).padStart(12)} CR: ${a.total_credit.toFixed(2).padStart(12)}`)
    }
  })
  console.log('─'.repeat(70))
  console.log(`${'Total'.padEnd(30)} DR: ${tb.total_debit.toFixed(2).padStart(12)} CR: ${tb.total_credit.toFixed(2).padStart(12)}`)
  console.log(`Balanced: ${tb.is_balanced ? '✅' : '❌'}`)

  // 2. Income Statement
  console.log('\n========================================')
  console.log('งบกำไรขาดทุน (Income Statement) - Jan 2026')
  console.log('========================================')
  const is = await service.getIncomeStatement(companyId, '2026-01-01', '2026-01-31')
  console.log('รายได้:')
  is.revenue.forEach(r => console.log(`  ${r.code} ${r.name.padEnd(25)} ${r.amount.toFixed(2).padStart(12)}`))
  console.log(`  ${'รวมรายได้'.padEnd(30)} ${is.total_revenue.toFixed(2).padStart(12)}`)
  console.log('\nค่าใช้จ่าย:')
  is.expenses.forEach(e => console.log(`  ${e.code} ${e.name.padEnd(25)} ${e.amount.toFixed(2).padStart(12)}`))
  console.log(`  ${'รวมค่าใช้จ่าย'.padEnd(30)} ${is.total_expenses.toFixed(2).padStart(12)}`)
  console.log('─'.repeat(50))
  console.log(`  ${'กำไรสุทธิ'.padEnd(30)} ${is.net_profit.toFixed(2).padStart(12)}`)

  // 3. Balance Sheet
  console.log('\n========================================')
  console.log('งบฐานะการเงิน (Balance Sheet) - As of 2026-01-31')
  console.log('========================================')
  const bs = await service.getBalanceSheet(companyId, '2026-01-31')
  console.log('สินทรัพย์:')
  bs.assets.forEach(a => console.log(`  ${a.code} ${a.name.padEnd(25)} ${a.balance.toFixed(2).padStart(12)}`))
  console.log(`  ${'รวมสินทรัพย์'.padEnd(30)} ${bs.total_assets.toFixed(2).padStart(12)}`)
  console.log('\nหนี้สิน:')
  bs.liabilities.forEach(l => console.log(`  ${l.code} ${l.name.padEnd(25)} ${l.balance.toFixed(2).padStart(12)}`))
  console.log(`  ${'รวมหนี้สิน'.padEnd(30)} ${bs.total_liabilities.toFixed(2).padStart(12)}`)
  console.log('\nส่วนของผู้ถือหุ้น:')
  bs.equity.forEach(e => console.log(`  ${e.code} ${e.name.padEnd(25)} ${e.balance.toFixed(2).padStart(12)}`))
  console.log(`  ${'รวมส่วนของผู้ถือหุ้น'.padEnd(30)} ${bs.total_equity.toFixed(2).padStart(12)}`)
  console.log('─'.repeat(50))
  console.log(`Balanced (Assets = Liabilities + Equity): ${bs.is_balanced ? '✅' : '❌'}`)

  await pool.end()
}

testReports().catch(console.error)
