/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type patchUpdateDto = {
    /**
     * The patch operations supported by JSON Patch are add, remove, replace, move, copy and test
     */
    op: string;
    /**
     * Path to the Op object
     */
    path: string;
    /**
     * Value of Op object
     */
    value: string;
};

