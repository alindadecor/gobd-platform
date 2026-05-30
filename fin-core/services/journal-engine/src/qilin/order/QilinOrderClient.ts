/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { CancellationService } from './services/CancellationService';
import { FeedbackService } from './services/FeedbackService';
import { InvoiceService } from './services/InvoiceService';
import { OrderService } from './services/OrderService';
import { OrderSupportTicketService } from './services/OrderSupportTicketService';
import { PaymentInfoService } from './services/PaymentInfoService';
import { PurchaseOrderLineItemService } from './services/PurchaseOrderLineItemService';
import { RefundService } from './services/RefundService';
import { ReturnService } from './services/ReturnService';
import { ShipmentService } from './services/ShipmentService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class QilinOrderClient {
    public readonly cancellation: CancellationService;
    public readonly feedback: FeedbackService;
    public readonly invoice: InvoiceService;
    public readonly order: OrderService;
    public readonly orderSupportTicket: OrderSupportTicketService;
    public readonly paymentInfo: PaymentInfoService;
    public readonly purchaseOrderLineItem: PurchaseOrderLineItemService;
    public readonly refund: RefundService;
    public readonly return: ReturnService;
    public readonly shipment: ShipmentService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://apimgmt-qilin-dev.azure-api.net/test/api',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.cancellation = new CancellationService(this.request);
        this.feedback = new FeedbackService(this.request);
        this.invoice = new InvoiceService(this.request);
        this.order = new OrderService(this.request);
        this.orderSupportTicket = new OrderSupportTicketService(this.request);
        this.paymentInfo = new PaymentInfoService(this.request);
        this.purchaseOrderLineItem = new PurchaseOrderLineItemService(this.request);
        this.refund = new RefundService(this.request);
        this.return = new ReturnService(this.request);
        this.shipment = new ShipmentService(this.request);
    }
}

