import { JournalService } from './journal.service';
import dotenv from 'dotenv';

dotenv.config();

async function testJournal() {
  const journalService = new JournalService();

  try {
    // Get IDs from database
    const companyResult = await journalService['pool'].query(
      'SELECT id FROM companies LIMIT 1'
    );
    const company_id = companyResult.rows[0].id;

    const fiscalYearResult = await journalService['pool'].query(
      'SELECT id FROM fiscal_years LIMIT 1'
    );
    const fiscal_year_id = fiscalYearResult.rows[0].id;

    const periodResult = await journalService['pool'].query(
      "SELECT id FROM accounting_periods WHERE period_number = 1 LIMIT 1"
    );
    const period_id = periodResult.rows[0].id;

    const cashResult = await journalService['pool'].query(
      "SELECT id FROM chart_of_accounts WHERE code = '1101' LIMIT 1"
    );
    const cash_id = cashResult.rows[0].id;

    const revenueResult = await journalService['pool'].query(
      "SELECT id FROM chart_of_accounts WHERE code = '4101' LIMIT 1"
    );
    const revenue_id = revenueResult.rows[0].id;

    const vatResult = await journalService['pool'].query(
      "SELECT id FROM chart_of_accounts WHERE code = '2301' LIMIT 1"
    );
    const vat_id = vatResult.rows[0].id;

    // Create journal entry
    const result = await journalService.createEntry({
      company_id,
      fiscal_year_id,
      period_id,
      entry_date: '2026-01-15',
      description: 'ทดสอบรับเงินสด',
      lines: [
        { account_id: cash_id, debit: 10700, credit: 0, description: 'รับเงินสด' },
        { account_id: revenue_id, debit: 0, credit: 10000, description: 'รายได้จากการขาย' },
        { account_id: vat_id, debit: 0, credit: 700, description: 'VAT 7%' }
      ]
    });

    console.log('✅ Journal Entry created:', result);
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await journalService.close();
  }
}

testJournal();
