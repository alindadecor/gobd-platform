/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { supportPrice } from './supportPrice';
export type createAccessRequestDto = {
    /**
     * The ticket Id is in freshdesk
     */
    freshDeskTicketId: string;
    /**
     * The subscriptionId of the client need to support
     */
    subscriptionId: string;
    /**
     * The requester's email (from Freshdesk)
     */
    requesterEmail: string;
    /**
     * The description of this request
     */
    description?: string | null;
    /**
     * Time in days to access customer data
     */
    duration: number;
    /**
     * Urls of medias
     */
    mediaUrls?: Array<string>;
    /**
     * The type of the support<br/>
     * Value:<br/>
     * 0: Free<br/>
     * 1: Paid<br/>
     * 2: Free if bugs. Otherwise, paid
     */
    supportType: createAccessRequestDto.supportType;
    price?: supportPrice;
    /**
     * The region
     */
    region?: string;
    /**
     * List of permissionIds
     */
    permissionIds: Array<string>;
};
export namespace createAccessRequestDto {
    /**
     * The type of the support<br/>
     * Value:<br/>
     * 0: Free<br/>
     * 1: Paid<br/>
     * 2: Free if bugs. Otherwise, paid
     */
    export enum supportType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

