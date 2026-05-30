/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { getByIdsResponseDto_variationKeyDetailDto } from '../models/getByIdsResponseDto_variationKeyDetailDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { successResponse_variationKeyDetailDto } from '../models/successResponse_variationKeyDetailDto';
import type { successResponse_variationKeyDto } from '../models/successResponse_variationKeyDto';
import type { variationKeyDto } from '../models/variationKeyDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VariationKeyService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new variation key
     * @returns successResponse_variationKeyDetailDto Successful response with created object
     * @throws ApiError
     */
    public createVariationKey({
        requestBody,
    }: {
        /**
         * VariationKey Model
         */
        requestBody: variationKeyDto,
    }): CancelablePromise<successResponse_variationKeyDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/VariationKeys',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get list of variation key
     * @returns successResponse_variationKeyDetailDto<any> Successful response with list of filtered variation key
     * @throws ApiError
     */
    public getVariationKeyList({
        acceptLanguage,
        pageIndex,
        pageSize,
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
         * Order by field
         */
        orderBy?: string,
        /**
         * Order by type
         */
        orderType?: string,
    }): CancelablePromise<successResponse_variationKeyDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/VariationKeys',
            headers: {
                'Accept-Language': acceptLanguage,
            },
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
     * Delete a variation key
     * @returns successResponse_object The OK response
     * @throws ApiError
     */
    public deleteVariationKey({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/VariationKeys/{id}',
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
     * Get a variation key by id
     * @returns successResponse_variationKeyDto Successful response with detail of a variation key by id
     * @throws ApiError
     */
    public getVariationKeyById({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_variationKeyDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/VariationKeys/{id}',
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
     * Update a variation
     * @returns successResponse_variationKeyDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateVariationKey({
        id,
        requestBody,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
        /**
         * VariationKey Model
         */
        requestBody: variationKeyDto,
    }): CancelablePromise<successResponse_variationKeyDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/VariationKeys/{id}',
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
     * Get list of variation keys by externalIds
     * @returns getByIdsResponseDto_variationKeyDetailDto Successful response with list of products by ids
     * @throws ApiError
     */
    public getVariationKeysByExternalIds({
        requestBody,
    }: {
        /**
         * List of externalIds of variation keys
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_variationKeyDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/variationKeys/list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
