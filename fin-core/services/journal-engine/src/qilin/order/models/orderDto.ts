/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressDto } from './addressDto';
import type { contactDto } from './contactDto';
import type { linkDto } from './linkDto';
import type { list_object } from './list_object';
import type { noteDto } from './noteDto';
import type { orderLineItemDto } from './orderLineItemDto';
import type { paymentInfoDto } from './paymentInfoDto';
export type orderDto = {
    /**
     * A list of order items for this order
     */
    orderLineItems: Array<orderLineItemDto>;
    paymentInfo?: paymentInfoDto;
    /**
     * A list with address to this order
     */
    addresses?: Array<addressDto> | null;
    /**
     * Notes on this Order.
     */
    notes?: Array<noteDto> | null;
    contact?: contactDto;
    /**
     * A list of links to this order
     */
    links?: Array<linkDto> | null;
    /**
     * Reference to the ID of the channel through which this order was generated.
     */
    channelId: string;
    /**
     * An identifier that the marketplace uses to identify API actions for this order.
     */
    orderId: string;
    /**
     * An identifier that the ERP system uses to identify actions for this order.
     */
    erpId?: string | null;
    /**
     * The order number under which the end customer finds this order in the backend of the marketplace.
     */
    orderNumberMarketplace?: string | null;
    /**
     * The order number under which the dealer finds this order in his ERP.
     */
    orderNumberErp?: string | null;
    /**
     * A list full of objects that we can use to transfer additional information that was not thought of before or for which it is not worth creating separate fields. It is necessary to have this list so that external providers can use Qilin flexibly without us having to adapt our order model for them.
     */
    additionalInformation?: Record<string, list_object>;
    /**
     * If the channel to which Qilin docks is also a middleware (e.g. IMN, Tradebyte) then this field indicates on which marketplace the order was created.
     */
    marketplaceName?: Record<string, string>;
    /**
     * A list of additional options to this order
     */
    options?: Record<string, Record<string, any>>;
};

