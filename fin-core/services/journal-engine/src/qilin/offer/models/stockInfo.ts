/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { money } from './money';
export type stockInfo = {
    /**
     * The available stock in this warehouse
     */
    stock?: number | null;
    /**
     * The reference to a warehouse where this stock is managed (stored)
     */
    warehouseId?: string | null;
    gld?: money;
    /**
     * The reserved stock
     */
    reservedStock?: number | null;
    /**
     * The stock that is currently in the supply
     */
    inflowStock?: number | null;
    /**
     * The inventory turnover rate
     */
    transhippingRate?: number | null;
};

