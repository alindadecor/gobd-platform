/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type qilinApiKeyDurationDto = {
    /**
     * The name unit of duration
     */
    durationUnitName?: string;
    /**
     * The time life of this apikey, it's counted when this apikey is created
     */
    duration?: number;
    /**
     * The unit of duration.<br/>
     * Value:<br/>
     * 0: Day<br/>
     * 1: Month<br/>
     * 2: Year
     */
    durationUnit?: qilinApiKeyDurationDto.durationUnit;
    /**
     * The expired date when apikey is "Duration"
     */
    expiredDate?: string;
};
export namespace qilinApiKeyDurationDto {
    /**
     * The unit of duration.<br/>
     * Value:<br/>
     * 0: Day<br/>
     * 1: Month<br/>
     * 2: Year
     */
    export enum durationUnit {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

