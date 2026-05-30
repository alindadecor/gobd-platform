/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressDto } from './addressDto';
import type { contactDto } from './contactDto';
import type { noteDto } from './noteDto';
import type { purchaseOrderLineItemDto } from './purchaseOrderLineItemDto';
import type { shippingInfoDto } from './shippingInfoDto';
export type packageDto = {
    /**
     * A list of items that will be shipped in this package.
     */
    purchaseOrderLineItems: Array<purchaseOrderLineItemDto>;
    shippingInfo: shippingInfoDto;
    returnShippingInfo?: shippingInfoDto;
    fulfillmentAddress?: addressDto;
    receiverAddress?: addressDto;
    /**
     * Notes on this package.
     */
    notes?: Array<noteDto> | null;
    contact?: contactDto;
    /**
     * A list of packages.
     */
    shipmentDate: string;
    /**
     * The height of the package in cm.
     */
    height?: number | null;
    /**
     * The width of the package in cm.
     */
    width?: number | null;
    /**
     * The length of the package in cm.
     */
    length?: number | null;
    /**
     * The weight of the package in grams.
     */
    weight?: number | null;
    /**
     * Hazard labeling.
     */
    hazardCodes?: Array<string> | null;
    /**
     * A list of additional options to this package.
     */
    options?: Record<string, Record<string, any>>;
};

