/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type updateReturnStatusDto = {
    /**
     * New state of this return.<br/>
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
    newState: updateReturnStatusDto.newState;
    /**
     * The reason for the rejection of the return request
     */
    rejectReason?: string | null;
};
export namespace updateReturnStatusDto {
    /**
     * New state of this return.<br/>
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
    export enum newState {
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

