/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { money } from './money';
/**
 * Information to be able to use a potential Repricer
 */
export type repricerInfo = {
    minimumPriceAbsolute?: money;
    /**
     * The requested minimum price, percentage of the regular price, net price
     */
    minimumPricePercentual?: number | null;
    maximumPriceAbsolute?: money;
    /**
     * The requested maximum price, percentage of the regular price, net price
     */
    maximumPricePercentual?: number | null;
    minimumProfitAbsolute?: money;
    /**
     * The desired minimum margin, percentage on the median GLD of all StockInfos, net price
     */
    minimumProfitPercentual?: number | null;
    maximumProfitAbsolute?: money;
    /**
     * The desired maximum margin as a percentage of the median GLD of all StockInfos, net price
     */
    maximumProfitPercentual?: number | null;
    /**
     * The desired positioning in the search results on this channel
     */
    desiredPosition?: number | null;
    /**
     * The desired turnover rate
     */
    desiredTranshippingRate?: number | null;
    /**
     * A reference to a calculation group
     */
    calculationGroup?: string | null;
    /**
     * The return rate in %
     */
    returnRatePercentual?: number | null;
    returnCost?: money;
    additionalAfterSalesCost?: money;
    additionalPreSalesCost?: money;
};

