/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { paymentDto } from '../models/paymentDto';
import type { paymentInfoDto } from '../models/paymentInfoDto';
import type { successResponse_paymentInfoDetailDto } from '../models/successResponse_paymentInfoDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PaymentInfoService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new payment
     * @returns successResponse_paymentInfoDetailDto The OK response
     * @throws ApiError
     */
    public createPayment({
        orderId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * Payment Info Model
         */
        requestBody: paymentDto,
    }): CancelablePromise<successResponse_paymentInfoDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/paymentInfo/payments',
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
     * Create a new payment info
     * @returns successResponse_paymentInfoDetailDto The OK response
     * @throws ApiError
     */
    public createPaymentInfo({
        orderId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * Payment Info Model
         */
        requestBody: paymentInfoDto,
    }): CancelablePromise<successResponse_paymentInfoDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/paymentInfo',
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
     * Get Payment Info by orderId
     * @returns successResponse_paymentInfoDetailDto The Order payment information detail
     * @throws ApiError
     */
    public getPaymentInfo({
        orderId,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
    }): CancelablePromise<successResponse_paymentInfoDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/paymentInfo',
            path: {
                'orderId': orderId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
