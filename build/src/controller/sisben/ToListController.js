"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToList_1 = __importDefault(require("../../dao/sisben/ToList"));
const sql_toList_1 = require("../../repo/sisbenRepo/sql_toList");
class SisbenControllerGet extends ToList_1.default {
    getMeSisben(req, res) {
        SisbenControllerGet.getSisben(sql_toList_1.SQL_SISBEN_VIEW.VIEW, [], res);
    }
}
const sisbenControllerGet = new SisbenControllerGet();
exports.default = sisbenControllerGet;
