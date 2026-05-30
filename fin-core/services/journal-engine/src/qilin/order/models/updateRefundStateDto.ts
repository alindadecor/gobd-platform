/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type updateRefundStateDto = {
    /**
     * State value of the refund<br/>
     * Value:<br/>
     * 0: InProgress<br/>
     * 1: Claimed<br/>
     * 2: Issued<br/>
     * 3: Cancelled
     */
    newState?: updateRefundStateDto.newState;
};
export namespace updateRefundStateDto {
    /**
     * State value of the refund<br/>
     * Value:<br/>
     * 0: InProgress<br/>
     * 1: Claimed<br/>
     * 2: Issued<br/>
     * 3: Cancelled
     */
    export enum newState {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

