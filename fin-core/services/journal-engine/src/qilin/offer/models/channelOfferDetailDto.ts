/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deliveryTime } from './deliveryTime';
import type { money } from './money';
import type { reducedPrice } from './reducedPrice';
import type { repricerInfo } from './repricerInfo';
import type { stockInfo } from './stockInfo';
export type channelOfferDetailDto = {
    /**
     * The tax group mapping with country
     */
    taxGroupText?: string;
    /**
     * Reference to the ID of the channel for which this offer should apply. ChannelID = 0 means "general" and is always used as fallback if a channel has no specific ChannelOffer information.
     */
    channelId?: string;
    /**
     * Indicates whether the offer is currently active for this channel.
     */
    isActive?: boolean;
    price?: money;
    /**
     * The tax group mapping with country<br/>
     * Value:<br/>
     * 0: Normal<br/>
     * 1: Reduced<br/>
     * 2: Taxfree<br/>
     * 3: Regular<br/>
     * 4: Unknown
     */
    taxGroup?: channelOfferDetailDto.taxGroup;
    /**
     * The available stock
     */
    stocks?: Array<stockInfo>;
    defaultDeliveryTime?: deliveryTime;
    /**
     * The condition of a product.<br/>
     * Value:<br/>
     * 0 : New<br/>
     * 1 : AsNew<br/>
     * 2 : VeryGood<br/>
     * 3 : Good<br/>
     * 4 : Acceptable<br/>
     * 5 : Antique<br/>
     * 6 : Broken<br/>
     * 7 : Refurbished<br/>
     * 8 : BStock<br/>
     * 9 : DamagedPackaging<br/>
     * 10 : Demo<br/>
     * 11 : AccordingToDescription<br/>
     * 12 : Incomplete<br/>
     * 13 : Unknown<br/>
     */
    condition?: channelOfferDetailDto.condition | null;
    /**
     * The date from when the offer is automatically activated
     */
    startDate?: string | null;
    /**
     * The date after which the offer is automatically deactivated
     */
    endDate?: string | null;
    /**
     * Custom attributes are defined by user
     */
    attributes?: Record<string, Record<string, any>>;
    reducedPrice?: reducedPrice;
    repricerInfo?: repricerInfo;
    /**
     * Additional delivery times
     */
    additionalDeliveryTimes?: Array<deliveryTime> | null;
};
export namespace channelOfferDetailDto {
    /**
     * The tax group mapping with country<br/>
     * Value:<br/>
     * 0: Normal<br/>
     * 1: Reduced<br/>
     * 2: Taxfree<br/>
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
    /**
     * The condition of a product.<br/>
     * Value:<br/>
     * 0 : New<br/>
     * 1 : AsNew<br/>
     * 2 : VeryGood<br/>
     * 3 : Good<br/>
     * 4 : Acceptable<br/>
     * 5 : Antique<br/>
     * 6 : Broken<br/>
     * 7 : Refurbished<br/>
     * 8 : BStock<br/>
     * 9 : DamagedPackaging<br/>
     * 10 : Demo<br/>
     * 11 : AccordingToDescription<br/>
     * 12 : Incomplete<br/>
     * 13 : Unknown<br/>
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

