export interface NativeModuleError extends Error {
    code: string;
}
export declare const errorCodes: Readonly<{
    OPERATION_CANCELED: "OPERATION_CANCELED";
    IN_PROGRESS: "ASYNC_OP_IN_PROGRESS";
    UNABLE_TO_OPEN_FILE_TYPE: "UNABLE_TO_OPEN_FILE_TYPE";
}>;
/**
 * TypeScript helper to check if an object has the `code` property.
 * This is used to avoid `as` casting when you access the `code` property on errors returned by the module.
 */
export declare const isErrorWithCode: (error: any) => error is NativeModuleError;
//# sourceMappingURL=errors.d.ts.map