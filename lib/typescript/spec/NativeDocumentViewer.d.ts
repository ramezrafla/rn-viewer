import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    viewDocument(bookmarkOrUri: string, permissions: string, mimeType?: string, title?: string, presentationStyle?: string): Promise<null>;
}
export declare const NativeDocumentViewer: Spec;
//# sourceMappingURL=NativeDocumentViewer.d.ts.map