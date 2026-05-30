/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { qilinResourceDto } from '../models/qilinResourceDto';
import type { successResponse_qilinResourceDetailDto } from '../models/successResponse_qilinResourceDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QilinResourceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new qilin resource
     * @returns successResponse_qilinResourceDetailDto Successful response with created object
     * @throws ApiError
     */
    public createQilinResource({
        requestBody,
    }: {
        /**
         * Qilin Resource Model
         */
        requestBody: qilinResourceDto,
    }): CancelablePromise<successResponse_qilinResourceDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/resources',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list of qilin resource
     * @returns successResponse_qilinResourceDetailDto<any> Successful response with list of object
     * @throws ApiError
     */
    public getQilinResources({
        pageIndex,
        pageSize,
        orderBy,
        orderType,
    }: {
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
    }): CancelablePromise<successResponse_qilinResourceDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources',
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
     * Get a qilin resource by id
     * @returns successResponse_qilinResourceDetailDto Successful response with the detail of object
     * @throws ApiError
     */
    public getQilinResourceById({
        id,
    }: {
        /**
         * The Qilin Resource identity
         */
        id: string,
    }): CancelablePromise<successResponse_qilinResourceDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources/{id}',
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
     * Update a qilin resource
     * @returns successResponse_qilinResourceDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateQilinResource({
        id,
        requestBody,
    }: {
        /**
         * The Qilin Resource identity
         */
        id: string,
        /**
         * Qilin Resource Model
         */
        requestBody: qilinResourceDto,
    }): CancelablePromise<successResponse_qilinResourceDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/resources/{id}',
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
