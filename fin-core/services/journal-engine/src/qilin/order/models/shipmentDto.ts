/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deliveryNoteDto } from './deliveryNoteDto';
import type { noteDto } from './noteDto';
export type shipmentDto = {
    /**
     * A ruse with delivery bills.
     */
    deliveryNotes: Array<deliveryNoteDto> | null;
    /**
     * Notes on this package.
     */
    notes?: Array<noteDto>;
    /**
     * The time when the package was shipped (handed over to the carrier)
     */
    shipmentCreatedDate: string;
    /**
     * A list of additional options to this package.
     */
    options?: Record<string, Record<string, any>>;
};

