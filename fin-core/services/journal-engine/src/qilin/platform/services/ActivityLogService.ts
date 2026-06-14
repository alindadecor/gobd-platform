/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { fileStreamResult } from '../models/fileStreamResult';
import type { successResponse_activityLogDetailAdminLevelDto } from '../models/successResponse_activityLogDetailAdminLevelDto';
import type { successResponse_activityLogDto } from '../models/successResponse_activityLogDto';
import type { successResponse_fileStreamResult } from '../models/successResponse_fileStreamResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ActivityLogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Export detail of activityLogs
     * @returns fileStreamResult Successful response with created object
     * @throws ApiError
     */
    public exportActivityLogsAdminLevel({
        pageIndex,
        pageSize,
        orderBy,
        orderType,
        fromDate,
        toDate,
        transactionId,
        objectId,
        actionGroupId = 0,
        actionCode = 1000,
        logType = 0,
        actorId,
    }: {
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items per page
         */
        pageSize?: number,
        /**
         * Order by field
         */
        orderBy?: string,
        /**
         * Order by type
         */
        orderType?: string,
        /**
         * CreatedDate form of ActivityLog
         */
        fromDate?: string,
        /**
         * CreatedDate to of ActivityLog
         */
        toDate?: string,
        /**
         * The transactionId
         */
        transactionId?: number,
        /**
         * The objectId
         */
        objectId?: string,
        /**
         * The action group
         */
        actionGroupId?: 0 | 1000 | 2000 | 3000 | 4000 | 5000 | 6000 | 7000,
        /**
         * The action code
         */
        actionCode?: 1000 | 1001 | 1002 | 1003 | 1004 | 1050 | 1051 | 1052 | 1053 | 1060 | 1061 | 1062 | 1063 | 1070 | 1071 | 1072 | 1073 | 1080 | 1081 | 1082 | 1083 | 1090 | 1091 | 1092 | 1093 | 1100 | 1101 | 1102 | 1103 | 2000 | 2001 | 2002 | 2003 | 2500 | 2501 | 2503 | 2700 | 2701 | 2702 | 2703 | 3000 | 3001 | 3002 | 3003 | 3100 | 3101 | 3102 | 3103 | 3104 | 3150 | 3151 | 3152 | 3153 | 3154 | 3155 | 3200 | 3201 | 3202 | 3203 | 3250 | 3270 | 3271 | 3300 | 3301 | 3302 | 3303 | 3304 | 4000 | 4001 | 4002 | 5000 | 5001 | 5002 | 5003 | 6000 | 7000 | 7001 | 7002 | 7003 | 8000 | 9000 | 9001 | 9050 | 9051 | 9052 | 9053 | 9054 | 9055 | 9060 | 9070 | 9071 | 9080 | 9081 | 9082 | 9083 | 9090 | 9091 | 9092 | 9093 | 9095 | 9096 | 9097 | 9098 | 10000 | 10001 | 10002 | 10003 | 10005 | 10006 | 10007 | 10008 | 10009 | 10010 | 10011 | 10012 | 10013 | 10015 | 10016 | 10017 | 10018 | 10020 | 10021 | 10022 | 10023 | 10025 | 10026 | 10027 | 10028 | 10030 | 10031 | 10032 | 10035 | 10036 | 10037 | 10038 | 10040 | 10041 | 10042 | 10043 | 10045 | 10046 | 10050 | 10051 | 10101 | 10102 | 10103 | 10104 | 10105 | 10106 | 10107 | 10108,
        /**
         * Type of log
         */
        logType?: 0 | 1 | 2 | 3 | 4,
        /**
         * Who is action on this transaction
         */
        actorId?: string,
    }): CancelablePromise<fileStreamResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/activitylogs/export/admin',
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'orderBy': orderBy,
                'orderType': orderType,
                'fromDate': fromDate,
                'toDate': toDate,
                'transactionId': transactionId,
                'objectId': objectId,
                'actionGroupId': actionGroupId,
                'actionCode': actionCode,
                'logType': logType,
                'actorId': actorId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Export activity log
     * @returns successResponse_fileStreamResult Successful response with created object
     * @throws ApiError
     */
    public exportActivityLogsUserLevel({
        pageIndex,
        pageSize,
        orderBy,
        orderType,
        fromDate,
        toDate,
        transactionId,
        objectId,
        actionGroupId = 0,
        actionCode = 1000,
        logType = 0,
        actorId,
    }: {
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items per page
         */
        pageSize?: number,
        /**
         * Order by field
         */
        orderBy?: string,
        /**
         * Order by type
         */
        orderType?: string,
        /**
         * CreatedDate form of ActivityLog
         */
        fromDate?: string,
        /**
         * CreatedDate to of ActivityLog
         */
        toDate?: string,
        /**
         * The transactionId
         */
        transactionId?: number,
        /**
         * The objectId
         */
        objectId?: string,
        /**
         * The action group
         */
        actionGroupId?: 0 | 1000 | 2000 | 3000 | 4000 | 5000 | 6000 | 7000,
        /**
         * The action code
         */
        actionCode?: 1000 | 1001 | 1002 | 1003 | 1004 | 1050 | 1051 | 1052 | 1053 | 1060 | 1061 | 1062 | 1063 | 1070 | 1071 | 1072 | 1073 | 1080 | 1081 | 1082 | 1083 | 1090 | 1091 | 1092 | 1093 | 1100 | 1101 | 1102 | 1103 | 2000 | 2001 | 2002 | 2003 | 2500 | 2501 | 2503 | 2700 | 2701 | 2702 | 2703 | 3000 | 3001 | 3002 | 3003 | 3100 | 3101 | 3102 | 3103 | 3104 | 3150 | 3151 | 3152 | 3153 | 3154 | 3155 | 3200 | 3201 | 3202 | 3203 | 3250 | 3270 | 3271 | 3300 | 3301 | 3302 | 3303 | 3304 | 4000 | 4001 | 4002 | 5000 | 5001 | 5002 | 5003 | 6000 | 7000 | 7001 | 7002 | 7003 | 8000 | 9000 | 9001 | 9050 | 9051 | 9052 | 9053 | 9054 | 9055 | 9060 | 9070 | 9071 | 9080 | 9081 | 9082 | 9083 | 9090 | 9091 | 9092 | 9093 | 9095 | 9096 | 9097 | 9098 | 10000 | 10001 | 10002 | 10003 | 10005 | 10006 | 10007 | 10008 | 10009 | 10010 | 10011 | 10012 | 10013 | 10015 | 10016 | 10017 | 10018 | 10020 | 10021 | 10022 | 10023 | 10025 | 10026 | 10027 | 10028 | 10030 | 10031 | 10032 | 10035 | 10036 | 10037 | 10038 | 10040 | 10041 | 10042 | 10043 | 10045 | 10046 | 10050 | 10051 | 10101 | 10102 | 10103 | 10104 | 10105 | 10106 | 10107 | 10108,
        /**
         * Type of log
         */
        logType?: 0 | 1 | 2 | 3 | 4,
        /**
         * Who is action on this transaction
         */
        actorId?: string,
    }): CancelablePromise<successResponse_fileStreamResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/activitylogs/export',
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'orderBy': orderBy,
                'orderType': orderType,
                'fromDate': fromDate,
                'toDate': toDate,
                'transactionId': transactionId,
                'objectId': objectId,
                'actionGroupId': actionGroupId,
                'actionCode': actionCode,
                'logType': logType,
                'actorId': actorId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list of activity logs
     * @returns successResponse_activityLogDetailAdminLevelDto<any> Successful response with created object
     * @throws ApiError
     */
    public getActivityLogsAdminLevel({
        pageIndex,
        pageSize,
        orderBy,
        orderType,
        fromDate,
        toDate,
        transactionId,
        objectId,
        actionGroupId = 0,
        actionCode = 1000,
        logType = 0,
        actorId,
    }: {
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items per page
         */
        pageSize?: number,
        /**
         * Order by field
         */
        orderBy?: string,
        /**
         * Order by type
         */
        orderType?: string,
        /**
         * CreatedDate form of ActivityLog
         */
        fromDate?: string,
        /**
         * CreatedDate to of ActivityLog
         */
        toDate?: string,
        /**
         * The transactionId
         */
        transactionId?: number,
        /**
         * The objectId
         */
        objectId?: string,
        /**
         * The action group
         */
        actionGroupId?: 0 | 1000 | 2000 | 3000 | 4000 | 5000 | 6000 | 7000,
        /**
         * The action code
         */
        actionCode?: 1000 | 1001 | 1002 | 1003 | 1004 | 1050 | 1051 | 1052 | 1053 | 1060 | 1061 | 1062 | 1063 | 1070 | 1071 | 1072 | 1073 | 1080 | 1081 | 1082 | 1083 | 1090 | 1091 | 1092 | 1093 | 1100 | 1101 | 1102 | 1103 | 2000 | 2001 | 2002 | 2003 | 2500 | 2501 | 2503 | 2700 | 2701 | 2702 | 2703 | 3000 | 3001 | 3002 | 3003 | 3100 | 3101 | 3102 | 3103 | 3104 | 3150 | 3151 | 3152 | 3153 | 3154 | 3155 | 3200 | 3201 | 3202 | 3203 | 3250 | 3270 | 3271 | 3300 | 3301 | 3302 | 3303 | 3304 | 4000 | 4001 | 4002 | 5000 | 5001 | 5002 | 5003 | 6000 | 7000 | 7001 | 7002 | 7003 | 8000 | 9000 | 9001 | 9050 | 9051 | 9052 | 9053 | 9054 | 9055 | 9060 | 9070 | 9071 | 9080 | 9081 | 9082 | 9083 | 9090 | 9091 | 9092 | 9093 | 9095 | 9096 | 9097 | 9098 | 10000 | 10001 | 10002 | 10003 | 10005 | 10006 | 10007 | 10008 | 10009 | 10010 | 10011 | 10012 | 10013 | 10015 | 10016 | 10017 | 10018 | 10020 | 10021 | 10022 | 10023 | 10025 | 10026 | 10027 | 10028 | 10030 | 10031 | 10032 | 10035 | 10036 | 10037 | 10038 | 10040 | 10041 | 10042 | 10043 | 10045 | 10046 | 10050 | 10051 | 10101 | 10102 | 10103 | 10104 | 10105 | 10106 | 10107 | 10108,
        /**
         * Type of log
         */
        logType?: 0 | 1 | 2 | 3 | 4,
        /**
         * Who is action on this transaction
         */
        actorId?: string,
    }): CancelablePromise<successResponse_activityLogDetailAdminLevelDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/activitylogs/admin',
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'orderBy': orderBy,
                'orderType': orderType,
                'fromDate': fromDate,
                'toDate': toDate,
                'transactionId': transactionId,
                'objectId': objectId,
                'actionGroupId': actionGroupId,
                'actionCode': actionCode,
                'logType': logType,
                'actorId': actorId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
    /**
     * Get a list of activity logs
     * @returns successResponse_activityLogDto<any> Successful response with created object
     * @throws ApiError
     */
    public getActivityLogsUserLevel({
        pageIndex,
        pageSize,
        orderBy,
        orderType,
        fromDate,
        toDate,
        transactionId,
        objectId,
        actionGroupId = 0,
        actionCode = 1000,
        logType = 0,
        actorId,
    }: {
        /**
         * The index of the page
         */
        pageIndex?: number,
        /**
         * Total items per page
         */
        pageSize?: number,
        /**
         * Order by field
         */
        orderBy?: string,
        /**
         * Order by type
         */
        orderType?: string,
        /**
         * CreatedDate form of ActivityLog
         */
        fromDate?: string,
        /**
         * CreatedDate to of ActivityLog
         */
        toDate?: string,
        /**
         * The transactionId
         */
        transactionId?: number,
        /**
         * The objectId
         */
        objectId?: string,
        /**
         * The action group
         */
        actionGroupId?: 0 | 1000 | 2000 | 3000 | 4000 | 5000 | 6000 | 7000,
        /**
         * The action code
         */
        actionCode?: 1000 | 1001 | 1002 | 1003 | 1004 | 1050 | 1051 | 1052 | 1053 | 1060 | 1061 | 1062 | 1063 | 1070 | 1071 | 1072 | 1073 | 1080 | 1081 | 1082 | 1083 | 1090 | 1091 | 1092 | 1093 | 1100 | 1101 | 1102 | 1103 | 2000 | 2001 | 2002 | 2003 | 2500 | 2501 | 2503 | 2700 | 2701 | 2702 | 2703 | 3000 | 3001 | 3002 | 3003 | 3100 | 3101 | 3102 | 3103 | 3104 | 3150 | 3151 | 3152 | 3153 | 3154 | 3155 | 3200 | 3201 | 3202 | 3203 | 3250 | 3270 | 3271 | 3300 | 3301 | 3302 | 3303 | 3304 | 4000 | 4001 | 4002 | 5000 | 5001 | 5002 | 5003 | 6000 | 7000 | 7001 | 7002 | 7003 | 8000 | 9000 | 9001 | 9050 | 9051 | 9052 | 9053 | 9054 | 9055 | 9060 | 9070 | 9071 | 9080 | 9081 | 9082 | 9083 | 9090 | 9091 | 9092 | 9093 | 9095 | 9096 | 9097 | 9098 | 10000 | 10001 | 10002 | 10003 | 10005 | 10006 | 10007 | 10008 | 10009 | 10010 | 10011 | 10012 | 10013 | 10015 | 10016 | 10017 | 10018 | 10020 | 10021 | 10022 | 10023 | 10025 | 10026 | 10027 | 10028 | 10030 | 10031 | 10032 | 10035 | 10036 | 10037 | 10038 | 10040 | 10041 | 10042 | 10043 | 10045 | 10046 | 10050 | 10051 | 10101 | 10102 | 10103 | 10104 | 10105 | 10106 | 10107 | 10108,
        /**
         * Type of log
         */
        logType?: 0 | 1 | 2 | 3 | 4,
        /**
         * Who is action on this transaction
         */
        actorId?: string,
    }): CancelablePromise<successResponse_activityLogDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/activitylogs',
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'orderBy': orderBy,
                'orderType': orderType,
                'fromDate': fromDate,
                'toDate': toDate,
                'transactionId': transactionId,
                'objectId': objectId,
                'actionGroupId': actionGroupId,
                'actionCode': actionCode,
                'logType': logType,
                'actorId': actorId,
            },
            errors: {
                400: `Bad request response with detail of errors`,
                500: `Server error response`,
            },
        });
    }
}
