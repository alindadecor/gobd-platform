/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { successResponse_purchaseOrderLineItemDetailDto } from '../models/successResponse_purchaseOrderLineItemDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PurchaseOrderLineItemService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Purchase Order Line Item by Id
     * @returns successResponse_purchaseOrderLineItemDetailDto The OK response
     * @throws ApiError
     */
    public getPoLineItemByOrderId({
        orderId,
        id,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **Id** of PurchaseOrderLineItem
         */
        id: string,
    }): CancelablePromise<successResponse_purchaseOrderLineItemDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/purchaseOrderLineItem/{id}',
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
     * Get list of Purchase Order Line Item by OrderId
     * @returns successResponse_purchaseOrderLineItemDetailDto<any> The OK response
     * @throws ApiError
     */
    public getPoLineItemByOrderId1({
        orderId,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
    }): CancelablePromise<successResponse_purchaseOrderLineItemDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/purchaseOrderLineItem',
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
