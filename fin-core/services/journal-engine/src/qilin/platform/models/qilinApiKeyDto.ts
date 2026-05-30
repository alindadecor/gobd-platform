/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { qilinApiKeyLifeTimeDto } from './qilinApiKeyLifeTimeDto';
export type qilinApiKeyDto = {
    lifeTime?: qilinApiKeyLifeTimeDto;
    /**
     * The name of api key
     */
    name?: string;
    /**
     * Type of this api key.<br/>
     * Value:<br/>
     * 0: Duration<br/>
     * 1: ActiveTime<br/>
     * 2: Forever
     *
     */
    type: qilinApiKeyDto.type;
};
export namespace qilinApiKeyDto {
    /**
     * Type of this api key.<br/>
     * Value:<br/>
     * 0: Duration<br/>
     * 1: ActiveTime<br/>
     * 2: Forever
     *
     */
    export enum type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

