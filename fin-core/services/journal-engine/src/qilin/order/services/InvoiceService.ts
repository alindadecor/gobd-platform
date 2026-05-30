/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoiceDto } from '../models/invoiceDto';
import type { successResponse_invoiceDetailDto } from '../models/successResponse_invoiceDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InvoiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new invoice
     * @returns successResponse_invoiceDetailDto The OK response
     * @throws ApiError
     */
    public createInvoice({
        orderId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * Invoice Data Model
         */
        requestBody: invoiceDto,
    }): CancelablePromise<successResponse_invoiceDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/invoices',
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
     * Get list of Invoice by OrderId
     * @returns successResponse_invoiceDetailDto<any> The OK response
     * @throws ApiError
     */
    public getInvoicesByOrderId({
        orderId,
        pageIndex,
        pageSize,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items of per page
         */
        pageSize?: number,
    }): CancelablePromise<successResponse_invoiceDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/invoices',
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
     * Get the detail of Invoice by InvoiceId
     * @returns successResponse_invoiceDetailDto The OK response
     * @throws ApiError
     */
    public getInvoicesByInvoiceId({
        orderId,
        invoiceId,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **InvoiceId** parameter
         */
        invoiceId: string,
    }): CancelablePromise<successResponse_invoiceDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/invoices/{invoiceId}',
            path: {
                'orderId': orderId,
                'invoiceId': invoiceId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get basic info of Invoice by InvoiceId
     * @returns any No description
     * @throws ApiError
     */
    public getBasicInfoInvoiceByInvoiceId({
        orderId,
        invoiceId,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **InvoiceId** parameter
         */
        invoiceId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/orders/{orderId}/invoices/{invoiceId}',
            path: {
                'orderId': orderId,
                'invoiceId': invoiceId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get the detail of Invoice by Invoice Internal Id
     * @returns successResponse_invoiceDetailDto The OK response
     * @throws ApiError
     */
    public getInvoicesByInvoiceInternalId({
        orderId,
        invoiceId,
    }: {
        /**
         * The internal **OrderId** parameter
         */
        orderId: string,
        /**
         * The internal **InvoiceId** parameter
         */
        invoiceId: string,
    }): CancelablePromise<successResponse_invoiceDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/internal/orders/{orderId}/invoices/{invoiceId}',
            path: {
                'orderId': orderId,
                'invoiceId': invoiceId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
