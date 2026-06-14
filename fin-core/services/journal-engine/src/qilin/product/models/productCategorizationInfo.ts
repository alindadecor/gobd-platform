/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Categorization of product
 */
export type productCategorizationInfo = {
    /**
     * A list full of references to the UUID of a merchant category
     */
    categoryIds?: Array<string> | null;
    /**
     * Reference to the Id of a shipping class
     */
    shippingClassificationId?: string | null;
    /**
     * The type of goods to which this product belongs
     */
    productGroup?: Record<string, string>;
};

