/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressDto } from './addressDto';
import type { contactDto } from './contactDto';
import type { noteDto } from './noteDto';
export type updateRefundDto = {
    /**
     * The credit date
     */
    claimDate: string;
    /**
     * State of the refund<br/>
     * Value:<br/>
     * 0: InProgress<br/>
     * 1: Claimed<br/>
     * 2: Issued<br/>
     * 3: Cancelled
     */
    state?: updateRefundDto.state;
    /**
     * List of media id
     */
    mediaUrls?: Array<string> | null;
    /**
     * Should the credit be paid out to the customer? (If 'no', then the credit becomes credit on the customer's account).
     */
    isPayedOut?: boolean | null;
    refundReceiver?: addressDto;
    /**
     * The reason for the credit.
     */
    reason?: string | null;
    /**
     * Notes to this credit.
     */
    notes?: Array<noteDto> | null;
    /**
     * A list of additional options to this credit
     */
    options?: Record<string, Record<string, any>>;
    contact?: contactDto;
};
export namespace updateRefundDto {
    /**
     * State of the refund<br/>
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

