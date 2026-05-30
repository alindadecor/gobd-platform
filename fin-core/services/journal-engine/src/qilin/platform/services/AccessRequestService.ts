/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { createAccessRequestDto } from '../models/createAccessRequestDto';
import type { successResponse_accessRequestBaseDto } from '../models/successResponse_accessRequestBaseDto';
import type { successResponse_getAccessRequestDetailDto } from '../models/successResponse_getAccessRequestDetailDto';
import type { updateAccessRequestStatusDto } from '../models/updateAccessRequestStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccessRequestService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new access request
     * @returns successResponse_accessRequestBaseDto The OK response
     * @throws ApiError
     */
    public createAccessRequest({
        requestBody,
    }: {
        /**
         * Access request model
         */
        requestBody: createAccessRequestDto,
    }): CancelablePromise<successResponse_accessRequestBaseDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/requests/access',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list of access requests
     * @returns successResponse_getAccessRequestDetailDto<any> Successful response with list of object
     * @throws ApiError
     */
    public getAccessRequests({
        pageIndex,
        pageSize,
        orderBy,
        orderType,
    }: {
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items of per page
         */
        pageSize?: number,
        /**
         * Order by field
         */
        orderBy?: string,
        /**
         * Order by type
         */
        orderType?: string,
    }): CancelablePromise<successResponse_getAccessRequestDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/requests/access',
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'orderBy': orderBy,
                'orderType': orderType,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get the detail of a access request by id
     * @returns successResponse_getAccessRequestDetailDto The OK response
     * @throws ApiError
     */
    public getAccessRequestById({
        id,
    }: {
        /**
         * The access request identity
         */
        id: string,
    }): CancelablePromise<successResponse_getAccessRequestDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/requests/access/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update access request status
     * @returns successResponse_accessRequestBaseDto Successful response with updated object
     * @throws ApiError
     */
    public updateAccessRequestStatus({
        requestBody,
    }: {
        /**
         * Update access request status model
         */
        requestBody: updateAccessRequestStatusDto,
    }): CancelablePromise<successResponse_accessRequestBaseDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/requests/access/{requestId}/status',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
