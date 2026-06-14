/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { messageSender } from './messageSender';
export type messageDto = {
    /**
     * The text of the message.
     */
    text: string;
    /**
     * When was this message created.
     */
    createdDate?: string;
    /**
     * Where does message come from.
     */
    messageFrom: messageDto.messageFrom;
    /**
     * Attached file send from sender.
     */
    fileAttached?: string;
    sender: messageSender;
};
export namespace messageDto {
    /**
     * Where does message come from.
     */
    export enum messageFrom {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
    }
}

