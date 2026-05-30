/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { attributeDto } from '../models/attributeDto';
import type { successResponse_attributeDetailDto } from '../models/successResponse_attributeDetailDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AttributeService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new attribute Test
     * @returns successResponse_attributeDetailDto Successful response with created object
     * @throws ApiError
     */
    public createAttribute({
        requestBody,
    }: {
        /**
         * Attribute Model
         */
        requestBody: attributeDto,
    }): CancelablePromise<successResponse_attributeDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/attributes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get list of Attribute
     * @returns successResponse_attributeDetailDto<any> Successful response with list of filtered attributes
     * @throws ApiError
     */
    public getAttributeList({
        acceptLanguage,
        pageIndex,
        pageSize,
        searchString,
        group,
        usageFor,
        dataType,
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
         * Group
         */
        group?: string,
        /**
         * Usage For
         */
        usageFor?: string,
        /**
         * Attribute data type
         */
        dataType?: string,
        /**
         * Order by field
         */
        orderBy?: string,
        /**
         * Order by type
         */
        orderType?: string,
    }): CancelablePromise<successResponse_attributeDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/attributes',
            headers: {
                'Accept-Language': acceptLanguage,
            },
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'searchString': searchString,
                'group': group,
                'usageFor': usageFor,
                'dataType': dataType,
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
     * Delete an attribute
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public deleteAttribute({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/attributes/{id}',
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
     * Get the detail of attribute by id
     * @returns successResponse_attributeDetailDto Successful response with detail of a attribute by id
     * @throws ApiError
     */
    public getAttributeById({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_attributeDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/attributes/{id}',
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
     * Update an attribute
     * @returns successResponse_attributeDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateAttribute({
        id,
        requestBody,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
        /**
         * Attribute Model
         */
        requestBody: attributeDto,
    }): CancelablePromise<successResponse_attributeDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/attributes/{id}',
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
