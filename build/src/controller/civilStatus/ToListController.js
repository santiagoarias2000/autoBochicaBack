"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/civilStatusRepo/sql_toList");
const ToList_1 = __importDefault(require("../../dao/civilStatus/ToList"));
class CivilStatusControllerGet extends ToList_1.default {
    getMeCivilStatus(req, res) {
        CivilStatusControllerGet.getCivilStatus(sql_toList_1.SQL_CIVILSTATUS_VIEW.VIEW, [], res);
    }
}
const civilStatusControllerGet = new CivilStatusControllerGet();
exports.default = civilStatusControllerGet;
