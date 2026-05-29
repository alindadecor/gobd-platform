from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import date, datetime
import psycopg2
from psycopg2.extras import RealDictCursor
import json
from blockchain import blockchain

app = FastAPI(title="GoBD Invoice Service")

def get_db():
    return psycopg2.connect(
        host="gobd-postgres",
        database="gobd_production",
        user="gobd",
        password="gobd_secure_2026"
    )

class InvoiceCreate(BaseModel):
    customer_name: str
    customer_address: str = ""
    amount: float
    tax_amount: float = 0
    currency: str = "EUR"

@app.get("/")
def read_root():
    return {"service": "GoBD Invoice Generator", "status": "running", "version": "3.0-blockchain"}

@app.get("/invoices")
def list_invoices():
    conn = get_db()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("SELECT * FROM invoices ORDER BY created_at DESC")
    invoices = cur.fetchall()
    cur.close()
    conn.close()
    return {"invoices": invoices}

@app.post("/invoices")
def create_invoice(invoice: InvoiceCreate):
    conn = get_db()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    cur.execute("SELECT COUNT(*) as count FROM invoices")
    count = cur.fetchone()['count']
    invoice_number = f"INV-2026-{str(count + 1).zfill(3)}"
    
    total_amount = invoice.amount + invoice.tax_amount
    
    cur.execute("""
        INSERT INTO invoices 
        (invoice_number, customer_name, customer_address, amount, tax_amount, total_amount, currency, issue_date)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        RETURNING *
    """, (invoice_number, invoice.customer_name, invoice.customer_address, 
          invoice.amount, invoice.tax_amount, total_amount, invoice.currency, date.today()))
    
    new_invoice = cur.fetchone()
    
    cur.execute("""
        INSERT INTO audit_logs (invoice_id, action, user_id, data)
        VALUES (%s, %s, %s, %s)
    """, (new_invoice['id'], 'created', 'system', '{"source": "api"}'))
    
    conn.commit()
    cur.close()
    conn.close()
    
    return {"status": "success", "invoice": new_invoice}

@app.get("/invoices/{invoice_id}")
def get_invoice(invoice_id: int):
    conn = get_db()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("SELECT * FROM invoices WHERE id = %s", (invoice_id,))
    invoice = cur.fetchone()
    cur.close()
    conn.close()
    
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    
    return {"invoice": invoice}

@app.post("/invoices/{invoice_id}/finalize")
def finalize_invoice(invoice_id: int):
    conn = get_db()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    cur.execute("SELECT * FROM invoices WHERE id = %s", (invoice_id,))
    invoice = cur.fetchone()
    
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    
    # Create blockchain record
    block = blockchain.create_block({
        'invoice_id': invoice_id,
        'invoice_number': invoice['invoice_number'],
        'amount': float(invoice['total_amount']),
        'customer': invoice['customer_name']
    })
    
    # Update invoice
    cur.execute("""
        UPDATE invoices 
        SET blockchain_hash = %s, status = 'finalized', updated_at = NOW()
        WHERE id = %s
        RETURNING *
    """, (block['hash'], invoice_id))
    
    updated_invoice = cur.fetchone()
    
    # Blockchain transaction
    cur.execute("""
        INSERT INTO blockchain_transactions (tx_id, invoice_id, block_number, status, data)
        VALUES (%s, %s, %s, %s, %s)
    """, (block['hash'], invoice_id, block['index'], 'confirmed', json.dumps(block)))
    
    # Audit log
    cur.execute("""
        INSERT INTO audit_logs (invoice_id, action, user_id, blockchain_tx_id, data)
        VALUES (%s, %s, %s, %s, %s)
    """, (invoice_id, 'finalized', 'system', block['hash'], json.dumps({'block': block})))
    
    conn.commit()
    cur.close()
    conn.close()
    
    return {"status": "success", "invoice": updated_invoice, "blockchain": block}

@app.get("/blockchain")
def get_blockchain():
    return {"chain": blockchain.chain, "length": len(blockchain.chain)}

@app.get("/health")
def health_check():
    try:
        conn = get_db()
        cur = conn.cursor()
        cur.execute("SELECT 1")
        cur.close()
        conn.close()
        return {"status": "healthy", "database": "connected", "blockchain": len(blockchain.chain)}
    except Exception as e:
        return {"status": "unhealthy", "error": str(e)}

from fastapi.responses import StreamingResponse
from pdf_generator import generate_invoice_pdf

@app.get("/invoices/{invoice_id}/pdf")
def download_invoice_pdf(invoice_id: int):
    conn = get_db()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("SELECT * FROM invoices WHERE id = %s", (invoice_id,))
    invoice = cur.fetchone()
    cur.close()
    conn.close()
    
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    
    # Convert date to string
    invoice_data = dict(invoice)
    invoice_data['issue_date'] = str(invoice_data['issue_date'])
    
    pdf_buffer = generate_invoice_pdf(invoice_data)
    
    return StreamingResponse(
        pdf_buffer,
        media_type="application/pdf",
        headers={"Content-Disposition": f"attachment; filename=invoice_{invoice['invoice_number']}.pdf"}
    )
