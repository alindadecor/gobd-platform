/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { orderDto } from '../models/orderDto';
import type { patchUpdateDto } from '../models/patchUpdateDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { successResponse_orderDetailDto } from '../models/successResponse_orderDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrderService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new Order
     * @returns successResponse_orderDetailDto The OK response
     * @throws ApiError
     */
    public createOrder({
        requestBody,
    }: {
        /**
         * Order Data Model
         */
        requestBody: orderDto,
    }): CancelablePromise<successResponse_orderDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list Order
     * @returns successResponse_orderDetailDto<any> List of order
     * @throws ApiError
     */
    public getOrders({
        pageIndex,
        pageSize,
        creationDateFrom,
        creationDateTo,
        updatedDateFrom,
        updatedDateTo,
        productVariationId,
    }: {
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items per page
         */
        pageSize?: number,
        /**
         * Creation date from
         */
        creationDateFrom?: string,
        /**
         * Creation date to
         */
        creationDateTo?: string,
        /**
         * Last updated date from
         */
        updatedDateFrom?: string,
        /**
         * Last updated date to
         */
        updatedDateTo?: string,
        /**
         * Product variation Id for filter
         */
        productVariationId?: string,
    }): CancelablePromise<successResponse_orderDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders',
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'creationDateFrom': creationDateFrom,
                'creationDateTo': creationDateTo,
                'updatedDateFrom': updatedDateFrom,
                'updatedDateTo': updatedDateTo,
                'productVariationId': productVariationId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Delete an order by Id
     * @returns successResponse_object The OK response
     * @throws ApiError
     */
    public deleteOrder({
        id,
    }: {
        /**
         * The **Order Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orders/{id}',
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
     * Delta update an order by id
     * @returns successResponse_orderDetailDto The OK response
     * @throws ApiError
     */
    public deltaUpdateOrder({
        id,
        requestBody,
    }: {
        /**
         * The **Order Id** parameter
         */
        id: string,
        /**
         * Delta Update Data Model
         */
        requestBody: Array<patchUpdateDto>,
    }): CancelablePromise<successResponse_orderDetailDto> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/orders/{id}',
            path: {
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
     * Get order by id
     * @returns successResponse_orderDetailDto single order
     * @throws ApiError
     */
    public getOrderById({
        id,
    }: {
        /**
         * The order identity
         */
        id: string,
    }): CancelablePromise<successResponse_orderDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{id}',
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
     * Update an order by id
     * @returns successResponse_orderDetailDto The OK response
     * @throws ApiError
     */
    public updateOrder({
        id,
        requestBody,
    }: {
        /**
         * The **Order Id** parameter
         */
        id: string,
        /**
         * Order Data Model
         */
        requestBody: orderDto,
    }): CancelablePromise<successResponse_orderDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orders/{id}',
            path: {
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
}
