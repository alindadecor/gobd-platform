/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { returnDto } from '../models/returnDto';
import type { successResponse_returnDetailDto } from '../models/successResponse_returnDetailDto';
import type { updateReturnStatusDto } from '../models/updateReturnStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReturnService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new Return
     * @returns successResponse_returnDetailDto The OK response
     * @throws ApiError
     */
    public createReturn({
        orderId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * Return Data Model
         */
        requestBody: returnDto,
    }): CancelablePromise<successResponse_returnDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/returns',
            path: {
                'orderId': orderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list Return
     * @returns successResponse_returnDetailDto<any> List of return
     * @throws ApiError
     */
    public getReturns({
        orderId,
        pageIndex,
        pageSize,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items per page
         */
        pageSize?: number,
    }): CancelablePromise<successResponse_returnDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/returns',
            path: {
                'orderId': orderId,
            },
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get basic info of Return
     * @returns any No description
     * @throws ApiError
     */
    public getBasicReturnById({
        orderId,
        id,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * The **ReturnId** parameter from third party
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/orders/{orderId}/returns/{id}',
            path: {
                'orderId': orderId,
                'id': id,
            },
            errors: {
                400: `No description`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get Return by returnId
     * @returns successResponse_returnDetailDto The OK response
     * @throws ApiError
     */
    public getReturnById({
        orderId,
        id,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * The **ReturnId** parameter from third party
         */
        id: string,
    }): CancelablePromise<successResponse_returnDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/returns/{id}',
            path: {
                'orderId': orderId,
                'id': id,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update Return
     * @returns successResponse_returnDetailDto The OK response
     * @throws ApiError
     */
    public updateReturn({
        orderId,
        id,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * The **ReturnId** parameter from third party
         */
        id: string,
        /**
         * Return Data Model
         */
        requestBody: returnDto,
    }): CancelablePromise<successResponse_returnDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orders/{orderId}/returns/{id}',
            path: {
                'orderId': orderId,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update Return Status
     * @returns successResponse_returnDetailDto The OK response
     * @throws ApiError
     */
    public updateReturnStatus({
        orderId,
        returnId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * The **ReturnId** parameter from third party
         */
        returnId: string,
        /**
         * Return Status Data Model
         */
        requestBody: updateReturnStatusDto,
    }): CancelablePromise<successResponse_returnDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orders/{orderId}/returns/{returnId}/state',
            path: {
                'orderId': orderId,
                'returnId': returnId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
