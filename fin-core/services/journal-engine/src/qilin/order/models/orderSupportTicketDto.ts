/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { messageDto } from './messageDto';
export type orderSupportTicketDto = {
    /**
     * A list of messages in the ticket. Ticket has messages and those are back-and-forth communication between buyer and seller.
     */
    messages?: Array<messageDto>;
    /**
     * Reference to the ID of support ticket in the channel
     */
    supportTicketId: string;
    /**
     * The theme of the ticket<br/>
     * Value:<br/>
     * 0: Unknown<br/>
     * 1: AccountAgeVerification<br/>
     * 2: AccountOther<br/>
     * 3: AccountPayOut<br/>
     * 4: AccountLogin<br/>
     * 5: AccountDeletion<br/>
     * 6: AccountGdpr<br/>
     * 7: AccountNewsletter<br/>
     * 8: OrderOther<br/>
     * 9: Fraud<br/>
     * 10: DeliveryAddressChange<br/>
     * 11: DeliveryOther<br/>
     * 12: DeliveryWrongProducts<br/>
     * 13: DeliveryMissingProducts<br/>
     * 14: DeliveryNotReceived<br/>
     * 15: DeliveryLate<br/>
     * 16: ProductOther<br/>
     * 17: ProductWrongExpectation<br/>
     * 18: ProductDefect<br/>
     * 19: ProductProperties<br/>
     * 20: ProductService<br/>
     * 21: ProductReplacement<br/>
     * 22: ProductAvailability<br/>
     * 23: ReturnOther<br/>
     * 24: ReturnRequest<br/>
     * 25: ReturnShippingLabel<br/>
     * 26: ReturnState<br/>
     * 27: CancellationOther<br/>
     * 28: CancellationRequest<br/>
     * 29: PaymentOther<br/>
     * 30: PaymentVoucher<br/>
     * 31: PaymentRefund<br/>
     * 32: PaymentAdmonition<br/>
     * 33: PaymentProblemsWithPsp<br/>
     * 34: PaymentInvoice<br/>
     * 35: PaymentTax<br/>
     * 36: Other
     */
    topic: orderSupportTicketDto.topic;
    /**
     * More detail in Ticket Topic
     */
    reason?: string;
    /**
     * An identifier that the marketplace uses to identify API actions for this order.
     */
    orderId: string;
    /**
     * A list of order item ids that the ticket is about.
     */
    orderLineItems: Array<string>;
    /**
     * Where is the ticket come from? It should be name of Marketplace
     */
    ticketSource: string;
    /**
     * The system has responsible for solving ticket. It should me the name of ERP or shop system
     */
    ticketDestination: string;
    /**
     * Contact point(name, email, department) responsible for receiving and processing tickets at ERP/ShopSystem
     */
    receiver: string;
    /**
     * Subject of ticket
     */
    subject: string;
    /**
     * A list of additional options for this ticket
     */
    options?: Record<string, Record<string, any>>;
};
export namespace orderSupportTicketDto {
    /**
     * The theme of the ticket<br/>
     * Value:<br/>
     * 0: Unknown<br/>
     * 1: AccountAgeVerification<br/>
     * 2: AccountOther<br/>
     * 3: AccountPayOut<br/>
     * 4: AccountLogin<br/>
     * 5: AccountDeletion<br/>
     * 6: AccountGdpr<br/>
     * 7: AccountNewsletter<br/>
     * 8: OrderOther<br/>
     * 9: Fraud<br/>
     * 10: DeliveryAddressChange<br/>
     * 11: DeliveryOther<br/>
     * 12: DeliveryWrongProducts<br/>
     * 13: DeliveryMissingProducts<br/>
     * 14: DeliveryNotReceived<br/>
     * 15: DeliveryLate<br/>
     * 16: ProductOther<br/>
     * 17: ProductWrongExpectation<br/>
     * 18: ProductDefect<br/>
     * 19: ProductProperties<br/>
     * 20: ProductService<br/>
     * 21: ProductReplacement<br/>
     * 22: ProductAvailability<br/>
     * 23: ReturnOther<br/>
     * 24: ReturnRequest<br/>
     * 25: ReturnShippingLabel<br/>
     * 26: ReturnState<br/>
     * 27: CancellationOther<br/>
     * 28: CancellationRequest<br/>
     * 29: PaymentOther<br/>
     * 30: PaymentVoucher<br/>
     * 31: PaymentRefund<br/>
     * 32: PaymentAdmonition<br/>
     * 33: PaymentProblemsWithPsp<br/>
     * 34: PaymentInvoice<br/>
     * 35: PaymentTax<br/>
     * 36: Other
     */
    export enum topic {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
        '_13' = 13,
        '_14' = 14,
        '_15' = 15,
        '_16' = 16,
        '_17' = 17,
        '_18' = 18,
        '_19' = 19,
        '_20' = 20,
        '_21' = 21,
        '_22' = 22,
        '_23' = 23,
        '_24' = 24,
        '_25' = 25,
        '_26' = 26,
        '_27' = 27,
        '_28' = 28,
        '_29' = 29,
        '_30' = 30,
        '_31' = 31,
        '_32' = 32,
        '_33' = 33,
        '_34' = 34,
        '_35' = 35,
        '_36' = 36,
    }
}

