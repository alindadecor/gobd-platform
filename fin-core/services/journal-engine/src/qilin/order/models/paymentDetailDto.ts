/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { money } from './money';
import type { noteDetailDto } from './noteDetailDto';
import type { paymentMethodDetailDto } from './paymentMethodDetailDto';
export type paymentDetailDto = {
    paymentMethod?: paymentMethodDetailDto;
    /**
     * A note on payment.
     */
    notes?: Array<noteDetailDto> | null;
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

