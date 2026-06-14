/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressDto } from './addressDto';
import type { contactDto } from './contactDto';
import type { money } from './money';
import type { noteDto } from './noteDto';
import type { purchaseOrderLineItemDto } from './purchaseOrderLineItemDto';
export type refundDto = {
    /**
     * The order item ids to which this credit note relates
     */
    purchaseOrderLineItems?: Array<purchaseOrderLineItemDto> | null;
    refundCreator?: addressDto;
    refundReceiver?: addressDto;
    /**
     * Notes to this credit.
     */
    notes?: Array<noteDto> | null;
    contact?: contactDto;
    /**
     * The credit date
     */
    claimDate: string;
    /**
     * Reference to the ID of refund in the channel
     */
    refundId: string;
    /**
     * State value of the refund<br/>
     * Value:<br/>
     * 0: InProgress<br/>
     * 1: Claimed<br/>
     * 2: Issued<br/>
     * 3: Cancelled
     */
    state?: refundDto.state;
    /**
     * List of media url
     */
    mediaUrls?: Array<string> | null;
    /**
     * Should the credit be paid out to the customer? (If 'no', then the credit becomes credit on the customer's account).
     */
    isPayedOut?: boolean | null;
    totalGross?: money;
    totalNet?: money;
    /**
     * The invoice to which this credit note relates
     */
    referencingInvoice?: string | null;
    /**
     * The reason for the credit.
     */
    reason?: string | null;
    /**
     * A list of additional options to this credit
     */
    options?: Record<string, Record<string, any>>;
};
export namespace refundDto {
    /**
     * State value of the refund<br/>
     * Value:<br/>
     * 0: InProgress<br/>
     * 1: Claimed<br/>
     * 2: Issued<br/>
     * 3: Cancelled
     */
    export enum state {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

