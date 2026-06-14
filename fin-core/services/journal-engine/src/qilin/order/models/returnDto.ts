/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressDto } from './addressDto';
import type { noteDto } from './noteDto';
import type { purchaseOrderLineItemDto } from './purchaseOrderLineItemDto';
import type { shippingInfoDto } from './shippingInfoDto';
export type returnDto = {
    deliveryAddress?: addressDto;
    shippingInfo?: shippingInfoDto;
    /**
     * Notes on this return.
     */
    notes?: Array<noteDto> | null;
    /**
     * A list of order items that have been returned.
     */
    purchaseOrderLineItems: Array<purchaseOrderLineItemDto> | null;
    /**
     * Reference to the ID of return in the channel
     */
    returnId: string;
    /**
     * The status value of the return<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Acknowledged<br/>
     * 2: Rejected<br/>
     * 3: LabelGenerated<br/>
     * 4: PackageSent<br/>
     * 5: PackageReceived<br/>
     * 6: LabelDeleted<br/>
     * 7: ClarificationRequest<br/>
     * 8: ClarificationAcknowledged<br/>
     * 9: ClarificationRejected<br/>
     * 10: RepairRequest<br/>
     * 11: RepairAcknowledged<br/>
     * 12: RepairRejected<br/>
     * 13: Finished
     */
    state: returnDto.state;
    /**
     * The reason for the return request
     */
    requestReason?: string | null;
    /**
     * The reason for the rejection of the return request
     */
    rejectReason?: string | null;
    /**
     * The ID of the package with which the item was originally shipped.
     */
    packageId?: string | null;
    /**
     * The number of days between the shipment of the item and the arrival of the return.
     */
    daysSinceShipping?: number | null;
    /**
     * A list of additional options to this return
     */
    options?: Record<string, Record<string, any>>;
};
export namespace returnDto {
    /**
     * The status value of the return<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Acknowledged<br/>
     * 2: Rejected<br/>
     * 3: LabelGenerated<br/>
     * 4: PackageSent<br/>
     * 5: PackageReceived<br/>
     * 6: LabelDeleted<br/>
     * 7: ClarificationRequest<br/>
     * 8: ClarificationAcknowledged<br/>
     * 9: ClarificationRejected<br/>
     * 10: RepairRequest<br/>
     * 11: RepairAcknowledged<br/>
     * 12: RepairRejected<br/>
     * 13: Finished
     */
    export enum state {
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
    }
}

