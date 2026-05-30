/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type qilinApiKeyActiveTimeDto = {
    /**
     * The name of type of active time (ex: week, month)
     */
    apiKeyActiveTimeTypeName?: string;
    /**
     * The type of active time.<br/>
     * Value:<br/>
     * 0: Week<br/>
     * 1: Month
     */
    apiKeyActiveTimeType?: qilinApiKeyActiveTimeDto.apiKeyActiveTimeType;
    /**
     * The value of active time, 0 to 6 for week type and 1 to 31 for month type
     */
    selectedValue?: Array<number>;
    /**
     * The start time when api key valid on selected values
     */
    fromTime?: string;
    /**
     * The end time when api key valid on selected values
     */
    toTime?: string;
};
export namespace qilinApiKeyActiveTimeDto {
    /**
     * The type of active time.<br/>
     * Value:<br/>
     * 0: Week<br/>
     * 1: Month
     */
    export enum apiKeyActiveTimeType {
        '_0' = 0,
        '_1' = 1,
    }
}

