/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type noteDetailDto = {
    /**
     * The type of the note.
     */
    noteTypeText?: string | null;
    /**
     * The date when this annotation was created.
     */
    createdDate?: string | null;
    /**
     * The content of the note.
     */
    content?: Record<string, string>;
    /**
     * The type of the note.
     */
    noteType?: noteDetailDto.noteType | null;
};
export namespace noteDetailDto {
    /**
     * The type of the note.
     */
    export enum noteType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
        '_13' = 13,
    }
}

