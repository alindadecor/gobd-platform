/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { supportPrice } from './supportPrice';
export type getAccessRequestDetailDto = {
    /**
     * List of permission requested
     */
    permissionRequested?: Array<string>;
    /**
     * The id access request
     */
    id?: string;
    /**
     * The ticket Id is in freshdesk
     */
    freshDeskTicketId?: string;
    /**
     * The subscriptionId of the client need to support
     */
    subscriptionId?: string;
    /**
     * The requester's email (from Freshdesk)
     */
    requesterEmail?: string;
    /**
     * The description of this request
     */
    description?: string | null;
    /**
     * The status of the access request<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Accepted<br/>
     * 2: Rejected<br/>
     * 3: Closed
     */
    status?: getAccessRequestDetailDto.status | null;
    /**
     * The status name of the request
     */
    statusName?: string | null;
    /**
     * Time in days to access customer data
     */
    duration?: number;
    /**
     * Urls of medias
     */
    mediaUrls?: Array<string>;
    /**
     * The type of the support<br/>
     * Value:<br/>
     * 0: Free<br/>
     * 1: Paid<br/>
     * 2: Otherwise
     */
    supportType?: getAccessRequestDetailDto.supportType;
    /**
     * The support type name
     */
    supportTypeName?: string | null;
    price?: supportPrice;
    /**
     * The region
     */
    region?: string | null;
    /**
     * List of permissionIds
     */
    permissionIds?: Array<string>;
    /**
     * User created request
     */
    createdBy?: string;
};
export namespace getAccessRequestDetailDto {
    /**
     * The status of the access request<br/>
     * Value:<br/>
     * 0: Requested<br/>
     * 1: Accepted<br/>
     * 2: Rejected<br/>
     * 3: Closed
     */
    export enum status {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
    /**
     * The type of the support<br/>
     * Value:<br/>
     * 0: Free<br/>
     * 1: Paid<br/>
     * 2: Otherwise
     */
    export enum supportType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

