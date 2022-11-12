"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/typeDocument/sql_toList");
const ToList_1 = __importDefault(require("../../dao/typeDocument/ToList"));
class TypeDocumentGet extends ToList_1.default {
    getMeTypeDocument(req, res) {
        TypeDocumentGet.getTypeDocument(sql_toList_1.SQL_TYPEDOCUMEN_VIEW.VIEW, [], res);
    }
}
const typeDocumentGet = new TypeDocumentGet();
exports.default = typeDocumentGet;
