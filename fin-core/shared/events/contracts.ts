// ============================================
// FIN-CORE SHARED EVENT CONTRACTS
// Version: 1.0.0
// All systems must use these exact interfaces
// ============================================

export type EventName =
  | 'invoice.created'
  | 'invoice.sent'
  | 'invoice.finalized'
  | 'invoice.cancelled'
  | 'payment.received'
  | 'payment.reversed'
  | 'journal.posted'
  | 'journal.reversed'

export interface BaseEvent {
  event: EventName
  event_id: string        // UUID
  timestamp: string       // ISO 8601
  company_id: string      // UUID
  source_system: 'fin-core' | 'gobd' | 'ai-worker'
  version: '1.0'
}

export interface InvoiceCreatedEvent extends BaseEvent {
  event: 'invoice.created'
  payload: {
    invoice_id: string
    invoice_number: string
    customer_id: string
    invoice_date: string
    due_date: string
    subtotal: number
    vat_amount: number
    total: number
    currency: string
  }
}

export interface InvoiceFinalizedEvent extends BaseEvent {
  event: 'invoice.finalized'
  payload: {
    invoice_id: string
    invoice_number: string
    journal_entry_id: string
    total: number
    currency: string
  }
}

export interface PaymentReceivedEvent extends BaseEvent {
  event: 'payment.received'
  payload: {
    payment_id: string
    invoice_id: string
    amount: number
    currency: string
    payment_date: string
    payment_method: string
  }
}

export interface JournalPostedEvent extends BaseEvent {
  event: 'journal.posted'
  payload: {
    journal_entry_id: string
    entry_number: string
    entry_date: string
    total_debit: number
    total_credit: number
    source_type: string
    source_id: string
  }
}

export type FinCoreEvent =
  | InvoiceCreatedEvent
  | InvoiceFinalizedEvent
  | PaymentReceivedEvent
  | JournalPostedEvent
