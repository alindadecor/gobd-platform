/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { createProductDto } from '../models/createProductDto';
import type { getByIdsResponseDto_productDetailDto } from '../models/getByIdsResponseDto_productDetailDto';
import type { patchUpdateDto } from '../models/patchUpdateDto';
import type { productDto } from '../models/productDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { successResponse_productDetailDto } from '../models/successResponse_productDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProductService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a product item
     * @returns successResponse_productDetailDto Successful response with created object
     * @throws ApiError
     */
    public createProduct({
        requestBody,
    }: {
        /**
         * Product Data Model
         */
        requestBody: createProductDto,
    }): CancelablePromise<successResponse_productDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/products',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list of products
     * @returns successResponse_productDetailDto<any> Successful response with list of filtered products
     * @throws ApiError
     */
    public getProducts({
        isFlat,
        pageIndex,
        pageSize,
        searchString,
        orderBy,
        orderType,
        category,
        brand,
        tag,
        acceptLanguage,
    }: {
        /**
         * Define to response with flat model
         */
        isFlat: string,
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
        /**
         * Category filter string
         */
        category?: string,
        /**
         * Brand filter string
         */
        brand?: string,
        /**
         * Tag filter string
         */
        tag?: string,
        /**
         * Language filter
         */
        acceptLanguage?: string,
    }): CancelablePromise<successResponse_productDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/products',
            headers: {
                'Accept-Language': acceptLanguage,
                'isFlat': isFlat,
            },
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'searchString': searchString,
                'orderBy': orderBy,
                'orderType': orderType,
                'category': category,
                'brand': brand,
                'tag': tag,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Delete a product
     * @returns successResponse_object The OK response
     * @throws ApiError
     */
    public run({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/products/{id}',
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
     * Get a product by id
     * @returns successResponse_productDetailDto Successful response with detail of a product by id
     * @throws ApiError
     */
    public getProductById({
        id,
        isFlat,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
        /**
         * Define to response with flat model
         */
        isFlat: string,
    }): CancelablePromise<successResponse_productDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            headers: {
                'isFlat': isFlat,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get basic info of a product
     * @returns any No description
     * @throws ApiError
     */
    public headBasicInfoProduct({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/products/{id}',
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
     * Delta update a product
     * @returns successResponse_productDetailDto Successful response with updated object
     * @throws ApiError
     */
    public patchProduct({
        id,
        requestBody,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
        /**
         * Delta Update Data Model
         */
        requestBody: Array<patchUpdateDto>,
    }): CancelablePromise<successResponse_productDetailDto> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/products/{id}',
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
     * Update a product
     * @returns successResponse_productDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateProduct({
        id,
        requestBody,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
        /**
         * Product Data Model
         */
        requestBody: productDto,
    }): CancelablePromise<successResponse_productDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/products/{id}',
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
     * Get list properties of product
     * @returns successResponse_productDetailDto Successful response with detail of a product by id
     * @throws ApiError
     */
    public getProductInfo({
        id,
        isFlat,
        requestBody,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
        /**
         * Define to response with flat model
         */
        isFlat: string,
        /**
         * List of properties
         */
        requestBody: Array<string>,
    }): CancelablePromise<successResponse_productDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/products/{id}/info',
            path: {
                'id': id,
            },
            headers: {
                'isFlat': isFlat,
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
     * Get list of product by externalIds
     * @returns getByIdsResponseDto_productDetailDto Successful response with list of products by externalIds
     * @throws ApiError
     */
    public getProductsByExternalIds({
        isFlat,
        requestBody,
    }: {
        /**
         * Define to response with flat model
         */
        isFlat: string,
        /**
         * List of the productId
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_productDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/products/list',
            headers: {
                'isFlat': isFlat,
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
     * Get list of product by ids
     * @returns getByIdsResponseDto_productDetailDto Successful response with list of products by ids
     * @throws ApiError
     */
    public getProductsByListId({
        isFlat,
        requestBody,
    }: {
        /**
         * Define to response with flat model
         */
        isFlat: string,
        /**
         * List of the product identity
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_productDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/get-products',
            headers: {
                'isFlat': isFlat,
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
