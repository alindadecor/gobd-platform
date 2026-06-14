/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addonDetailDto } from './addonDetailDto';
import type { iEnumerable_string } from './iEnumerable_string';
import type { money } from './money';
import type { noteDetailDto } from './noteDetailDto';
/**
 * Return shipping information
 */
export type shippingInfoDetailDto = {
    /**
     * Booked addons for fulfillment of this order or position (e.g. express shipment).
     */
    addons?: Array<addonDetailDto>;
    /**
     * Notes on this shipping item (e.g. "Place in stairwell").
     */
    notes?: Array<noteDetailDto>;
    /**
     * The indication who fulfilled.
     */
    fulfillmentByName?: string;
    /**
     * The control group of the shipping position.
     */
    taxGroupName?: string;
    /**
     * Delivery is allowed only on the days of the week indicated here.
     */
    allowedDeliveryWeekdaysName?: Array<string>;
    /**
     * The expected earliest delivery date. This date was shown to the end customer as the earliest delivery date when the purchase was made, the end customer expects delivery (not shipping, but delivery) on this date at the earliest. Delivery BEFORE this date may be penalized by the marketplace.
     */
    expectedDeliveryTimeMin?: string;
    /**
     * The expected latest delivery date. This date was shown to the end customer as the latest delivery date when the purchase was made, the end customer expects delivery (not shipping, but delivery) on this date at the latest. Deliveries AFTER this date may be penalized by the marketplace.
     */
    expectedDeliveryTimeMax?: string;
    /**
     * The indication who fulfilled.<br/>
     * The data type of the source<br/>
     * Value:<br/>
     * 0: Merchant<br/>
     * 1: ExternalFulfiller<br/>
     * 2: Marketplace<br/>
     * 3: Customer
     */
    fulfillmentBy?: shippingInfoDetailDto.fulfillmentBy;
    /**
     * The ID of the shipping service provider (DHL, DPD, GLS, Download, Pickup, ...) ((the ID comes defined by Qilin).
     */
    carrierId?: string;
    /**
     * The shipping method (letter, package, ... ).
     */
    shippingType?: string;
    /**
     * The control group of the shipping position.<br/>
     * The data type of the source<br/>
     * Value:<br/>
     * 0: Normal<br/>
     * 1: Reduced<br/>
     * 2: TaxFree<br/>
     * 3: Regular<br/>
     * 4: Unknown
     */
    taxGroup?: shippingInfoDetailDto.taxGroup;
    priceGross?: money;
    priceNet?: money;
    /**
     * The list labels of this shipping (link to media url).
     */
    shippingLabels?: Record<string, iEnumerable_string>;
    /**
     * The tracking key.
     */
    tracingKey?: string;
    /**
     * The tracking URL.
     */
    trackingUrl?: string;
    /**
     * Delivery is allowed only on the days of the week indicated here.<br/>
     * The data type of the source<br/>
     * Value:<br/>
     * 0: Sunday<br/>
     * 1: Monday<br/>
     * 2: Tuesday<br/>
     * 3: Wednesday<br/>
     * 4: Thursday<br/>
     * 5: Friday<br/>
     * 6: Saturday
     */
    allowedDeliveryWeekdays?: Array<0 | 1 | 2 | 3 | 4 | 5 | 6>;
    /**
     * Delivery is allowed only at the times specified here. If "09,10,11,15,16,19" is indicated, it means delivery is allowed from 09:00-11:59 and at 15:00-16:59 and at 19:00-19:59.
     */
    allowedDeliveryHours?: Array<number>;
};
export namespace shippingInfoDetailDto {
    /**
     * The indication who fulfilled.<br/>
     * The data type of the source<br/>
     * Value:<br/>
     * 0: Merchant<br/>
     * 1: ExternalFulfiller<br/>
     * 2: Marketplace<br/>
     * 3: Customer
     */
    export enum fulfillmentBy {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
    /**
     * The control group of the shipping position.<br/>
     * The data type of the source<br/>
     * Value:<br/>
     * 0: Normal<br/>
     * 1: Reduced<br/>
     * 2: TaxFree<br/>
     * 3: Regular<br/>
     * 4: Unknown
     */
    export enum taxGroup {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

