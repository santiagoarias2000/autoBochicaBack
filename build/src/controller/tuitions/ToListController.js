"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/tuitions/sql_toList");
const ToList_1 = __importDefault(require("../../dao/tuitions/ToList"));
class TuitionsControllerGet extends ToList_1.default {
    getMeTuition(req, res) {
        TuitionsControllerGet.getTuitions(sql_toList_1.SQL_TUIYIONS_VIEW.VIEW, [], res);
    }
}
const tuitionsControllerGet = new TuitionsControllerGet();
exports.default = tuitionsControllerGet;
