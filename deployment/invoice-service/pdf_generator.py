from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_RIGHT, TA_CENTER
from datetime import datetime
import io

def generate_invoice_pdf(invoice_data):
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4)
    elements = []
    styles = getSampleStyleSheet()
    
    # Title
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#1a1a1a'),
        spaceAfter=30,
        alignment=TA_CENTER
    )
    elements.append(Paragraph("RECHNUNG / INVOICE", title_style))
    elements.append(Spacer(1, 12))
    
    # Invoice Info
    info_data = [
        ['Rechnungsnummer:', invoice_data['invoice_number']],
        ['Datum:', invoice_data['issue_date']],
        ['Status:', invoice_data['status'].upper()],
        ['Blockchain Hash:', invoice_data.get('blockchain_hash', 'N/A')[:32] + '...']
    ]
    
    info_table = Table(info_data, colWidths=[120*mm, 60*mm])
    info_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('TEXTCOLOR', (0, 0), (0, -1), colors.grey),
        ('ALIGN', (1, 0), (1, -1), 'RIGHT'),
    ]))
    elements.append(info_table)
    elements.append(Spacer(1, 20))
    
    # Customer Info
    elements.append(Paragraph(f"<b>Kunde / Customer:</b>", styles['Normal']))
    elements.append(Paragraph(invoice_data['customer_name'], styles['Normal']))
    if invoice_data.get('customer_address'):
        elements.append(Paragraph(invoice_data['customer_address'], styles['Normal']))
    elements.append(Spacer(1, 20))
    
    # Items Table
    items_data = [
        ['Position', 'Beschreibung', 'Betrag'],
        ['1', 'Dienstleistung / Service', f"€{invoice_data['amount']:.2f}"],
        ['', 'MwSt. / VAT (19%)', f"€{invoice_data['tax_amount']:.2f}"],
        ['', 'Gesamt / Total', f"€{invoice_data['total_amount']:.2f}"]
    ]
    
    items_table = Table(items_data, colWidths=[30*mm, 120*mm, 40*mm])
    items_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 12),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, -1), (-1, -1), colors.beige),
        ('FONTNAME', (0, -1), (-1, -1), 'Helvetica-Bold'),
        ('GRID', (0, 0), (-1, -1), 1, colors.black)
    ]))
    elements.append(items_table)
    elements.append(Spacer(1, 30))
    
    # Footer
    footer_text = f"""
    <para align=center>
    <b>GoBD Compliant Invoice</b><br/>
    Blockchain verified: {invoice_data.get('blockchain_hash', 'Pending')[:16]}...<br/>
    Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
    </para>
    """
    elements.append(Paragraph(footer_text, styles['Normal']))
    
    doc.build(elements)
    buffer.seek(0)
    return buffer

