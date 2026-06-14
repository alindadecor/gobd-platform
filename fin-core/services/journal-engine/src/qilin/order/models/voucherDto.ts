/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { money } from './money';
import type { noteDto } from './noteDto';
export type voucherDto = {
    /**
     * A note about the voucher.
     */
    notes?: Array<noteDto>;
    /**
     * Coupon code.
     */
    voucherCode?: string;
    /**
     * Reference to the ID of the voucher in the channel.
     */
    channelId?: string;
    /**
     * Reference to the ID of the credit note in the ERP.
     */
    erpId?: string;
    discount?: money;
    /**
     * Where does this voucher come from (e.g. promotion from the merchant, promotion from the marketplace, individual voucher from the buyer, ...).
     */
    source?: Array<string>;
};

