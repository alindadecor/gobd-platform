/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { iEnumerable_string } from './iEnumerable_string';
export type categoryBaseDto = {
    /**
     * The title of the merchant category
     */
    title: Record<string, string>;
    /**
     * A reference to the UUID of a parent category.
     */
    parentCategory?: string | null;
    /**
     * The sorting, the lower the value, the further up
     */
    order?: number | null;
    /**
     * Description of the merchant category
     */
    description?: Record<string, string>;
    /**
     * A list of file URLs (image, mp3, mp4, etc)
     */
    mediaUrls?: Array<string> | null;
    /**
     * Custom attributes are defined by user
     */
    flexibleAttributes?: Record<string, Record<string, any>>;
    seoTitle?: Record<string, string>;
    seoKeywords?: Record<string, iEnumerable_string>;
    seoDescription?: Record<string, string>;
    updatedDateExternal?: string | null;
    hashValue?: string;
};

