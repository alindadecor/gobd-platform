/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { basicInfoDeviveryTimeDto } from './basicInfoDeviveryTimeDto';
import type { basicInfoStockDto } from './basicInfoStockDto';
import type { money } from './money';
export type basicInfoChannelOfferDto = {
    /**
     * Reference to the ID of the channel for which this offer should apply.
     */
    channelId?: string;
    /**
     * Indicates whether the offer is currently active for this channel
     */
    isActive?: boolean;
    price?: money;
    /**
     * Stock info
     */
    stocks?: Array<basicInfoStockDto>;
    defaultDeliveryTime?: basicInfoDeviveryTimeDto;
    /**
     * Updated date
     */
    updatedDate?: string;
};

