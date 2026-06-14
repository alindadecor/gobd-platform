/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { iEnumerable_string } from './iEnumerable_string';
import type { money } from './money';
export type createProductDto = {
    /**
     * The externalId defined outside Qilin
     */
    productId?: string;
    /**
     * The Id of input channel, where data goes from.
     */
    sourceId: string;
    /**
     * A list of EANs (GTIN is the correct name for what is popularly known as EAN). Does not have to be unique (e.g. because of different states).
     */
    GTINs?: Array<string> | null;
    /**
     * A list of SKUs. Doesn't have to be unique (e.g. because ERPs like Shopify also allow it)
     */
    SKUs?: Array<string> | null;
    /**
     * Reference to the id of a brand created via API
     */
    brandId?: string | null;
    /**
     * Manufacturer Product Number
     */
    MPNs?: Array<string> | null;
    /**
     *  The title of a product
     */
    title?: Record<string, string>;
    /**
     *  The description of a product
     */
    description?: Record<string, string>;
    /**
     *  The short description, often also called "subtitle".
     */
    shortDescription?: Record<string, string>;
    /**
     * List of Tags
     */
    tags?: Array<string> | null;
    /**
     * The URL to this product in a retailer's shop (or a list if the retailer has multiple shops).
     */
    deepLinks?: Array<string> | null;
    /**
     * Title of SEO
     */
    seoTitle?: Record<string, string>;
    /**
     * Keyword of SEO
     */
    seoKeywords?: Record<string, iEnumerable_string>;
    /**
     * Description of SEO
     */
    seoDescription?: Record<string, string>;
    /**
     * Length in cm
     */
    length?: number | null;
    /**
     * Width in cm
     */
    width?: number | null;
    /**
     * Height in cm
     */
    height?: number | null;
    /**
     * The net weight of the item in grams
     */
    weightNet?: number | null;
    /**
     * The shipping weight (i.e. the net weight of the article + the weight of the packaging) in grams.
     */
    weightGross?: number | null;
    /**
     * A list of file URLs (image, mp3, mp4, etc)
     */
    mediaUrls?: Array<string> | null;
    /**
     * A list full of references to the id of a variant expression
     */
    variationIds?: Array<string> | null;
    /**
     * An ID with which all variants of one and the same article are summarized
     */
    variationGroupId?: string | null;
    /**
     * A list full of references to the id of a merchant category
     */
    categoryIds?: Array<string> | null;
    /**
     * Reference to the Id of a shipping class
     */
    shippingClassificationId?: string | null;
    /**
     * The type of goods to which this product belongs
     */
    productGroup?: Record<string, string>;
    /**
     * A list full of references to the Id of a product
     */
    crossSellingIds?: Array<string> | null;
    /**
     * International Standard Book Number
     */
    ISBNs?: Array<string> | null;
    /**
     * Amazon Standard Identification Number
     */
    ASINs?: Array<string> | null;
    /**
     * The hazard number according to the UN catalog of hazardous substances
     */
    hazardCodes?: Array<string> | null;
    /**
     * The TARIC(TARif IntÃ©grÃ© Communautaire) code for customs regulations
     */
    TARICs?: Array<string> | null;
    /**
     * The country of origin of the goods in ISO 3166 ALPHA-3 format.
     */
    countryOfOrigin?: string | null;
    MSRP?: money;
    /**
     * The unit of the product.<br/>
     * Value:<br/>
     * 0 : Ml<br/>
     * 1 : Cl<br/>
     * 2 : Dl<br/>
     * 3 : L<br/>
     * 4 : Mg<br/>
     * 5 : G<br/>
     * 6 : Kg<br/>
     * 7 : Mm<br/>
     * 8 : Cm<br/>
     * 9 : Dm<br/>
     * 10 : M<br/>
     * 11 : Km<br/>
     * 12 : Sqmm<br/>
     * 13 : Sqcm<br/>
     * 14 : Sqdm<br/>
     * 15 : Sqm<br/>
     * 16 : Cbmm<br/>
     * 17 : Cbcm<br/>
     * 18 : Cbdm<br/>
     * 19 : Cbm<br/>
     * 20 : Pc<br/>
     * 21 : Yard<br/>
     * 22 : Oz<br/>
     * 23 : Lbs<br/>
     * 24 : Floz<br/>
     * 25 : Gal<br/>
     * 26 : Inch<br/>
     * 27 : Foot<br/>
     * 28 : Pound<br/>
     * 29 : Ton
     */
    unit?: createProductDto.unit | null;
    /**
     * The container
     */
    container?: string | null;
    /**
     * The reference quantity for calculating the basic price.
     */
    basePriceReferenceVolume?: number | null;
    /**
     * The reference unit for calculating the basic price.<br/>
     * Value:<br/>
     * 0 : Ml<br/>
     * 1 : Cl<br/>
     * 2 : Dl<br/>
     * 3 : L<br/>
     * 4 : Mg<br/>
     * 5 : G<br/>
     * 6 : Kg<br/>
     * 7 : Mm<br/>
     * 8 : Cm<br/>
     * 9 : Dm<br/>
     * 10 : M<br/>
     * 11 : Km<br/>
     * 12 : Sqmm<br/>
     * 13 : Sqcm<br/>
     * 14 : Sqdm<br/>
     * 15 : Sqm<br/>
     * 16 : Cbmm<br/>
     * 17 : Cbcm<br/>
     * 18 : Cbdm<br/>
     * 19 : Cbm<br/>
     * 20 : Pc<br/>
     * 21 : Yard<br/>
     * 22 : Oz<br/>
     * 23 : Lbs<br/>
     * 24 : Floz<br/>
     * 25 : Gal<br/>
     * 26 : Inch<br/>
     * 27 : Foot<br/>
     * 28 : Pound<br/>
     * 29 : Ton
     */
    basePriceReferenceUnit?: createProductDto.basePriceReferenceUnit | null;
    /**
     * The minimum purchase
     */
    minimumPurchaseQuantity?: number | null;
    /**
     * The acceptance interval
     */
    purchaseQuantity?: number | null;
    /**
     * The condition of a product.<br/>
     * Value:<br/>
     * 0 : New<br/>
     * 1 : AsNew<br/>
     * 2 : VeryGood<br/>
     * 3 : Good<br/>
     * 4 : Acceptable<br/>
     * 5 : Antique<br/>
     * 6 : Broken<br/>
     * 7 : Refurbished<br/>
     * 8 : BStock<br/>
     * 9 : DamagedPackaging<br/>
     * 10 : Demo<br/>
     * 11 : AccordingToDescription<br/>
     * 12 : Incomplete<br/>
     * 13 : Unknown<br/>
     */
    condition?: createProductDto.condition | null;
    /**
     * Custom attributes are defined by user
     */
    flexibleAttributes?: Record<string, Record<string, any>>;
    /**
     * The status of product
     */
    productStatus?: string | null;
    updatedDateExternal?: string | null;
    hashValue?: string;
};
export namespace createProductDto {
    /**
     * The unit of the product.<br/>
     * Value:<br/>
     * 0 : Ml<br/>
     * 1 : Cl<br/>
     * 2 : Dl<br/>
     * 3 : L<br/>
     * 4 : Mg<br/>
     * 5 : G<br/>
     * 6 : Kg<br/>
     * 7 : Mm<br/>
     * 8 : Cm<br/>
     * 9 : Dm<br/>
     * 10 : M<br/>
     * 11 : Km<br/>
     * 12 : Sqmm<br/>
     * 13 : Sqcm<br/>
     * 14 : Sqdm<br/>
     * 15 : Sqm<br/>
     * 16 : Cbmm<br/>
     * 17 : Cbcm<br/>
     * 18 : Cbdm<br/>
     * 19 : Cbm<br/>
     * 20 : Pc<br/>
     * 21 : Yard<br/>
     * 22 : Oz<br/>
     * 23 : Lbs<br/>
     * 24 : Floz<br/>
     * 25 : Gal<br/>
     * 26 : Inch<br/>
     * 27 : Foot<br/>
     * 28 : Pound<br/>
     * 29 : Ton
     */
    export enum unit {
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
        '_14' = 14,
        '_15' = 15,
        '_16' = 16,
        '_17' = 17,
        '_18' = 18,
        '_19' = 19,
        '_20' = 20,
        '_21' = 21,
        '_22' = 22,
        '_23' = 23,
        '_24' = 24,
        '_25' = 25,
        '_26' = 26,
        '_27' = 27,
        '_28' = 28,
        '_29' = 29,
    }
    /**
     * The reference unit for calculating the basic price.<br/>
     * Value:<br/>
     * 0 : Ml<br/>
     * 1 : Cl<br/>
     * 2 : Dl<br/>
     * 3 : L<br/>
     * 4 : Mg<br/>
     * 5 : G<br/>
     * 6 : Kg<br/>
     * 7 : Mm<br/>
     * 8 : Cm<br/>
     * 9 : Dm<br/>
     * 10 : M<br/>
     * 11 : Km<br/>
     * 12 : Sqmm<br/>
     * 13 : Sqcm<br/>
     * 14 : Sqdm<br/>
     * 15 : Sqm<br/>
     * 16 : Cbmm<br/>
     * 17 : Cbcm<br/>
     * 18 : Cbdm<br/>
     * 19 : Cbm<br/>
     * 20 : Pc<br/>
     * 21 : Yard<br/>
     * 22 : Oz<br/>
     * 23 : Lbs<br/>
     * 24 : Floz<br/>
     * 25 : Gal<br/>
     * 26 : Inch<br/>
     * 27 : Foot<br/>
     * 28 : Pound<br/>
     * 29 : Ton
     */
    export enum basePriceReferenceUnit {
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
        '_14' = 14,
        '_15' = 15,
        '_16' = 16,
        '_17' = 17,
        '_18' = 18,
        '_19' = 19,
        '_20' = 20,
        '_21' = 21,
        '_22' = 22,
        '_23' = 23,
        '_24' = 24,
        '_25' = 25,
        '_26' = 26,
        '_27' = 27,
        '_28' = 28,
        '_29' = 29,
    }
    /**
     * The condition of a product.<br/>
     * Value:<br/>
     * 0 : New<br/>
     * 1 : AsNew<br/>
     * 2 : VeryGood<br/>
     * 3 : Good<br/>
     * 4 : Acceptable<br/>
     * 5 : Antique<br/>
     * 6 : Broken<br/>
     * 7 : Refurbished<br/>
     * 8 : BStock<br/>
     * 9 : DamagedPackaging<br/>
     * 10 : Demo<br/>
     * 11 : AccordingToDescription<br/>
     * 12 : Incomplete<br/>
     * 13 : Unknown<br/>
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

