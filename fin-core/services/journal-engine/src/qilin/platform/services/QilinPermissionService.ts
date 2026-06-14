/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { qilinPermissionDto } from '../models/qilinPermissionDto';
import type { successResponse_qilinPermissionDetailDto } from '../models/successResponse_qilinPermissionDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QilinPermissionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new qilin permission
     * @returns successResponse_qilinPermissionDetailDto Successful response with created object
     * @throws ApiError
     */
    public createQilinPermission({
        requestBody,
    }: {
        /**
         * Qilin Permission Model
         */
        requestBody: qilinPermissionDto,
    }): CancelablePromise<successResponse_qilinPermissionDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/permissions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list of qilin permission
     * @returns successResponse_qilinPermissionDetailDto<any> Successful response with list of object
     * @throws ApiError
     */
    public getQilinPermissions({
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
    }): CancelablePromise<successResponse_qilinPermissionDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/permissions',
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
     * Get a qilin permission by id
     * @returns successResponse_qilinPermissionDetailDto Successful response with the detail of object
     * @throws ApiError
     */
    public getQilinPermissionById({
        id,
    }: {
        /**
         * The Qilin Permission identity
         */
        id: string,
    }): CancelablePromise<successResponse_qilinPermissionDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/permissions/{id}',
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
