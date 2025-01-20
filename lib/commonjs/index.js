"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewDocument = viewDocument;
var _NativeDocumentViewer = require("./spec/NativeDocumentViewer");
/**
 * iOS only. Configure the presentation style of the picker.
 * */

/*
 * really, PresentationStyle shouldn't be here and we should just use ModalPropsIOS['presentationStyle']>
 * but I'm not sure how to get that working with TypeDoc producing a nice output so we duplicate it here
 * */

/**
 * BaseOptions with the uri of the document to view
 * */

/**
 * BaseOptions with the bookmark data from the DocumentPicker module. Obtain the bookmark using the "open" mode, with `requestLongTermAccess` flag set to true.
 *
 * A bookmark enables long-term access to a file.
 */

/**
 * options for viewing a document
 *
 * If you're trying to open a file that you have long-term permission to access, you should use the `bookmark` option (provided by the DocumentPicker module).
 *
 * */

function viewDocument(data) {
  const bookmarkOrUri = 'bookmark' in data ? data.bookmark : data.uri;
  return _NativeDocumentViewer.NativeDocumentViewer.viewDocument(bookmarkOrUri, data?.grantPermissions ?? 'read', data?.mimeType, data?.headerTitle, data?.presentationStyle);
}
//# sourceMappingURL=index.js.map