/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { noteDetailDto } from './noteDetailDto';
/**
 * The address of the warehouse
 */
export type addressDetailDto = {
    addressTypeName?: string;
    /**
     * Notes about this address.
     */
    notes?: Array<noteDetailDto> | null;
    street?: string;
    houseNumber?: string;
    building?: string;
    level?: string;
    room?: string;
    /**
     * Further address additional information
     */
    additionalAddressInformation?: string | null;
    entryCode?: string;
    zip?: string;
    city?: string;
    district?: string;
    state?: string;
    /**
     * Country in ISO 3166 ALPHA 3 format
     */
    country?: string | null;
    /**
     * Value<br/>
     * 0 : MerchantAddress<br/>
     * 1 : InvoiceAddress<br/>
     * 2 : DeliveryAddress<br/>
     * 3 : PickupAddress<br/>
     * 4 : FulfillerAddress<br/>
     * 5 : ProductAddress<br/>
     * 6 : BrandAddress<br/>
     * 7 : ManufacturerAddress<br/>
     * 8 : WarehouseAddress<br/>
     * 9 : CustomerAddress<br/>
     * 10 : RetourAddress<br/>
     * 11 : VendorAddress<br/>
     * 12 : Other<br/>
     */
    addressType?: addressDetailDto.addressType;
    /**
     * Reference to the ID of the customer used by the marketplace itself for API actions
     */
    chanelId?: string | null;
    /**
     * Reference to the ID of the ERP system that the retailer uses.
     */
    erpId?: string | null;
    /**
     * A list of additional options to this address
     */
    options?: Record<string, Record<string, any>>;
};
export namespace addressDetailDto {
    /**
     * Value<br/>
     * 0 : MerchantAddress<br/>
     * 1 : InvoiceAddress<br/>
     * 2 : DeliveryAddress<br/>
     * 3 : PickupAddress<br/>
     * 4 : FulfillerAddress<br/>
     * 5 : ProductAddress<br/>
     * 6 : BrandAddress<br/>
     * 7 : ManufacturerAddress<br/>
     * 8 : WarehouseAddress<br/>
     * 9 : CustomerAddress<br/>
     * 10 : RetourAddress<br/>
     * 11 : VendorAddress<br/>
     * 12 : Other<br/>
     */
    export enum addressType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
    }
}

