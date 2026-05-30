/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { money } from './money';
import type { noteDto } from './noteDto';
import type { paymentMethodDto } from './paymentMethodDto';
export type paymentDto = {
    paymentMethod: paymentMethodDto;
    /**
     * A note on payment.
     */
    notes?: Array<noteDto> | null;
    amount: money;
    /**
     * Reference to the ID of the payment in the channel.
     */
    channelId?: string | null;
    /**
     * Reference to the ID of the payment in the ERP.
     */
    erpId?: string | null;
    /**
     * The transaction ID for this payment.
     */
    transactionId?: string | null;
};

