"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/otherDataPersonRepo/sql_toList");
const ToList_1 = __importDefault(require("../../dao/otherDataPerson/ToList"));
class OtherDataControllerGet extends ToList_1.default {
    getMeOtherData(req, res) {
        OtherDataControllerGet.getOtherData(sql_toList_1.SQL_OTHERDATA_VIEW.VIEW, [], res);
    }
}
const otherDataControllerGet = new OtherDataControllerGet();
exports.default = otherDataControllerGet;
