/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { noteDto } from './noteDto';
import type { packageDto } from './packageDto';
export type deliveryNoteDto = {
    /**
     * A list of packages.
     */
    packages?: Array<packageDto> | null;
    /**
     * Notes on this delivery bill..
     */
    notes?: Array<noteDto>;
    /**
     * The time when this delivery bill was created.
     */
    deliveryNoteCreatedDate: string;
    /**
     * A list of additional options to this delivery bill..
     */
    options?: Record<string, Record<string, any>>;
};

