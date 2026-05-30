/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoiceAddressDto } from './invoiceAddressDto';
import type { money } from './money';
import type { noteDto } from './noteDto';
import type { paymentDto } from './paymentDto';
export type invoiceDto = {
    /**
     * The list of payment
     */
    payments?: Array<paymentDto> | null;
    invoiceCreator?: invoiceAddressDto;
    invoiceReceiver?: invoiceAddressDto;
    /**
     * Notes to this bill
     */
    notes?: Array<noteDto> | null;
    /**
     * Reference to the ID of invoice in the channel
     */
    invoiceId: string;
    /**
     * The invoice date
     */
    invoiceCreatedDate: string;
    /**
     * The invoice number
     */
    invoiceNumber: string;
    /**
     * The invoice type
     */
    invoiceType: invoiceDto.invoiceType;
    /**
     * The Urls to this invoice
     */
    mediaUrls?: Array<string> | null;
    /**
     * The payment term in days
     */
    termOfPayment?: number | null;
    /**
     * Has the bill been paid yet?
     */
    isPaid?: boolean | null;
    totalGross?: money;
    totalNet?: money;
    /**
     * The Urls to this invoice
     */
    purchaseOrderLineItemIds?: Array<string> | null;
    /**
     * A list of additional options to this bill
     */
    options?: Record<string, Record<string, any>>;
};
export namespace invoiceDto {
    /**
     * The invoice type
     */
    export enum invoiceType {
        '_0' = 0,
        '_1' = 1,
    }
}

