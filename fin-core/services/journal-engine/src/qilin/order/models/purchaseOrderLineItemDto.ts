/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { money } from './money';
import type { noteDto } from './noteDto';
export type purchaseOrderLineItemDto = {
    /**
     * Notes on this invoice or credit memo item.
     */
    notes?: Array<noteDto> | null;
    /**
     * Reference to the ID of purchase order line item in the channel
     */
    purchaseOrderLineItemId: string;
    totalGross?: money;
    totalNet?: money;
    /**
     * Customs tariff number
     */
    taric?: string | null;
    /**
     * Country of origin, in ISO 3166 ALPHA-3 format
     */
    countryOfOrigin?: string | null;
    /**
     * Only required for returns: The condition of the return, see API ERP Offers.Condition<br/>
     * Value:<br/>
     * 0: New<br/>
     * 1: AsNew<br/>
     * 2: VeryGood<br/>
     * 3: Good<br/>
     * 4: Acceptable<br/>
     * 5: Antique<br/>
     * 6: Broken<br/>
     * 7: Refurbished<br/>
     * 8: BStock<br/>
     * 9: DamagedPackaging<br/>
     * 10: Demo<br/>
     * 11: AccordingToDescription<br/>
     * 12: Incomplete<br/>
     * 13: Unknown
     */
    condition?: purchaseOrderLineItemDto.condition | null;
    /**
     * The reason for cancellation, return, credit, etc..
     */
    reason?: Record<string, string>;
    /**
     * A list of additional options to this reference position
     */
    options?: Record<string, Record<string, any>>;
};
export namespace purchaseOrderLineItemDto {
    /**
     * Only required for returns: The condition of the return, see API ERP Offers.Condition<br/>
     * Value:<br/>
     * 0: New<br/>
     * 1: AsNew<br/>
     * 2: VeryGood<br/>
     * 3: Good<br/>
     * 4: Acceptable<br/>
     * 5: Antique<br/>
     * 6: Broken<br/>
     * 7: Refurbished<br/>
     * 8: BStock<br/>
     * 9: DamagedPackaging<br/>
     * 10: Demo<br/>
     * 11: AccordingToDescription<br/>
     * 12: Incomplete<br/>
     * 13: Unknown
     */
    export enum condition {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
        '_13' = 13,
    }
}

