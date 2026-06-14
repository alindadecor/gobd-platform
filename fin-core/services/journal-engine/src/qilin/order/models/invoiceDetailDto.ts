/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoiceAddressDetailDto } from './invoiceAddressDetailDto';
import type { money } from './money';
import type { noteDetailDto } from './noteDetailDto';
import type { paymentDetailDto } from './paymentDetailDto';
export type invoiceDetailDto = {
    /**
     * The list of payment
     */
    payments?: Array<paymentDetailDto> | null;
    invoiceCreator?: invoiceAddressDetailDto;
    invoiceReceiver?: invoiceAddressDetailDto;
    /**
     * Notes to this bill.
     */
    notes?: Array<noteDetailDto> | null;
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
    invoiceType: invoiceDetailDto.invoiceType;
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
export namespace invoiceDetailDto {
    /**
     * The invoice type
     */
    export enum invoiceType {
        '_0' = 0,
        '_1' = 1,
    }
}

