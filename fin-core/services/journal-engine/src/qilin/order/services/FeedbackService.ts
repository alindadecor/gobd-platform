/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { feedbackDto } from '../models/feedbackDto';
import type { successResponse_feedbackDetailDto } from '../models/successResponse_feedbackDetailDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FeedbackService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new feedback
     * @returns successResponse_feedbackDetailDto The OK response
     * @throws ApiError
     */
    public createFeedback({
        orderId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * Feedback Model
         */
        requestBody: feedbackDto,
    }): CancelablePromise<successResponse_feedbackDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/feedbacks',
            path: {
                'orderId': orderId,
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
     * Get a list of feedback by orderId
     * @returns successResponse_feedbackDetailDto<any> The list of feedback belong to this orderId
     * @throws ApiError
     */
    public getFeedbackByOrderId({
        orderId,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
    }): CancelablePromise<successResponse_feedbackDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/feedbacks',
            path: {
                'orderId': orderId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Delete a feedback
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public deleteFeedback({
        orderId,
        id,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **feedbackId** parameter from third party
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orders/{orderId}/feedbacks/{id}',
            path: {
                'orderId': orderId,
                'id': id,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get detail of feedback by id
     * @returns successResponse_feedbackDetailDto The OK response
     * @throws ApiError
     */
    public getFeedbackById({
        orderId,
        id,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **feedbackId** parameter from third party
         */
        id: string,
    }): CancelablePromise<successResponse_feedbackDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/feedbacks/{id}',
            path: {
                'orderId': orderId,
                'id': id,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Update a feedback
     * @returns successResponse_feedbackDetailDto The OK response
     * @throws ApiError
     */
    public updateFeedback({
        orderId,
        id,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **feedbackId** parameter
         */
        id: string,
        /**
         * Feedback Model
         */
        requestBody: feedbackDto,
    }): CancelablePromise<successResponse_feedbackDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orders/{orderId}/feedbacks/{id}',
            path: {
                'orderId': orderId,
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
     * Reply a feedback
     * @returns successResponse_feedbackDetailDto The OK response
     * @throws ApiError
     */
    public replyFeedback({
        orderId,
        id,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **feedbackId** parameter from third party
         */
        id: string,
        /**
         * Feedback Model
         */
        requestBody: feedbackDto,
    }): CancelablePromise<successResponse_feedbackDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/feedbacks/{id}/reply',
            path: {
                'orderId': orderId,
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
