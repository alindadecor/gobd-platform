/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressDetailDto } from './addressDetailDto';
import type { phoneDto } from './phoneDto';
/**
 * Contact information
 */
export type contactDetailDto = {
    addresses?: Array<addressDetailDto>;
    firstName?: string;
    lastName?: string;
    customerNumber?: string;
    additionalFirstname?: string;
    additionalLastname?: string;
    title?: Record<string, string>;
    company?: string;
    salute?: string;
    sex?: contactDetailDto.sex | null;
    attention?: string;
    phones?: Array<phoneDto>;
    emails?: Array<string>;
    fax?: Array<phoneDto>;
    vatNumber?: string;
    taxNumber?: string;
};
export namespace contactDetailDto {
    export enum sex {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

