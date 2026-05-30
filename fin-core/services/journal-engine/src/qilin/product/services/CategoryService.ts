/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { categoryBaseDto } from '../models/categoryBaseDto';
import type { createCategoryDto } from '../models/createCategoryDto';
import type { getByIdsResponseDto_categoryDetailDto } from '../models/getByIdsResponseDto_categoryDetailDto';
import type { successResponse_categoryDetailDto } from '../models/successResponse_categoryDetailDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CategoryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new category
     * @returns successResponse_categoryDetailDto Successful response with created object
     * @throws ApiError
     */
    public createCategory({
        requestBody,
    }: {
        /**
         * Category Model
         */
        requestBody: createCategoryDto,
    }): CancelablePromise<successResponse_categoryDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/categories',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get list of Category
     * @returns successResponse_categoryDetailDto<any> Successful response with list of filtered categories
     * @throws ApiError
     */
    public getCategoryList({
        acceptLanguage,
        pageIndex,
        pageSize,
        searchString,
        parentCategoryId,
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
         * Parent Category Id
         */
        parentCategoryId?: string,
        /**
         * Order by field
         */
        orderBy?: string,
        /**
         * Order by type
         */
        orderType?: string,
    }): CancelablePromise<successResponse_categoryDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/categories',
            headers: {
                'Accept-Language': acceptLanguage,
            },
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'searchString': searchString,
                'parentCategoryId': parentCategoryId,
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
     * Get list of categories by externalIds
     * @returns getByIdsResponseDto_categoryDetailDto Successful response with list of products by ids
     * @throws ApiError
     */
    public getCategoriesByExternalIds({
        requestBody,
    }: {
        /**
         * List of externalIds of categories
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_categoryDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/categories/list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update a category
     * @returns successResponse_categoryDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateCategory({
        id,
        requestBody,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
        /**
         * Category Model
         */
        requestBody: categoryBaseDto,
    }): CancelablePromise<successResponse_categoryDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/categories/{id}',
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
     * Delete a category
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public deleteCategory({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/categories/{id}',
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
     * Get a category by id
     * @returns successResponse_categoryDetailDto Successful response with detail of a category by id
     * @throws ApiError
     */
    public getCategoryById({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_categoryDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
