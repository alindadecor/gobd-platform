/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { entityTagHeaderValue } from './entityTagHeaderValue';
import type { stream } from './stream';
export type fileStreamResult = {
    fileStream?: stream;
    contentType?: string;
    fileDownloadName?: string;
    lastModified?: string | null;
    entityTag?: entityTagHeaderValue;
    enableRangeProcessing?: boolean;
};

