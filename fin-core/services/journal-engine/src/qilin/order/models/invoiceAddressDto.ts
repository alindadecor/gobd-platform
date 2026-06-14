/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressDto } from './addressDto';
import type { phoneDto } from './phoneDto';
/**
 * The invoice sender
 */
export type invoiceAddressDto = {
    /**
     * A list of addresses
     */
    addresses: Array<addressDto>;
    /**
     * The first name of customer. Required if CompanyName is empty.
     */
    firstName?: string | null;
    /**
     * The last name of customer
     */
    lastName?: string | null;
    /**
     * The name of company. Required if FirstName is empty.
     */
    companyName?: string | null;
    /**
     * A list of emails
     */
    emails: Array<string>;
    /**
     * A list of phones
     */
    phones: Array<phoneDto>;
};

