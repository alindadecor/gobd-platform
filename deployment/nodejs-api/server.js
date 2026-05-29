const express = require('express');
const { Pool } = require('pg');
const redis = require('redis');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL
const pool = new Pool({
  host: 'gobd-postgres',
  database: 'gobd_production',
  user: 'gobd',
  password: 'gobd_secure_2026',
  port: 5432
});

// Redis
const redisClient = redis.createClient({
  socket: { host: 'gobd-redis', port: 6379 }
});
redisClient.connect();

// Health
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'GoBD Node API', version: '1.0' });
});

// Stats
app.get('/api/stats', async (req, res) => {
  const stats = await pool.query(`
    SELECT 
      COUNT(*) as total_invoices,
      SUM(total_amount) as total_amount,
      COUNT(CASE WHEN status = 'finalized' THEN 1 END) as finalized_invoices
    FROM invoices
  `);
  
  const blocks = await pool.query('SELECT COUNT(*) as count FROM blockchain_transactions');
  
  res.json({
    total_invoices: parseInt(stats.rows[0].total_invoices),
    total_amount: parseFloat(stats.rows[0].total_amount),
    finalized_invoices: parseInt(stats.rows[0].finalized_invoices),
    blockchain_blocks: parseInt(blocks.rows[0].count)
  });
});

// Invoices
app.get('/api/invoices', async (req, res) => {
  const result = await pool.query('SELECT * FROM invoices ORDER BY created_at DESC');
  res.json({ invoices: result.rows });
});

// Single invoice
app.get('/api/invoices/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM invoices WHERE id = $1', [req.params.id]);
  if (result.rows.length > 0) {
    res.json({ invoice: result.rows[0] });
  } else {
    res.status(404).json({ error: 'Invoice not found' });
  }
});

// Audit logs
app.get('/api/audit-logs', async (req, res) => {
  const result = await pool.query('SELECT * FROM audit_logs ORDER BY timestamp DESC LIMIT 50');
  res.json({ audit_logs: result.rows });
});

// Blockchain
app.get('/api/blockchain', async (req, res) => {
  const result = await pool.query('SELECT * FROM blockchain_transactions ORDER BY timestamp DESC');
  res.json({ transactions: result.rows });
});

// Redis test
app.get('/api/cache-test', async (req, res) => {
  await redisClient.set('test_key', 'GoBD Platform Running!');
  const value = await redisClient.get('test_key');
  res.json({ cached_value: value });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('GoBD API running on port 3000');
});
