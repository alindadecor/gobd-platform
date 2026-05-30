/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { createOfferDto } from '../models/createOfferDto';
import type { getByIdsResponseDto_offerDetailDto } from '../models/getByIdsResponseDto_offerDetailDto';
import type { offerDto } from '../models/offerDto';
import type { patchUpdateDto } from '../models/patchUpdateDto';
import type { successResponse_headBasicInfoOfferDto } from '../models/successResponse_headBasicInfoOfferDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { successResponse_offerDetailDto } from '../models/successResponse_offerDetailDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OfferService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a offer item
     * @returns successResponse_offerDetailDto Successful response with created object
     * @throws ApiError
     */
    public createOffer({
        requestBody,
    }: {
        /**
         * Offer Data Model
         */
        requestBody: createOfferDto,
    }): CancelablePromise<successResponse_offerDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/offers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get list of Offer
     * @returns successResponse_offerDetailDto<any> Successful response with list of filtered offer
     * @throws ApiError
     */
    public getOffers({
        pageIndex,
        pageSize,
        channelId,
        productId,
        creationDateFrom,
        creationDateTo,
        updatedDateFrom,
        updatedDateTo,
        orderBy,
        orderType,
    }: {
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items per page
         */
        pageSize?: number,
        /**
         * Channel ID
         */
        channelId?: string,
        /**
         * Product ID
         */
        productId?: string,
        /**
         * Creation date from
         */
        creationDateFrom?: string,
        /**
         * Creation date to
         */
        creationDateTo?: string,
        /**
         * Last update date from
         */
        updatedDateFrom?: string,
        /**
         * Last update date to
         */
        updatedDateTo?: string,
        /**
         * Order by field
         */
        orderBy?: string,
        /**
         * Order by type
         */
        orderType?: string,
    }): CancelablePromise<successResponse_offerDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/offers',
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'channelId': channelId,
                'productId': productId,
                'creationDateFrom': creationDateFrom,
                'creationDateTo': creationDateTo,
                'updatedDateFrom': updatedDateFrom,
                'updatedDateTo': updatedDateTo,
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
     * Delete a offer item
     * @returns successResponse_object Delete successfully message
     * @throws ApiError
     */
    public deleteOfferById({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/offers/{id}',
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
     * Get a offer by id
     * @returns successResponse_offerDetailDto The Offer detail by Id
     * @throws ApiError
     */
    public getOfferById({
        id,
    }: {
        /**
         * The **UUID** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_offerDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/offers/{id}',
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
     * Get basic info of an offer
     * @returns successResponse_headBasicInfoOfferDto Successful response with created object
     * @throws ApiError
     */
    public headBasicInfoOffer({
        id,
    }: {
        /**
         * The offer identity
         */
        id: string,
    }): CancelablePromise<successResponse_headBasicInfoOfferDto> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/offers/{id}',
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
     * Delta update an offer
     * @returns successResponse_offerDetailDto Payload of SuccessResponse containing OfferDetailDto
     * @throws ApiError
     */
    public deltaUpdateOffer({
        offerId,
        requestBody,
    }: {
        /**
         * The **OfferId** parameter
         */
        offerId: string,
        /**
         * Delta Update Data Model
         */
        requestBody: Array<patchUpdateDto>,
    }): CancelablePromise<successResponse_offerDetailDto> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/offers/{offerId}',
            path: {
                'offerId': offerId,
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
     * Update an offer
     * @returns successResponse_offerDetailDto Payload of SuccessResponse containing OfferDetailDto
     * @throws ApiError
     */
    public updateOffer({
        offerId,
        requestBody,
    }: {
        /**
         * The **OfferId** parameter
         */
        offerId: string,
        requestBody: offerDto,
    }): CancelablePromise<successResponse_offerDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/offers/{offerId}',
            path: {
                'offerId': offerId,
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
     * Get a offer by id
     * @returns getByIdsResponseDto_offerDetailDto The list of Offer detail by externalIds
     * @throws ApiError
     */
    public getOfferByExternalIds({
        requestBody,
    }: {
        /**
         * Offer Data Model
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_offerDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/offers/list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
