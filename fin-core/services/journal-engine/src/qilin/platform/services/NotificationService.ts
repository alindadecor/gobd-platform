/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { successResponse_notificationDto } from '../models/successResponse_notificationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NotificationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of notifications
     * @returns successResponse_notificationDto<any> Successful response with list of object
     * @throws ApiError
     */
    public getNotifications({
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
    }): CancelablePromise<successResponse_notificationDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications',
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
}
