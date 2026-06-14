/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AccessRequestService } from './services/AccessRequestService';
import { ActivityLogService } from './services/ActivityLogService';
import { NotificationService } from './services/NotificationService';
import { QilinActionService } from './services/QilinActionService';
import { QilinApiKeyService } from './services/QilinApiKeyService';
import { QilinPermissionService } from './services/QilinPermissionService';
import { QilinResourceService } from './services/QilinResourceService';
import { QilinRoleService } from './services/QilinRoleService';
import { QilinSubscriptionService } from './services/QilinSubscriptionService';
import { UserManagementService } from './services/UserManagementService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class QilinPlatformClient {
    public readonly accessRequest: AccessRequestService;
    public readonly activityLog: ActivityLogService;
    public readonly notification: NotificationService;
    public readonly qilinAction: QilinActionService;
    public readonly qilinApiKey: QilinApiKeyService;
    public readonly qilinPermission: QilinPermissionService;
    public readonly qilinResource: QilinResourceService;
    public readonly qilinRole: QilinRoleService;
    public readonly qilinSubscription: QilinSubscriptionService;
    public readonly userManagement: UserManagementService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://apimgmt-qilin-dev.azure-api.net/test/api',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.accessRequest = new AccessRequestService(this.request);
        this.activityLog = new ActivityLogService(this.request);
        this.notification = new NotificationService(this.request);
        this.qilinAction = new QilinActionService(this.request);
        this.qilinApiKey = new QilinApiKeyService(this.request);
        this.qilinPermission = new QilinPermissionService(this.request);
        this.qilinResource = new QilinResourceService(this.request);
        this.qilinRole = new QilinRoleService(this.request);
        this.qilinSubscription = new QilinSubscriptionService(this.request);
        this.userManagement = new UserManagementService(this.request);
    }
}

