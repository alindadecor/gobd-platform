/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { noteDto } from './noteDto';
import type { purchaseOrderLineItemDto } from './purchaseOrderLineItemDto';
export type cancellationDto = {
    /**
     * Notes on this cancellation.
     */
    notes?: Array<noteDto> | null;
    /**
     * A list of order items that have been cancelled.
     */
    purchaseOrderLineItems: Array<purchaseOrderLineItemDto> | null;
    /**
     * Reference to the ID of cancellation in the channel
     */
    cancellationId: string;
    /**
     * The status of the cancellation<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Acknowledged<br/>
     * 2: Rejected<br/>
     * 3: Finished
     */
    state: cancellationDto.state;
    /**
     * The reason for the cancellation request
     */
    requestReason?: string | null;
    /**
     * The reason for the rejection of the cancellation request
     */
    rejectReason?: string | null;
    /**
     * A list of additional options to this cancellation
     */
    options?: Record<string, Record<string, any>>;
};
export namespace cancellationDto {
    /**
     * The status of the cancellation<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Acknowledged<br/>
     * 2: Rejected<br/>
     * 3: Finished
     */
    export enum state {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

