/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { OfferService } from './services/OfferService';
import { WarehouseService } from './services/WarehouseService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class QilinOfferClient {
    public readonly offer: OfferService;
    public readonly warehouse: WarehouseService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://apimgmt-qilin-dev.azure-api.net/test/api',
            VERSION: config?.VERSION ?? '1.0.2',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.offer = new OfferService(this.request);
        this.warehouse = new WarehouseService(this.request);
    }
}

