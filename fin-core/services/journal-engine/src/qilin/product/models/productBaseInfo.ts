/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Product base information (GTIN, SKU, Brand, MPN)
 */
export type productBaseInfo = {
    /**
     * A list of EANs (GTIN is the correct name for what is popularly known as EAN). Does not have to be unique (e.g. because of different states).
     */
    GTINs?: Array<string> | null;
    /**
     * A list of SKUs. Doesn't have to be unique (e.g. because ERPs like Shopify also allow it)
     */
    SKUs?: Array<string> | null;
    /**
     * Reference to the UUID of a brand created via API
     */
    brandId?: string | null;
    /**
     * Manufacturer Product Number
     */
    MPNs?: Array<string> | null;
};

