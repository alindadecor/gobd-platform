/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { noteDto } from './noteDto';
export type linkDto = {
    /**
     * Notes about this link.
     */
    notes?: Array<noteDto> | null;
    /**
     * The URL of the link
     */
    url: string | null;
    /**
     * The name to this link
     */
    name?: Record<string, string>;
    /**
     * A list of additional options for this link
     */
    options?: Record<string, Record<string, any>>;
};

