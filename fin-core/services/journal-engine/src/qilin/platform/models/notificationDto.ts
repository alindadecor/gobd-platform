/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type notificationDto = {
    /**
     * The identity of notification
     */
    id?: string;
    /**
     * The title of notification
     */
    title?: string;
    /**
     * The description of notification
     */
    description?: string | null;
    /**
     * The type of notification
     */
    notificationType?: notificationDto.notificationType;
    /**
     * The flag to identify notification is read
     */
    isRead?: boolean;
    /**
     * Time notification is read
     */
    readOnDate?: string;
    /**
     * Time notification is created
     */
    createdOn?: string;
    /**
     * Object identity involve in notification
     */
    objectId?: Record<string, any>;
};
export namespace notificationDto {
    /**
     * The type of notification
     */
    export enum notificationType {
        '_0' = 0,
    }
}

