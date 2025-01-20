"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewDocument = viewDocument;
const NativeDocumentViewer_1 = require("./spec/NativeDocumentViewer");
function viewDocument(data) {
    const bookmarkOrUri = 'bookmark' in data ? data.bookmark : data.uri;
    return NativeDocumentViewer_1.NativeDocumentViewer.viewDocument(bookmarkOrUri, data?.grantPermissions ?? 'read', data?.mimeType, data?.headerTitle, data?.presentationStyle);
}
