/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { basicInfoWarehouseDto } from './basicInfoWarehouseDto';
import type { money } from './money';
export type basicInfoStockDto = {
    /**
     * The available stock in this warehouse
     */
    stock?: number | null;
    warehouse?: basicInfoWarehouseDto;
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

