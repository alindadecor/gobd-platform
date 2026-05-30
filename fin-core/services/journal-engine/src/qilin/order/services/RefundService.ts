/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { refundDto } from '../models/refundDto';
import type { successResponse_refundDetailDto } from '../models/successResponse_refundDetailDto';
import type { updateRefundDto } from '../models/updateRefundDto';
import type { updateRefundStateDto } from '../models/updateRefundStateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RefundService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new Refund
     * @returns successResponse_refundDetailDto The OK response
     * @throws ApiError
     */
    public createRefund({
        orderId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * Refund Data Model
         */
        requestBody: refundDto,
    }): CancelablePromise<successResponse_refundDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/refunds',
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
     * Get list of Refund by OrderId
     * @returns successResponse_refundDetailDto<any> The OK response
     * @throws ApiError
     */
    public getRefundByOrderId({
        orderId,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
    }): CancelablePromise<successResponse_refundDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/refunds',
            path: {
                'orderId': orderId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get detail of Refund by RefundId
     * @returns successResponse_refundDetailDto The OK response
     * @throws ApiError
     */
    public getRefundByRefundId({
        orderId,
        refundId,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **RefundId** parameter
         */
        refundId: string,
    }): CancelablePromise<successResponse_refundDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/refunds/{refundId}',
            path: {
                'orderId': orderId,
                'refundId': refundId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get basic info of Refund by RefundId
     * @returns any No description
     * @throws ApiError
     */
    public getBasicInfoRefundByRefundId({
        orderId,
        refundId,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **RefundId** parameter
         */
        refundId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/orders/{orderId}/refunds/{refundId}',
            path: {
                'orderId': orderId,
                'refundId': refundId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update Refund
     * @returns successResponse_refundDetailDto The OK response
     * @throws ApiError
     */
    public updateRefund({
        orderId,
        refundId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * The **RefundId** parameter from third party
         */
        refundId: string,
        /**
         * Refund Data Model
         */
        requestBody: updateRefundDto,
    }): CancelablePromise<successResponse_refundDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orders/{orderId}/refunds/{refundId}',
            path: {
                'orderId': orderId,
                'refundId': refundId,
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
     * Update state of refund
     * @returns successResponse_refundDetailDto The OK response
     * @throws ApiError
     */
    public updateRefundState({
        orderId,
        refundId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter from third party
         */
        orderId: string,
        /**
         * The **RefundId** parameter from third party
         */
        refundId: string,
        /**
         * Refund State Model
         */
        requestBody: updateRefundStateDto,
    }): CancelablePromise<successResponse_refundDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orders/{orderId}/refunds/{refundId}/state',
            path: {
                'orderId': orderId,
                'refundId': refundId,
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
