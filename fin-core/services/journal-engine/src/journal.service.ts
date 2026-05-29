import { Pool, PoolClient } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export interface JournalLine {
  account_id: string;
  debit: number;
  credit: number;
  description?: string;
}

export interface CreateJournalEntry {
  company_id: string;
  fiscal_year_id: string;
  period_id: string;
  entry_date: string;
  description: string;
  reference?: string;
  source_type?: string;
  source_id?: string;
  lines: JournalLine[];
}

export class JournalService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5433'),
      database: process.env.DB_NAME || 'fincore_production',
      user: process.env.DB_USER || 'fincore',
      password: process.env.DB_PASSWORD || 'fincore_secure_2026',
    });
  }

  async createEntry(data: CreateJournalEntry): Promise<string> {
    const client = await this.pool.connect();

    try {
      await client.query('BEGIN');

      // Validate double-entry balance
      const totalDebit = data.lines.reduce((sum, line) => sum + line.debit, 0);
      const totalCredit = data.lines.reduce((sum, line) => sum + line.credit, 0);

      if (Math.abs(totalDebit - totalCredit) > 0.01) {
        throw new Error(
          `Journal entry must balance. Debit: ${totalDebit}, Credit: ${totalCredit}`
        );
      }

      // Insert journal entry
      const entryResult = await client.query(
        `
        INSERT INTO journal_entries (
          company_id, fiscal_year_id, period_id, entry_date, 
          description, reference, source_type, source_id, status
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'draft')
        RETURNING id
        `,
        [
          data.company_id,
          data.fiscal_year_id,
          data.period_id,
          data.entry_date,
          data.description,
          data.reference || null,
          data.source_type || null,
          data.source_id || null,
        ]
      );

      const entryId = entryResult.rows[0].id;

      // Insert journal lines
      for (const line of data.lines) {
        await client.query(
          `
          INSERT INTO journal_lines (
            journal_entry_id, company_id, account_id, debit, credit, description
          ) VALUES ($1, $2, $3, $4, $5, $6)
          `,
          [entryId, data.company_id, line.account_id, line.debit, line.credit, line.description || null]
        );
      }

      await client.query('COMMIT');

      return entryId;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  async close(): Promise<void> {
    await this.pool.end();
  }
}
