/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { brandDto } from '../models/brandDto';
import type { getByIdsResponseDto_brandDetailDto } from '../models/getByIdsResponseDto_brandDetailDto';
import type { successResponse_brandDetailDto } from '../models/successResponse_brandDetailDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BrandService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a brand item
     * @returns successResponse_brandDetailDto Successful response with created object
     * @throws ApiError
     */
    public createBrand({
        requestBody,
    }: {
        /**
         * Brand Data Model
         */
        requestBody: brandDto,
    }): CancelablePromise<successResponse_brandDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/brands',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get list of brand
     * @returns successResponse_brandDetailDto<any> Successful response with list of filtered brands
     * @throws ApiError
     */
    public getListBrand({
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
    }): CancelablePromise<successResponse_brandDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/brands',
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
     * Delete a brand item
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public deleteBrand({
        id,
    }: {
        /**
         * The brand identity
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/brands/{id}',
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
     * Get a brand item by id
     * @returns successResponse_brandDetailDto Successful response with detail of a brand by id
     * @throws ApiError
     */
    public getBrandById({
        id,
    }: {
        /**
         * The brand identity
         */
        id: string,
    }): CancelablePromise<successResponse_brandDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/brands/{id}',
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
     * Update a brand item
     * @returns successResponse_brandDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateBrand({
        id,
        requestBody,
    }: {
        /**
         * The brand identity
         */
        id: string,
        /**
         * Brand Data Model
         */
        requestBody: brandDto,
    }): CancelablePromise<successResponse_brandDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/brands/{id}',
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
     * Get list of brands by externalIds
     * @returns getByIdsResponseDto_brandDetailDto Successful response with list of products by ids
     * @throws ApiError
     */
    public getBrandsByExternalIds({
        requestBody,
    }: {
        /**
         * List of externalIds of brands
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_brandDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/brands/list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
