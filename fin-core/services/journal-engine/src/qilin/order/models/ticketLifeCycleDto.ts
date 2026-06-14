/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { messageSender } from './messageSender';
export type ticketLifeCycleDto = {
    /**
     * The status value after the change (= the new status).<br/>
     * The data type of the status<br/>
     * Value:<br/>
     * 0: New<br/>
     * 1: WaitForSenderResponse<br/>
     * 2: WaitForReceiverResponse<br/>
     * 3: SenderClosingRequest<br/>
     * 4: ReceiverClosingRequest<br/>
     * 5: ChannelClosingRequest<br/>
     * 6: QilinClosingRequest<br/>
     * 7: OtherClosingRequest<br/>
     * 8: ClosingAcknowledged<br/>
     * 9: ClosingRejected<br/>
     * 10: InitialSenderClosed<br/>
     * 11: InitialReceiverClosed<br/>
     * :12 AllDirectPartiesClosed<br/>
     * 13: ChannelClosed<br/>
     * 14: QilinClosed<br/>
     * 15: OtherClosed
     */
    newState?: ticketLifeCycleDto.newState;
    changedBy: messageSender;
};
export namespace ticketLifeCycleDto {
    /**
     * The status value after the change (= the new status).<br/>
     * The data type of the status<br/>
     * Value:<br/>
     * 0: New<br/>
     * 1: WaitForSenderResponse<br/>
     * 2: WaitForReceiverResponse<br/>
     * 3: SenderClosingRequest<br/>
     * 4: ReceiverClosingRequest<br/>
     * 5: ChannelClosingRequest<br/>
     * 6: QilinClosingRequest<br/>
     * 7: OtherClosingRequest<br/>
     * 8: ClosingAcknowledged<br/>
     * 9: ClosingRejected<br/>
     * 10: InitialSenderClosed<br/>
     * 11: InitialReceiverClosed<br/>
     * :12 AllDirectPartiesClosed<br/>
     * 13: ChannelClosed<br/>
     * 14: QilinClosed<br/>
     * 15: OtherClosed
     */
    export enum newState {
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
    }
}

