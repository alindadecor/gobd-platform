/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { fee } from './fee';
import type { money } from './money';
import type { paymentDto } from './paymentDto';
import type { paymentMethodDto } from './paymentMethodDto';
import type { voucherDto } from './voucherDto';
export type paymentInfoDto = {
    /**
     * A list of payments for this order
     */
    payments?: Array<paymentDto> | null;
    paymentMethod: paymentMethodDto;
    /**
     * A list of coupons for this order
     */
    vouchers?: Array<voucherDto> | null;
    /**
     * Reference to the ID of the payment info in the channel.
     */
    paymentInfoId: string;
    /**
     * A list of additional costs (costs for the buyer). The Key indicates the name of the additional cost, the Value contains information about the amount of the additional cost and currency.
     */
    additionalCost: Record<string, money>;
    orderValue: money;
    /**
     * A list of fees for the trader for this order
     */
    fees: Array<fee>;
};

