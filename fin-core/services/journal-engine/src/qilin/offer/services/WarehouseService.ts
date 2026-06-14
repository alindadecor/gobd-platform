/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { createWarehouseDto } from '../models/createWarehouseDto';
import type { getByIdsResponseDto_warehouseDetailDto } from '../models/getByIdsResponseDto_warehouseDetailDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { successResponse_warehouseDetailDto } from '../models/successResponse_warehouseDetailDto';
import type { warehouseDto } from '../models/warehouseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WarehouseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a warehouse item
     * @returns successResponse_warehouseDetailDto Successful response with created object
     * @throws ApiError
     */
    public createWarehouse({
        requestBody,
    }: {
        /**
         * Warehouse Data Model
         */
        requestBody: createWarehouseDto,
    }): CancelablePromise<successResponse_warehouseDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/warehouses',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get list of warehouse
     * @returns successResponse_warehouseDetailDto<any> The warehouse list
     * @throws ApiError
     */
    public getWarehouseList({
        pageIndex,
        pageSize,
        orderBy,
        orderType,
        acceptLanguage,
        countryCode,
        state,
        city,
        isExternalFulfillment,
    }: {
        /**
         * The index of the page
         */
        pageIndex: number,
        /**
         * Total items of per page
         */
        pageSize: number,
        /**
         * Order by field
         */
        orderBy: string,
        /**
         * Order by type
         */
        orderType: string,
        /**
         * Language
         */
        acceptLanguage: string,
        /**
         * Country of warehouse address
         */
        countryCode?: string,
        /**
         * State of warehouse address
         */
        state?: string,
        /**
         * City of warehouse address
         */
        city?: string,
        /**
         * Warehouse is external fullfillment center
         */
        isExternalFulfillment?: boolean,
    }): CancelablePromise<successResponse_warehouseDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/warehouses',
            headers: {
                'Accept-Language': acceptLanguage,
            },
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'orderBy': orderBy,
                'orderType': orderType,
                'CountryCode': countryCode,
                'state': state,
                'city': city,
                'IsExternalFulfillment': isExternalFulfillment,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Delete a warehouse item
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public deleteWarehouseById({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/warehouses/{id}',
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
     * Get a warehouse by UUID
     * @returns successResponse_warehouseDetailDto The Warehouse detail by Id
     * @throws ApiError
     */
    public getWarehouseById({
        id,
    }: {
        /**
         * The **UUID** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_warehouseDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/warehouses/{id}',
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
     * Update a warehouse item
     * @returns successResponse_warehouseDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateWarehouse({
        id,
        requestBody,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
        /**
         * Warehouse Data Model
         */
        requestBody: warehouseDto,
    }): CancelablePromise<successResponse_warehouseDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/warehouses/{id}',
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
     * Get list of warehouses by externalIds
     * @returns getByIdsResponseDto_warehouseDetailDto Successful response with list of warehouses by ids
     * @throws ApiError
     */
    public getWarehouseByExternalIds({
        requestBody,
    }: {
        /**
         * List of externalIds of warehouses
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_warehouseDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/warehouses/list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
