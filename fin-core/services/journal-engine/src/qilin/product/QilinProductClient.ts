/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AttributeService } from './services/AttributeService';
import { BrandService } from './services/BrandService';
import { CategoryService } from './services/CategoryService';
import { MediaService } from './services/MediaService';
import { ProductService } from './services/ProductService';
import { ShippingClassificationService } from './services/ShippingClassificationService';
import { VariationService } from './services/VariationService';
import { VariationKeyService } from './services/VariationKeyService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class QilinProductClient {
    public readonly attribute: AttributeService;
    public readonly brand: BrandService;
    public readonly category: CategoryService;
    public readonly media: MediaService;
    public readonly product: ProductService;
    public readonly shippingClassification: ShippingClassificationService;
    public readonly variation: VariationService;
    public readonly variationKey: VariationKeyService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://apimgmt-qilin-dev.azure-api.net/test/api',
            VERSION: config?.VERSION ?? '1.0.1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.attribute = new AttributeService(this.request);
        this.brand = new BrandService(this.request);
        this.category = new CategoryService(this.request);
        this.media = new MediaService(this.request);
        this.product = new ProductService(this.request);
        this.shippingClassification = new ShippingClassificationService(this.request);
        this.variation = new VariationService(this.request);
        this.variationKey = new VariationKeyService(this.request);
    }
}

