/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { money } from './money';
import type { noteDetailDto } from './noteDetailDto';
export type orderLineItemDetailDto = {
    /**
     * Notes on this Order Line Item
     */
    notes?: Array<noteDetailDto>;
    /**
     * The name of PositionState
     */
    positionStateName?: string;
    /**
     * The name of TaxGroupType
     */
    taxGroupName?: string;
    /**
     * An identifier that the marketplace uses to identify API actions for this position.
     */
    orderLineItemId: string;
    /**
     * Reference to the ID of the channel through which this order was generated.
     */
    channelId: string;
    /**
     * The status of the position
     */
    state: orderLineItemDetailDto.state;
    /**
     * The control group of the order position
     */
    taxGroupType: orderLineItemDetailDto.taxGroupType;
    priceGross: money;
    priceNet: money;
    /**
     * The amount
     */
    amount: number;
    /**
     * The condition of the order item
     */
    condition: orderLineItemDetailDto.condition;
    /**
     * If this item is a variant, the explanation of which variant is the order item is in this dictionary.
     */
    variation?: Record<string, Record<string, any>>;
    /**
     * The priority of this order item. 0 = no priority, 100 = highest priority.
     */
    priority?: number | null;
    /**
     * An identifier that the ERP system uses to identify actions for this position.
     */
    erpId?: string | null;
    /**
     * Personalization of the order item (e.g. a text to be printed on the product)
     */
    personalization?: Record<string, string>;
    /**
     * The time the merchant has to process this item, i.e. the time between the release of the order item by the marketplace and the transfer of the item to the carrier.
     */
    handlingTime?: number | null;
    /**
     * reference to the UUID of a product
     */
    productOrVariationId?: string | null;
    /**
     * A list of GTINs for this order item
     */
    gtiNs?: Array<string> | null;
    /**
     * A list of SKUs for this order item
     */
    skUs?: Array<string> | null;
    /**
     * A list of titles for this order item
     */
    title?: Record<string, string>;
    /**
     * Manufacturer Product Number
     */
    mpn?: string | null;
    /**
     * reference to the UUID of a brand
     */
    brandId?: string | null;
    /**
     * A list of reference ids to the categories in which this order item is offered.
     */
    categoryIds?: Array<string> | null;
};
export namespace orderLineItemDetailDto {
    /**
     * The status of the position
     */
    export enum state {
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
        '_13' = 13,
        '_14' = 14,
        '_15' = 15,
        '_16' = 16,
        '_17' = 17,
        '_18' = 18,
        '_19' = 19,
        '_20' = 20,
        '_21' = 21,
        '_22' = 22,
        '_23' = 23,
        '_24' = 24,
        '_25' = 25,
        '_26' = 26,
        '_27' = 27,
        '_28' = 28,
        '_29' = 29,
        '_30' = 30,
        '_31' = 31,
        '_32' = 32,
        '_33' = 33,
        '_34' = 34,
        '_35' = 35,
        '_36' = 36,
        '_37' = 37,
        '_38' = 38,
        '_39' = 39,
    }
    /**
     * The control group of the order position
     */
    export enum taxGroupType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
    /**
     * The condition of the order item
     */
    export enum condition {
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
        '_13' = 13,
    }
}

