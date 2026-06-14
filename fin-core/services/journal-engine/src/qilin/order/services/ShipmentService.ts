/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deliveryNoteDto } from '../models/deliveryNoteDto';
import type { packageDto } from '../models/packageDto';
import type { patchUpdateDto } from '../models/patchUpdateDto';
import type { shipmentDto } from '../models/shipmentDto';
import type { successResponse_deliveryNoteDetailDto } from '../models/successResponse_deliveryNoteDetailDto';
import type { successResponse_packageDetailDto } from '../models/successResponse_packageDetailDto';
import type { successResponse_shipmentDetailDto } from '../models/successResponse_shipmentDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ShipmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new Delivery Note
     * @returns successResponse_deliveryNoteDetailDto The OK response
     * @throws ApiError
     */
    public createDeliveryNote({
        orderId,
        shipmentId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **ShipmentId** parameter
         */
        shipmentId: string,
        /**
         * DeleveryNote Model
         */
        requestBody: deliveryNoteDto,
    }): CancelablePromise<successResponse_deliveryNoteDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/shipments/{shipmentId}/deliveryNotes',
            path: {
                'orderId': orderId,
                'shipmentId': shipmentId,
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
     * Create a new package
     * @returns successResponse_packageDetailDto The OK response
     * @throws ApiError
     */
    public createPackage({
        orderId,
        shipmentId,
        deliveryNoteId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **ShipmentId** parameter
         */
        shipmentId: string,
        /**
         * The **DeliveryNoteId** parameter
         */
        deliveryNoteId: string,
        /**
         * Package Model
         */
        requestBody: packageDto,
    }): CancelablePromise<successResponse_packageDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/shipments/{shipmentId}/deliveryNotes/{deliveryNoteId}/packages',
            path: {
                'orderId': orderId,
                'shipmentId': shipmentId,
                'deliveryNoteId': deliveryNoteId,
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
     * Create a new shipment
     * @returns successResponse_shipmentDetailDto The OK response
     * @throws ApiError
     */
    public createShipment({
        orderId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * Shipment Model
         */
        requestBody: shipmentDto,
    }): CancelablePromise<successResponse_shipmentDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orders/{orderId}/shipments',
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
     * Get list of Shipment by orderId
     * @returns successResponse_shipmentDetailDto<any> The list of shipment belong to this orderId
     * @throws ApiError
     */
    public getListShipmentByOrderId({
        orderId,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
    }): CancelablePromise<successResponse_shipmentDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/shipments',
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
     * Delta update a package by id
     * @returns successResponse_packageDetailDto The OK response
     * @throws ApiError
     */
    public deltaUpdatePackage({
        orderId,
        shipmentId,
        deliveryNoteId,
        packageId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **ShipmentId** parameter
         */
        shipmentId: string,
        /**
         * The **DeliveryNoteId** parameter
         */
        deliveryNoteId: string,
        /**
         * The **PackageId** parameter
         */
        packageId: string,
        /**
         * Delta Update Data Model
         */
        requestBody: Array<patchUpdateDto>,
    }): CancelablePromise<successResponse_packageDetailDto> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/orders/{orderId}/shipments/{shipmentId}/deliveryNotes/{deliveryNoteId}/packages/{packageId}',
            path: {
                'orderId': orderId,
                'shipmentId': shipmentId,
                'deliveryNoteId': deliveryNoteId,
                'packageId': packageId,
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
     * Update a package
     * @returns successResponse_packageDetailDto The OK response
     * @throws ApiError
     */
    public updatePackage({
        orderId,
        shipmentId,
        deliveryNoteId,
        packageId,
        requestBody,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **ShipmentId** parameter
         */
        shipmentId: string,
        /**
         * The **DeliveryNoteId** parameter
         */
        deliveryNoteId: string,
        /**
         * The **PackageId** parameter
         */
        packageId: string,
        /**
         * Package Model
         */
        requestBody: packageDto,
    }): CancelablePromise<successResponse_packageDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orders/{orderId}/shipments/{shipmentId}/deliveryNotes/{deliveryNoteId}/packages/{packageId}',
            path: {
                'orderId': orderId,
                'shipmentId': shipmentId,
                'deliveryNoteId': deliveryNoteId,
                'packageId': packageId,
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
     * Get detail of Shipment by shipmentId
     * @returns successResponse_shipmentDetailDto The list of shipment belong to this orderId
     * @throws ApiError
     */
    public getShipmentById({
        orderId,
        id,
    }: {
        /**
         * The **OrderId** parameter
         */
        orderId: string,
        /**
         * The **shipmentId** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_shipmentDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orders/{orderId}/shipments/{id}',
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
}
