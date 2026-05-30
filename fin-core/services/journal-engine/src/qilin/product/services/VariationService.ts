/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { getByIdsResponseDto_variationDetailDto } from '../models/getByIdsResponseDto_variationDetailDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { successResponse_variationDetailDto } from '../models/successResponse_variationDetailDto';
import type { variationDto } from '../models/variationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VariationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get list of variations by externalIds
     * @returns getByIdsResponseDto_variationDetailDto Successful response with list of products by ids
     * @throws ApiError
     */
    public getVariationsByExternalIds({
        requestBody,
    }: {
        /**
         * List of externalIds of variations
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_variationDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/variations/list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Create a new variation
     * @returns successResponse_variationDetailDto Successful response with created object
     * @throws ApiError
     */
    public createVariation({
        requestBody,
    }: {
        /**
         * Category Model
         */
        requestBody: variationDto,
    }): CancelablePromise<successResponse_variationDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/variations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Delete a variation
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public deleteVariation({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/variations/{id}',
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
     * Get a  variation by UUID
     * @returns successResponse_variationDetailDto Successful response with detail of a variation by id
     * @throws ApiError
     */
    public getVariationById({
        id,
    }: {
        /**
         * The **UUID** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_variationDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/variations/{id}',
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
     * @returns successResponse_variationDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateVariation({
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
        requestBody: variationDto,
    }): CancelablePromise<successResponse_variationDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/variations/{id}',
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
     * Get a list of variation file by UUID
     * @returns getByIdsResponseDto_variationDetailDto Successful response with list of variations by ids
     * @throws ApiError
     */
    public getListVariationByIds({
        requestBody,
    }: {
        /**
         * List of variation UUID
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_variationDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/internal/variations/list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
