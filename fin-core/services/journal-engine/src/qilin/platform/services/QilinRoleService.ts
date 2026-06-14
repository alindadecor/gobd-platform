/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { qilinRoleDto } from '../models/qilinRoleDto';
import type { successResponse_qilinRoleDetailDto } from '../models/successResponse_qilinRoleDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QilinRoleService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Assign array of permission to role
     * @returns successResponse_qilinRoleDetailDto Successful response with created object
     * @throws ApiError
     */
    public assignPermissionsToRole({
        id,
        requestBody,
    }: {
        /**
         * The Qilin Role identity
         */
        id: string,
        /**
         * array of permission
         */
        requestBody: Array<string>,
    }): CancelablePromise<successResponse_qilinRoleDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/roles/{id}/permission',
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
     * Create a new qilin role
     * @returns successResponse_qilinRoleDetailDto Successful response with created object
     * @throws ApiError
     */
    public createQilinRole({
        requestBody,
    }: {
        /**
         * Qilin Role Model
         */
        requestBody: qilinRoleDto,
    }): CancelablePromise<successResponse_qilinRoleDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/roles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list of qilin role
     * @returns successResponse_qilinRoleDetailDto<any> Successful response with list of object
     * @throws ApiError
     */
    public getQilinRoles({
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
    }): CancelablePromise<successResponse_qilinRoleDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/roles',
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
     * Get a list of qilin role default
     * @returns successResponse_qilinRoleDetailDto<any> Successful response with list of object
     * @throws ApiError
     */
    public getQilinDefaultRoles({
        pageIndex,
        pageSize,
    }: {
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items of per page
         */
        pageSize?: number,
    }): CancelablePromise<successResponse_qilinRoleDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/roles/default',
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a qilin role by id
     * @returns successResponse_qilinRoleDetailDto Successful response with the detail of object
     * @throws ApiError
     */
    public getQilinRoleById({
        id,
    }: {
        /**
         * The Qilin Role identity
         */
        id: string,
    }): CancelablePromise<successResponse_qilinRoleDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/roles/{id}',
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
     * Update a qilin role
     * @returns successResponse_qilinRoleDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateQilinRole({
        id,
        requestBody,
    }: {
        /**
         * The Qilin Role identity
         */
        id: string,
        /**
         * Qilin Role Model
         */
        requestBody: qilinRoleDto,
    }): CancelablePromise<successResponse_qilinRoleDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/roles/{id}',
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
