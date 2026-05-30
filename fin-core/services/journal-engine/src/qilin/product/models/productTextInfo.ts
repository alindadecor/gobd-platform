/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Text information of product (Title, Description, Short description, Tag)
 */
export type productTextInfo = {
    /**
     *  The title of a product
     */
    title?: Record<string, string>;
    /**
     *  The description of a product
     */
    description?: Record<string, string>;
    /**
     *  The short description, often also called "subtitle".
     */
    shortDescription?: Record<string, string>;
    /**
     * List of Tags
     */
    tags?: Array<string> | null;
};

