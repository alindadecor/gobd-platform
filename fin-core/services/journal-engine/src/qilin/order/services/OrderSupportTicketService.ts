/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { messageDto } from '../models/messageDto';
import type { orderSupportTicketDto } from '../models/orderSupportTicketDto';
import type { successResponse_orderSupportTicketDetailDto } from '../models/successResponse_orderSupportTicketDetailDto';
import type { ticketLifeCycleDto } from '../models/ticketLifeCycleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrderSupportTicketService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Adding message into Order support ticket item
     * @returns successResponse_orderSupportTicketDetailDto Payload of SuccessResponse containing OrderSupportTicketDetailDto
     * @throws ApiError
     */
    public addMessageIntoOrderSupportTicket({
        id,
        requestBody,
    }: {
        /**
         * The **Order support ticket Id** parameter
         */
        id: string,
        /**
         * Order support ticket Data Model
         */
        requestBody: messageDto,
    }): CancelablePromise<successResponse_orderSupportTicketDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ordersupporttickets/{id}/messages',
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
     * Create a Order support ticket item
     * @returns successResponse_orderSupportTicketDetailDto Payload of SuccessResponse containing OrderSupportTicketDetailDto
     * @throws ApiError
     */
    public createOrderSupportTicket({
        requestBody,
    }: {
        /**
         * Order support ticket Data Model
         */
        requestBody: orderSupportTicketDto,
    }): CancelablePromise<successResponse_orderSupportTicketDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ordersupporttickets',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get list of OrderSupportTickets
     * @returns successResponse_orderSupportTicketDetailDto<any> The order support ticket list
     * @throws ApiError
     */
    public getListOrderSupportTicket({
        pageIndex,
        pageSize,
        orderBy,
        orderType,
        orderId,
        orderLineItemIds,
        ticketStates,
        subject,
        creationDateFrom,
        creationDateTo,
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
        /**
         * Order Id which belong to ticket
         */
        orderId?: string,
        /**
         * Order line item Ids(separated by ',') which belongs to Ticket
         */
        orderLineItemIds?: string,
        /**
         * Ticket states(separated by ',')
         */
        ticketStates?: string,
        /**
         * Ticket subject
         */
        subject?: boolean,
        /**
         * The beginning filter by Creation date of ticket
         */
        creationDateFrom?: boolean,
        /**
         * The ending filter by Creation date of ticket
         */
        creationDateTo?: boolean,
    }): CancelablePromise<successResponse_orderSupportTicketDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ordersupporttickets',
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'orderBy': orderBy,
                'orderType': orderType,
                'orderId': orderId,
                'orderLineItemIds': orderLineItemIds,
                'ticketStates': ticketStates,
                'subject': subject,
                'creationDateFrom': creationDateFrom,
                'creationDateTo': creationDateTo,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a Order support ticket item by ticket id
     * @returns successResponse_orderSupportTicketDetailDto The Warehouse detail by Id
     * @throws ApiError
     */
    public getOrderSupportTicketById({
        id,
    }: {
        /**
         * The **UUID** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_orderSupportTicketDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ordersupporttickets/{id}',
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
     * Update status of order support ticket item
     * @returns successResponse_orderSupportTicketDetailDto Payload of SuccessResponse containing OrderSupportTicketDetailDto
     * @throws ApiError
     */
    public updateOrderSupportTicketStatus({
        id,
        requestBody,
    }: {
        /**
         * The **Order support ticket Id** parameter
         */
        id: string,
        /**
         * Ticket life cycle
         */
        requestBody: ticketLifeCycleDto,
    }): CancelablePromise<successResponse_orderSupportTicketDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/ordersupporttickets/{id}/status',
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
