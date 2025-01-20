"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockModule = Object.freeze({
    viewDocument: jest.fn().mockResolvedValue(null),
});
jest.mock('@react-native-documents/viewer', () => {
    return mockModule;
});
