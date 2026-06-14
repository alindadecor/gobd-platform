/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressDto } from './addressDto';
export type brandDto = {
    /**
     * The addresses
     */
    addresses?: Array<addressDto> | null;
    /**
     * The name of the brand
     */
    title: Record<string, string>;
    /**
     * A list of file URLs (image, mp3, mp4, etc)
     */
    mediaUrls?: Array<string> | null;
    /**
     * A list of URLs related to this brand
     */
    urLs?: Array<string> | null;
    /**
     * A list of email addresses for this brand
     */
    emails?: Array<string> | null;
    /**
     * Description of the brand
     */
    description?: Record<string, string>;
    /**
     * Custom attributes are defined by user
     */
    flexibleAttributes?: Record<string, Record<string, any>>;
    updatedDateExternal?: string | null;
    hashValue?: string;
};

