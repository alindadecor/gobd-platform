/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { createShippingClassificationDto } from '../models/createShippingClassificationDto';
import type { getByIdsResponseDto_shippingClassificationDetailDto } from '../models/getByIdsResponseDto_shippingClassificationDetailDto';
import type { shippingClassificationDto } from '../models/shippingClassificationDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { successResponse_shippingClassificationDetailDto } from '../models/successResponse_shippingClassificationDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ShippingClassificationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a shipping classification
     * @returns successResponse_shippingClassificationDetailDto Successful response with created object
     * @throws ApiError
     */
    public createShippingClassification({
        requestBody,
    }: {
        /**
         * ShippingClassification Model
         */
        requestBody: createShippingClassificationDto,
    }): CancelablePromise<successResponse_shippingClassificationDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ShippingClassifications',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get list of shipping classification
     * @returns successResponse_shippingClassificationDetailDto<any> Successful response with list of filtered shipping classification
     * @throws ApiError
     */
    public getShippingClassificationList({
        acceptLanguage,
        pageIndex,
        pageSize,
        searchString,
        orderBy,
        orderType,
    }: {
        /**
         * Language
         */
        acceptLanguage: string,
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items of per page
         */
        pageSize?: number,
        /**
         * Search keywords
         */
        searchString?: string,
        /**
         * Order by field
         */
        orderBy?: string,
        /**
         * Order by type
         */
        orderType?: string,
    }): CancelablePromise<successResponse_shippingClassificationDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ShippingClassifications',
            headers: {
                'Accept-Language': acceptLanguage,
            },
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'searchString': searchString,
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
     * Delete a shipping classification
     * @returns successResponse_object The OK response
     * @throws ApiError
     */
    public deleteShippingClassification({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ShippingClassifications/{id}',
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
     * Get detail of shipping classification by id
     * @returns successResponse_shippingClassificationDetailDto Successful response with detail of a shipping classification by id
     * @throws ApiError
     */
    public getShippingClassificationDetail({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_shippingClassificationDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ShippingClassifications/{id}',
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
     * Update a shipping classification
     * @returns successResponse_shippingClassificationDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateShippingClassification({
        id,
        requestBody,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
        /**
         * ShippingClassification Model
         */
        requestBody: shippingClassificationDto,
    }): CancelablePromise<successResponse_shippingClassificationDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/ShippingClassifications/{id}',
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
     * Get list of shippingclassifications by externalIds
     * @returns getByIdsResponseDto_shippingClassificationDetailDto Successful response with list of products by ids
     * @throws ApiError
     */
    public getShippingClassificationsByExternalIds({
        requestBody,
    }: {
        /**
         * List of externalIds of shippingclassifications
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_shippingClassificationDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shippingclassifications/list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
