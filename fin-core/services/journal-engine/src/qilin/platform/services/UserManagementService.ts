/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { qilinUserBaseDto } from '../models/qilinUserBaseDto';
import type { qilinUserDto } from '../models/qilinUserDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { successResponse_qilinPermissionDetailDto } from '../models/successResponse_qilinPermissionDetailDto';
import type { successResponse_qilinUserDetailDto } from '../models/successResponse_qilinUserDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserManagementService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Assign array of role to user
     * @returns successResponse_qilinUserDetailDto Successful response with created object
     * @throws ApiError
     */
    public userManagementAssignRolesToUser({
        userId,
        requestBody,
    }: {
        /**
         * The Qilin User identity
         */
        userId: string,
        /**
         * array of role
         */
        requestBody: Array<string>,
    }): CancelablePromise<successResponse_qilinUserDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/usermanagement/users/{userId}/roles',
            path: {
                'userId': userId,
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
     * Create a new qilin user under a Qilin Subscription
     * @returns successResponse_qilinUserDetailDto Successful response with created object
     * @throws ApiError
     */
    public userManagementCreateQilinUser({
        requestBody,
    }: {
        /**
         * Qilin User Model
         */
        requestBody: qilinUserDto,
    }): CancelablePromise<successResponse_qilinUserDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/usermanagement/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Delete a Qilin User by id
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public userManagementDeleteQilinUser({
        userId,
    }: {
        /**
         * The Qilin User identity
         */
        userId: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/usermanagement/users/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a Qilin User by id
     * @returns successResponse_qilinUserDetailDto Successful response with the detail of object
     * @throws ApiError
     */
    public userManagementGetQilinUserById({
        userId,
    }: {
        /**
         * The Qilin User identity
         */
        userId: string,
    }): CancelablePromise<successResponse_qilinUserDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/usermanagement/users/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update a Qilin User
     * @returns successResponse_qilinUserDetailDto Successful response with the detail of object
     * @throws ApiError
     */
    public userManagementUpdateQilinUser({
        userId,
        requestBody,
    }: {
        /**
         * The Qilin User identity
         */
        userId: string,
        /**
         * Qilin user Model
         */
        requestBody: qilinUserBaseDto,
    }): CancelablePromise<successResponse_qilinUserDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/usermanagement/users/{userId}',
            path: {
                'userId': userId,
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
     * Get list of users by condition
     * @returns successResponse_qilinUserDetailDto<any> The Qilin User list
     * @throws ApiError
     */
    public userManagementGetQilinUserListing({
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
    }): CancelablePromise<successResponse_qilinUserDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/usermanagement/users',
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
     * Get  Qilin User Permission Listing
     * @returns successResponse_qilinPermissionDetailDto<any> Successful response with the detail of object
     * @throws ApiError
     */
    public userManagementGetQilinUserPermissionListing({
        userId,
    }: {
        /**
         * The Qilin User identity
         */
        userId: string,
    }): CancelablePromise<successResponse_qilinPermissionDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/usermanagement/users/{userId}/permissions',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update a Qilin User status
     * @returns successResponse_qilinUserDetailDto Successful response with the detail of object
     * @throws ApiError
     */
    public userManagementUpdateQilinUserStatus({
        userId,
        requestBody,
    }: {
        /**
         * The Qilin User identity
         */
        userId: string,
        /**
         * Qilin user status
         */
        requestBody: string,
    }): CancelablePromise<successResponse_qilinUserDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/usermanagement/users/{userId}/status',
            path: {
                'userId': userId,
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
