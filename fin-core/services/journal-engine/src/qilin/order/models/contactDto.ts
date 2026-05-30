/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressDto } from './addressDto';
import type { phoneDto } from './phoneDto';
/**
 * Contact information
 */
export type contactDto = {
    addresses?: Array<addressDto>;
    firstName?: string;
    lastName?: string;
    customerNumber?: string;
    additionalFirstname?: string;
    additionalLastname?: string;
    title?: Record<string, string>;
    company?: string;
    salute?: string;
    sex?: contactDto.sex | null;
    attention?: string;
    phones?: Array<phoneDto>;
    emails?: Array<string>;
    fax?: Array<phoneDto>;
    vatNumber?: string;
    taxNumber?: string;
};
export namespace contactDto {
    export enum sex {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

