/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { money } from './money';
export type addonDto = {
    /**
     * The name of the desired addon
     */
    name?: Record<string, string>;
    /**
     * The quantity of the desired addon
     */
    amount?: number | null;
    /**
     * The control group of the desired addon
     */
    taxGroup?: addonDto.taxGroup | null;
    priceGrossTotal?: money;
    priceNetTotal?: money;
    /**
     * A list of additional options for this addon.
     */
    options?: Record<string, Record<string, any>>;
};
export namespace addonDto {
    /**
     * The control group of the desired addon
     */
    export enum taxGroup {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

