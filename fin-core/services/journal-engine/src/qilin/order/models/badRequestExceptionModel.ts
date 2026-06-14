/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { list_object } from './list_object';
import type { qilinError } from './qilinError';
export type badRequestExceptionModel = {
    id?: string;
    errors?: Array<qilinError>;
    creationTime?: string;
    correlationId?: string;
    requestAPI?: string;
    requestHttpVerb?: string;
    requestParameters?: Record<string, list_object>;
    requestBody?: string;
};

