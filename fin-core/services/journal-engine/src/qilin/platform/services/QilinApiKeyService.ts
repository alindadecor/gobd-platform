/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { qilinApiKeyDto } from '../models/qilinApiKeyDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { successResponse_qilinApiKeyDetailDto } from '../models/successResponse_qilinApiKeyDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QilinApiKeyService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new qilin api key
     * @returns successResponse_qilinApiKeyDetailDto Successful response with created object
     * @throws ApiError
     */
    public createQilinApiKey({
        requestBody,
    }: {
        /**
         * Qilin api key Model
         */
        requestBody: qilinApiKeyDto,
    }): CancelablePromise<successResponse_qilinApiKeyDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apiKeys',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list of qilin api key by subscriptionId
     * @returns successResponse_qilinApiKeyDetailDto<any> Successful response with list of object
     * @throws ApiError
     */
    public getQilinApiKeyBySubscriptionId({
        subscriptionId,
        pageIndex,
        pageSize,
        orderBy,
        orderType,
    }: {
        /**
         * subscription id
         */
        subscriptionId: string,
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
    }): CancelablePromise<successResponse_qilinApiKeyDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apiKeys',
            query: {
                'subscriptionId': subscriptionId,
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
     * Delete a qilin api key
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public deleteQilinApiKeyById({
        id,
    }: {
        /**
         * The Api Key want to delete
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apiKeys/{id}',
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
     * Get a qilin api key
     * @returns successResponse_qilinApiKeyDetailDto Successful response with the detail of object
     * @throws ApiError
     */
    public getQilinApiKeyById({
        id,
    }: {
        /**
         * The Api Key identity
         */
        id: string,
    }): CancelablePromise<successResponse_qilinApiKeyDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apiKeys/{id}',
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
