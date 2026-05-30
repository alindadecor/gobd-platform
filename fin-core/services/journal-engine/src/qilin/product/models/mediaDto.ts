/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { iEnumerable_string } from './iEnumerable_string';
export type mediaDto = {
    /**
     * The name of the media file
     */
    mediaTitle?: Record<string, string>;
    subscriptionId?: string;
    /**
     * The media type of the media file
     */
    mediaType: string | null;
    /**
     * The file extension
     */
    mediaExtension: string | null;
    /**
     * The sorting, the lower the value, the further up
     */
    order?: number | null;
    /**
     * The URL to this media file
     */
    deepLink?: string | null;
    /**
     * The name of uploaded file
     */
    fileName?: string | null;
    /**
     * The media file data as Byte[]
     */
    mediaFileData?: Blob | null;
    seoTitle?: Record<string, string>;
    seoKeywords?: Record<string, iEnumerable_string>;
    seoDescription?: Record<string, string>;
    /**
     * The Id of input channel, where data goes from.
     */
    sourceId: string;
};

