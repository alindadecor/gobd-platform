/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type qilinPermissionDto = {
    /**
     * The id of resource
     */
    qilinResourceId?: string | null;
    /**
     * The id of action
     */
    qilinActionId?: string | null;
    /**
     * The type of Permission
     */
    permissionType?: qilinPermissionDto.permissionType | null;
};
export namespace qilinPermissionDto {
    /**
     * The type of Permission
     */
    export enum permissionType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

