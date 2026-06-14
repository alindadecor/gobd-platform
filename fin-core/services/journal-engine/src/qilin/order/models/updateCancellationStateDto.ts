/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type updateCancellationStateDto = {
    /**
     * State value of the cancellation<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Acknowledged<br/>
     * 2: Rejected<br/>
     * 3: Finished
     */
    newState: updateCancellationStateDto.newState;
    /**
     * The reason for the rejection of the cancellation request
     */
    rejectReason?: string | null;
};
export namespace updateCancellationStateDto {
    /**
     * State value of the cancellation<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Acknowledged<br/>
     * 2: Rejected<br/>
     * 3: Finished
     */
    export enum newState {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

