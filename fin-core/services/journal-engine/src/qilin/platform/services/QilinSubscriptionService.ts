/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { qilinSubscriptionBaseDto } from '../models/qilinSubscriptionBaseDto';
import type { qilinSubscriptionDto } from '../models/qilinSubscriptionDto';
import type { qilinUserBaseDto } from '../models/qilinUserBaseDto';
import type { qilinUserDto } from '../models/qilinUserDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { successResponse_qilinPermissionDetailDto } from '../models/successResponse_qilinPermissionDetailDto';
import type { successResponse_qilinSubscriptionDetailDto } from '../models/successResponse_qilinSubscriptionDetailDto';
import type { successResponse_qilinUserDetailDto } from '../models/successResponse_qilinUserDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QilinSubscriptionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Assign array of role to user
     * @returns successResponse_qilinUserDetailDto Successful response with created object
     * @throws ApiError
     */
    public assignRolesToUser({
        subscriptionId,
        userId,
        requestBody,
    }: {
        /**
         * The **SubscriptionId** parameter
         */
        subscriptionId: string,
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
            url: '/qilinsubscriptions/{subscriptionId}/users/{userId}/roles',
            path: {
                'subscriptionId': subscriptionId,
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
    public createQilinUser({
        subscriptionId,
        requestBody,
    }: {
        /**
         * The **SubscriptionId** parameter
         */
        subscriptionId: string,
        /**
         * Qilin User Model
         */
        requestBody: qilinUserDto,
    }): CancelablePromise<successResponse_qilinUserDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/qilinsubscriptions/{subscriptionId}/user',
            path: {
                'subscriptionId': subscriptionId,
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
     * Delete a Qilin User by id
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public deleteQilinUser({
        subscriptionId,
        userId,
    }: {
        /**
         * The Qilin SubscriptionId identity
         */
        subscriptionId: string,
        /**
         * The Qilin User identity
         */
        userId: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/qilinsubscriptions/{subscriptionId}/users/{userId}',
            path: {
                'subscriptionId': subscriptionId,
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
    public getQilinUserById({
        subscriptionId,
        userId,
    }: {
        /**
         * The Qilin SubscriptionId identity
         */
        subscriptionId: string,
        /**
         * The Qilin User identity
         */
        userId: string,
    }): CancelablePromise<successResponse_qilinUserDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/qilinsubscriptions/{subscriptionId}/users/{userId}',
            path: {
                'subscriptionId': subscriptionId,
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
    public updateQilinUser({
        subscriptionId,
        userId,
        requestBody,
    }: {
        /**
         * The Qilin SubscriptionId identity
         */
        subscriptionId: string,
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
            url: '/qilinsubscriptions/{subscriptionId}/users/{userId}',
            path: {
                'subscriptionId': subscriptionId,
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
    public getQilinUserListing({
        subscriptionId,
        pageIndex,
        pageSize,
        orderBy,
        orderType,
    }: {
        /**
         * The Qilin subscription identity
         */
        subscriptionId: string,
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
            url: '/qilinsubscriptions/{subscriptionId}/users',
            path: {
                'subscriptionId': subscriptionId,
            },
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
     * Get  Qilin User permission by id
     * @returns successResponse_qilinPermissionDetailDto<any> Successful response with the detail of object
     * @throws ApiError
     */
    public getQilinUserPermissionListing({
        subscriptionId,
        userId,
    }: {
        /**
         * The Qilin SubscriptionId identity
         */
        subscriptionId: string,
        /**
         * The Qilin User identity
         */
        userId: string,
    }): CancelablePromise<successResponse_qilinPermissionDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/qilinsubscriptions/{subscriptionId}/users/{userId}/permissions',
            path: {
                'subscriptionId': subscriptionId,
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
    public updateQilinUserStatus({
        subscriptionId,
        userId,
        requestBody,
    }: {
        /**
         * The Qilin SubscriptionId identity
         */
        subscriptionId: string,
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
            url: '/qilinsubscriptions/{subscriptionId}/users/{userId}/status',
            path: {
                'subscriptionId': subscriptionId,
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
     * Create a new Qilin Subscription
     * @returns successResponse_qilinSubscriptionDetailDto Successful response with created object
     * @throws ApiError
     */
    public createSubscription({
        requestBody,
    }: {
        /**
         * Qilin Subscription Model
         */
        requestBody: qilinSubscriptionDto,
    }): CancelablePromise<successResponse_qilinSubscriptionDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/qilinsubscriptions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get list of Qilin Subscription
     * @returns successResponse_qilinSubscriptionDetailDto<any> Successful response with the detail of object
     * @throws ApiError
     */
    public getSubscriptionListing({
        pageIndex,
        pageSize,
        orderBy,
        orderType,
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
    }): CancelablePromise<successResponse_qilinSubscriptionDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/qilinsubscriptions',
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
     * Delete a Subscription
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public deleteSubscription({
        subscriptionId,
    }: {
        /**
         * The **SubscriptionId** parameter
         */
        subscriptionId: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/qilinsubscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a Qilin Subscription by id
     * @returns successResponse_qilinSubscriptionDetailDto Successful response with the detail of object
     * @throws ApiError
     */
    public getSubscriptionById({
        subscriptionId,
    }: {
        /**
         * The Qilin Subscription identity
         */
        subscriptionId: string,
    }): CancelablePromise<successResponse_qilinSubscriptionDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/qilinsubscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update a qilin subscription
     * @returns successResponse_qilinSubscriptionDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateSubscription({
        subscriptionId,
        requestBody,
    }: {
        /**
         * The Qilin subscription identity
         */
        subscriptionId: string,
        /**
         * Qilin subscription Model
         */
        requestBody: qilinSubscriptionBaseDto,
    }): CancelablePromise<successResponse_qilinSubscriptionDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/qilinsubscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
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
     * Update a qilin subscription
     * @returns successResponse_qilinSubscriptionDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateSubscriptionStatus({
        subscriptionId,
        requestBody,
    }: {
        /**
         * The Qilin subscription identity
         */
        subscriptionId: string,
        /**
         * Qilin subscription status
         */
        requestBody: string,
    }): CancelablePromise<successResponse_qilinSubscriptionDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/qilinsubscriptions/{subscriptionId}/status',
            path: {
                'subscriptionId': subscriptionId,
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
