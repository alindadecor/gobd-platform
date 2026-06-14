/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { getByIdsResponseDto_mediaDetailDto } from '../models/getByIdsResponseDto_mediaDetailDto';
import type { mediaDto } from '../models/mediaDto';
import type { successResponse_mediaDetailDto } from '../models/successResponse_mediaDetailDto';
import type { successResponse_object } from '../models/successResponse_object';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MediaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a media file
     * @returns successResponse_mediaDetailDto Successful response with created object
     * @throws ApiError
     */
    public createMedia({
        formData,
    }: {
        /**
         * Media API Model
         */
        formData: mediaDto,
    }): CancelablePromise<successResponse_mediaDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/media',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Delete media by id
     * @returns successResponse_object The OK response
     * @throws ApiError
     */
    public deleteMediaById({
        id,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_object> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/media/{id}',
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
     * Get a media file by UUID
     * @returns successResponse_mediaDetailDto Successful response with detail of a media by id
     * @throws ApiError
     */
    public getMediaById({
        id,
    }: {
        /**
         * The **UUID** parameter
         */
        id: string,
    }): CancelablePromise<successResponse_mediaDetailDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/media/{id}',
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
     * Update a media file
     * @returns successResponse_mediaDetailDto Successful response with updated object
     * @throws ApiError
     */
    public updateMedia({
        id,
        formData,
    }: {
        /**
         * The **Id** parameter
         */
        id: string,
        /**
         * Media API Model
         */
        formData: mediaDto,
    }): CancelablePromise<successResponse_mediaDetailDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/media/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list of media file by UUID
     * @returns getByIdsResponseDto_mediaDetailDto Successful response with list of media by ids
     * @throws ApiError
     */
    public getListMediaByIds({
        requestBody,
    }: {
        /**
         * List of media UUID
         */
        requestBody: Array<string>,
    }): CancelablePromise<getByIdsResponseDto_mediaDetailDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/media/list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
