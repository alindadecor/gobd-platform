/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { channelOfferDto } from './channelOfferDto';
export type offerDto = {
    /**
     * A list full of store specific offers for the referenced product.
     */
    channelOffers?: Array<channelOfferDto>;
    /**
     * Reference to the UUID of a product or variation created via API.
     */
    productOrVariationId?: string;
    updatedDateExternal?: string | null;
    hashValue?: string;
};

