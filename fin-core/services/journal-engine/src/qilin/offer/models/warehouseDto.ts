/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressDto } from './addressDto';
export type warehouseDto = {
    address?: addressDto;
    /**
     * The name of the warehouse
     */
    name?: Record<string, string>;
    /**
     * If the warehouse is an external fulfiller
     */
    isExternalFulfillment?: boolean;
    /**
     * Updated date defined outside Qilin
     */
    updatedDateExternal?: string;
    /**
     * The hash value to compare object
     */
    hashValue?: string;
};

