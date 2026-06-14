/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { money } from './money';
/**
 * Delivery time
 */
export type basicInfoDeviveryTimeDto = {
    /**
     * The name for this delivery time
     */
    name?: Record<string, string>;
    /**
     * The minimum duration in days that the retailer needs internally after receiving the order until he hands over the shipment to the carrier.
     */
    processingTimeFrom?: number | null;
    /**
     * The maximum duration in days that the retailer needs internally after receiving the order until he hands over the shipment to the carrier.
     */
    processingTimeTill?: number | null;
    /**
     * The minimum duration in days that the Carrier needs for delivery (minimum duration between handover of the package to the Carrier and the first delivery attempt to the buyer).
     */
    shippingTimeFrom?: number | null;
    /**
     * The maximum duration in days that the Carrier needs for delivery (maximum duration between handover of the package to the Carrier and the first delivery attempt to the buyer).
     */
    shippingTimeTill?: number | null;
    /**
     * A list of days of the week on which the Carrier generally delivers.<br/>
     * Value:<br/>
     * 0: Sunday<br/>
     * 1: Monday<br/>
     * 2: Tuesday<br/>
     * 3: Wednesday<br/>
     * 4: Thursday<br/>
     * 5: Friday<br/>
     * 6: Saturday
     */
    deliveryWeekdays?: Array<0 | 1 | 2 | 3 | 4 | 5 | 6> | null;
    priceChange?: money;
};

