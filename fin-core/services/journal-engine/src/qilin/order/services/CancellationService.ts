/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { cancellationDto } from '../models/cancellationDto';
import type { successResponse_cancellationDetailDto } from '../models/successResponse_cancellationDetailDto';
import type { updateCancellationDto } from '../models/updateCancellationDto';
import type { updateCancellationStateDto } from '../models/updateCancellationStateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CancellationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new Cancellation
     * @returns successResponse_cancellationDetailDto The OK response
     * @throws ApiError
     */
    public createCancellation({
        orderId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * Cancellation Data Model
         */
        requestBody: cancellationDto,
    }): CancelablePromise<successResponse_cancellationDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/cancellations',
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
     * Get cancellations by order Id
     * @returns successResponse_cancellationDetailDto<any> List of Cancellation
     * @throws ApiError
     */
    public getCancellationsByOrderId({
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
    }): CancelablePromise<successResponse_cancellationDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/cancellations',
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
     * Get the detail of Cancellation by CancellationId
     * @returns successResponse_cancellationDetailDto The OK response
     * @throws ApiError
     */
    public getCancellationById({
        orderId,
        cancellationId,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * The **CancellationId** parameter from third party
         */
        cancellationId: string,
    }): CancelablePromise<successResponse_cancellationDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/cancellations/{cancellationId}',
            path: {
                'orderId': orderId,
                'cancellationId': cancellationId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update Cancellation
     * @returns successResponse_cancellationDetailDto The OK response
     * @throws ApiError
     */
    public updateCancellation({
        orderId,
        cancellationId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * The **CancellationId** parameter from third party
         */
        cancellationId: string,
        /**
         * Cancellation Data Model
         */
        requestBody: updateCancellationDto,
    }): CancelablePromise<successResponse_cancellationDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orders/{orderId}/cancellations/{cancellationId}',
            path: {
                'orderId': orderId,
                'cancellationId': cancellationId,
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
     * Get the detail of Cancellation by internal CancellationId
     * @returns successResponse_cancellationDetailDto The OK response
     * @throws ApiError
     */
    public getCancellationByInternalId({
        orderId,
        cancellationId,
    }: {
        /**
         * The internal **OrderId** parameter
         */
        orderId: string,
        /**
         * The internal **CancellationId** parameter
         */
        cancellationId: string,
    }): CancelablePromise<successResponse_cancellationDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/internal/orders/{orderId}/cancellations/{cancellationId}',
            path: {
                'orderId': orderId,
                'cancellationId': cancellationId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update state of cancellation
     * @returns successResponse_cancellationDetailDto The OK response
     * @throws ApiError
     */
    public updateCancellationState({
        orderId,
        cancellationId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * The **CancellationId** parameter from third party
         */
        cancellationId: string,
        /**
         * Cancellation State Model
         */
        requestBody: updateCancellationStateDto,
    }): CancelablePromise<successResponse_cancellationDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orders/{orderId}/cancellations/{cancellationId}/state',
            path: {
                'orderId': orderId,
                'cancellationId': cancellationId,
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
