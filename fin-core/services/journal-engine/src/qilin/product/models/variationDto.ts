/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { iEnumerable_string } from './iEnumerable_string';
export type variationDto = {
    /**
     *  The value of the variation, e.g. "red"
     */
    value: Record<string, string>;
    /**
     * Reference to a UUID of a pier API created VariationKey
     */
    variationKeyId: string;
    /**
     * Description of the variation
     */
    description?: Record<string, string>;
    /**
     * The sorting, the lower the value, the further up
     */
    order?: number | null;
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

