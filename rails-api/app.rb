require 'sinatra'
require 'sinatra/json'
require 'pg'
require 'redis'
require 'jwt'
require 'bcrypt'

set :bind, '0.0.0.0'
set :port, 3000

# Database connection
def db_connection
  PG.connect(
    host: 'gobd-postgres',
    dbname: 'gobd_production',
    user: 'gobd',
    password: 'gobd_secure_2026'
  )
end

# Redis connection
def redis_connection
  Redis.new(host: 'gobd-redis', port: 6379)
end

# Health check
get '/health' do
  json status: 'healthy', service: 'GoBD Rails API', version: '1.0'
end

# Get all invoices
get '/api/invoices' do
  conn = db_connection
  result = conn.exec('SELECT * FROM invoices ORDER BY created_at DESC')
  invoices = result.map { |row| row }
  conn.close
  json invoices: invoices
end

# Get single invoice
get '/api/invoices/:id' do
  conn = db_connection
  result = conn.exec_params('SELECT * FROM invoices WHERE id = $1', [params[:id]])
  conn.close
  
  if result.ntuples > 0
    json invoice: result[0]
  else
    status 404
    json error: 'Invoice not found'
  end
end

# Get audit logs
get '/api/audit-logs' do
  conn = db_connection
  result = conn.exec('SELECT * FROM audit_logs ORDER BY timestamp DESC LIMIT 50')
  logs = result.map { |row| row }
  conn.close
  json audit_logs: logs
end

# Get blockchain transactions
get '/api/blockchain-transactions' do
  conn = db_connection
  result = conn.exec('SELECT * FROM blockchain_transactions ORDER BY timestamp DESC')
  transactions = result.map { |row| row }
  conn.close
  json transactions: transactions
end

# Statistics
get '/api/stats' do
  conn = db_connection
  
  total_invoices = conn.exec('SELECT COUNT(*) as count FROM invoices')[0]['count']
  total_amount = conn.exec('SELECT SUM(total_amount) as total FROM invoices')[0]['total']
  finalized_count = conn.exec("SELECT COUNT(*) as count FROM invoices WHERE status = 'finalized'")[0]['count']
  blockchain_blocks = conn.exec('SELECT COUNT(*) as count FROM blockchain_transactions')[0]['count']
  
  conn.close
  
  json(
    total_invoices: total_invoices.to_i,
    total_amount: total_amount.to_f,
    finalized_invoices: finalized_count.to_i,
    blockchain_blocks: blockchain_blocks.to_i
  )
end

# Cache test with Redis
get '/api/cache-test' do
  redis = redis_connection
  redis.set('test_key', 'GoBD Platform Running!')
  value = redis.get('test_key')
  json cached_value: value
end
