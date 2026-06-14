/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { qilinActionDto } from '../models/qilinActionDto';
import type { successResponse_qilinActionDetailDto } from '../models/successResponse_qilinActionDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QilinActionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new qilin action
     * @returns successResponse_qilinActionDetailDto Successful response with created object
     * @throws ApiError
     */
    public createQilinAction({
        requestBody,
    }: {
        /**
         * Qilin Action Model
         */
        requestBody: qilinActionDto,
    }): CancelablePromise<successResponse_qilinActionDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/actions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list of qilin action
     * @returns successResponse_qilinActionDetailDto<any> Successful response with list of object
     * @throws ApiError
     */
    public getQilinActions({
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
    }): CancelablePromise<successResponse_qilinActionDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions',
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
     * Get a qilin action by id
     * @returns successResponse_qilinActionDetailDto Successful response with the detail of object
     * @throws ApiError
     */
    public getQilinActionById({
        id,
    }: {
        /**
         * The Qilin Action identity
         */
        id: string,
    }): CancelablePromise<successResponse_qilinActionDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{id}',
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
     * Update a qilin action
     * @returns successResponse_qilinActionDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateQilinAction({
        id,
        requestBody,
    }: {
        /**
         * The Qilin Action identity
         */
        id: string,
        /**
         * Qilin Action Model
         */
        requestBody: qilinActionDto,
    }): CancelablePromise<successResponse_qilinActionDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/actions/{id}',
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
