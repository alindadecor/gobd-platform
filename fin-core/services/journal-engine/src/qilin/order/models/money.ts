/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The sum (gross)
 */
export type money = {
    /**
     * A value in the smallest unit of the currency. So for the currency euro then the value in cents, for the currency Swiss franc, then the value in centimes, etc.. Always net.
     */
    amountInFractionalUnit: number;
    /**
     * The currency in ISO 4217 (Iso3) format.
     */
    currency: string;
};

