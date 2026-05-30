/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { noteDto } from './noteDto';
/**
 * The payment method of this payment.
 */
export type paymentMethodDto = {
    /**
     * A note about the payment method.
     */
    notes?: Array<noteDto>;
    /**
     * The name of the payment method
     */
    name: Record<string, string>;
    /**
     * A description of the payment method.
     */
    description?: Record<string, string>;
    /**
     * The payment term in days
     */
    termOfPayment?: number;
    /**
     * A list of additional options for this payment method (e.g. PayPal mail, bank details, credit card details (ATTENTION !!)).
     */
    options?: Record<string, Record<string, any>>;
};

