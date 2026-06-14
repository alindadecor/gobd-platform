/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type updateAccessRequestStatusDto = {
    /**
     * The status of the access request<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Accepted<br/>
     * 2: Rejected<br/>
     * 3: Closed
     */
    status?: updateAccessRequestStatusDto.status;
    /**
     * The reason for the rejection of the acces request
     */
    rejectReason?: string;
};
export namespace updateAccessRequestStatusDto {
    /**
     * The status of the access request<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Accepted<br/>
     * 2: Rejected<br/>
     * 3: Closed
     */
    export enum status {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

