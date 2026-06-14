/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { money } from './money';
/**
 * The special price
 */
export type reducedPrice = {
    price?: money;
    /**
     * Date from when the special price is active
     */
    startDate?: string | null;
    /**
     * Date until when the special price is active
     */
    endDate?: string | null;
    /**
     * Up to which minimum stock the special price is active
     */
    tillStockLessOrEqual?: number | null;
};

