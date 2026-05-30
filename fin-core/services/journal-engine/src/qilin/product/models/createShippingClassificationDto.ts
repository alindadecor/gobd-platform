/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type createShippingClassificationDto = {
    shippingClassificationId?: string;
    /**
     * The Id of input channel, where data goes from.
     */
    sourceId: string;
    /**
     * The name of the shipping class
     */
    title: Record<string, string>;
    /**
     * Custom attributes are defined by user
     */
    flexibleAttributes?: Record<string, Record<string, any>>;
    updatedDateExternal?: string | null;
    hashValue?: string;
};

