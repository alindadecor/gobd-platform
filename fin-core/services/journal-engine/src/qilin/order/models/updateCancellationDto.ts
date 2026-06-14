/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { noteDetailDto } from './noteDetailDto';
export type updateCancellationDto = {
    /**
     * The status of the cancellation<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Acknowledged<br/>
     * 2: Rejected<br/>
     * 3: Finished
     */
    state: updateCancellationDto.state;
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
    /**
     * Notes on this cancellation.
     */
    notes?: Array<noteDetailDto> | null;
};
export namespace updateCancellationDto {
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

