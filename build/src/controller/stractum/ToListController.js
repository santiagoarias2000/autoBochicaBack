"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/stratumRepo/sql_toList");
const ToList_1 = __importDefault(require("../../dao/stractums/ToList"));
class StratumControllerGet extends ToList_1.default {
    getMeStratum(req, res) {
        StratumControllerGet.getStractum(sql_toList_1.SQL_STRATUM_VIEW.VIEW, [], res);
    }
}
const stratumControllerGet = new StratumControllerGet();
exports.default = stratumControllerGet;
