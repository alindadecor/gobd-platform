import { Pool } from 'pg'

export class ReportsService {
  private pool: Pool

  constructor(pool: Pool) {
    this.pool = pool
  }

  // ============================================
  // 1. TRIAL BALANCE (งบทดลอง)
  // ============================================
  async getTrialBalance(companyId: string, asOfDate: string): Promise<{
    accounts: Array<{
      code: string
      name: string
      account_type: string
      total_debit: number
      total_credit: number
      balance: number
    }>
    total_debit: number
    total_credit: number
    is_balanced: boolean
  }> {
    await this.setCompany(companyId)

    const res = await this.pool.query(`
      SELECT 
        coa.code,
        coa.name,
        coa.account_type,
        COALESCE(SUM(jl.debit), 0) as total_debit,
        COALESCE(SUM(jl.credit), 0) as total_credit,
        COALESCE(SUM(jl.debit) - SUM(jl.credit), 0) as balance
      FROM chart_of_accounts coa
      LEFT JOIN journal_lines jl ON jl.account_id = coa.id
      LEFT JOIN journal_entries je ON je.id = jl.journal_entry_id
        AND je.entry_date <= $2
        AND je.status != 'cancelled'
      WHERE coa.company_id = $1
      GROUP BY coa.id, coa.code, coa.name, coa.account_type
      ORDER BY coa.code
    `, [companyId, asOfDate])

    const accounts = res.rows.map(r => ({
      code: r.code,
      name: r.name,
      account_type: r.account_type,
      total_debit: parseFloat(r.total_debit),
      total_credit: parseFloat(r.total_credit),
      balance: parseFloat(r.balance)
    }))

    const totalDebit = accounts.reduce((s, a) => s + a.total_debit, 0)
    const totalCredit = accounts.reduce((s, a) => s + a.total_credit, 0)

    return {
      accounts,
      total_debit: totalDebit,
      total_credit: totalCredit,
      is_balanced: Math.abs(totalDebit - totalCredit) < 0.01
    }
  }

  // ============================================
  // 2. INCOME STATEMENT (งบกำไรขาดทุน)
  // ============================================
  async getIncomeStatement(companyId: string, fromDate: string, toDate: string): Promise<{
    revenue: Array<{ code: string; name: string; amount: number }>
    expenses: Array<{ code: string; name: string; amount: number }>
    total_revenue: number
    total_expenses: number
    net_profit: number
  }> {
    await this.setCompany(companyId)

    const res = await this.pool.query(`
      SELECT 
        coa.code,
        coa.name,
        coa.account_type,
        COALESCE(SUM(jl.credit) - SUM(jl.debit), 0) as amount
      FROM chart_of_accounts coa
      LEFT JOIN journal_lines jl ON jl.account_id = coa.id
      LEFT JOIN journal_entries je ON je.id = jl.journal_entry_id
        AND je.entry_date BETWEEN $2 AND $3
        AND je.status != 'cancelled'
      WHERE coa.company_id = $1
        AND coa.account_type IN ('revenue', 'expense')
      GROUP BY coa.id, coa.code, coa.name, coa.account_type
      ORDER BY coa.code
    `, [companyId, fromDate, toDate])

    const revenue = res.rows
      .filter(r => r.account_type === 'revenue')
      .map(r => ({ code: r.code, name: r.name, amount: parseFloat(r.amount) }))

    const expenses = res.rows
      .filter(r => r.account_type === 'expense')
      .map(r => ({ code: r.code, name: r.name, amount: Math.abs(parseFloat(r.amount)) }))

    const totalRevenue = revenue.reduce((s, r) => s + r.amount, 0)
    const totalExpenses = expenses.reduce((s, e) => s + e.amount, 0)

    return {
      revenue,
      expenses,
      total_revenue: totalRevenue,
      total_expenses: totalExpenses,
      net_profit: totalRevenue - totalExpenses
    }
  }

  // ============================================
  // 3. BALANCE SHEET (งบฐานะการเงิน)
  // ============================================
  async getBalanceSheet(companyId: string, asOfDate: string): Promise<{
    assets: Array<{ code: string; name: string; balance: number }>
    liabilities: Array<{ code: string; name: string; balance: number }>
    equity: Array<{ code: string; name: string; balance: number }>
    total_assets: number
    total_liabilities: number
    total_equity: number
    is_balanced: boolean
  }> {
    await this.setCompany(companyId)

    const res = await this.pool.query(`
      SELECT 
        coa.code,
        coa.name,
        coa.account_type,
        COALESCE(SUM(jl.debit) - SUM(jl.credit), 0) as balance
      FROM chart_of_accounts coa
      LEFT JOIN journal_lines jl ON jl.account_id = coa.id
      LEFT JOIN journal_entries je ON je.id = jl.journal_entry_id
        AND je.entry_date <= $2
        AND je.status != 'cancelled'
      WHERE coa.company_id = $1
        AND coa.account_type IN ('asset', 'liability', 'equity')
      GROUP BY coa.id, coa.code, coa.name, coa.account_type
      ORDER BY coa.code
    `, [companyId, asOfDate])

    const assets = res.rows
      .filter(r => r.account_type === 'asset')
      .map(r => ({ code: r.code, name: r.name, balance: parseFloat(r.balance) }))

    const liabilities = res.rows
      .filter(r => r.account_type === 'liability')
      .map(r => ({ code: r.code, name: r.name, balance: Math.abs(parseFloat(r.balance)) }))

    const equity = res.rows
      .filter(r => r.account_type === 'equity')
      .map(r => ({ code: r.code, name: r.name, balance: Math.abs(parseFloat(r.balance)) }))

    const totalAssets = assets.reduce((s, a) => s + a.balance, 0)
    const totalLiabilities = liabilities.reduce((s, l) => s + l.balance, 0)
    const totalEquity = equity.reduce((s, e) => s + e.balance, 0)

    return {
      assets,
      liabilities,
      equity,
      total_assets: totalAssets,
      total_liabilities: totalLiabilities,
      total_equity: totalEquity,
      is_balanced: Math.abs(totalAssets - (totalLiabilities + totalEquity)) < 0.01
    }
  }

  private async setCompany(companyId: string) {
    await this.pool.query(`SET app.company_id = '${companyId}'`)
  }
}
