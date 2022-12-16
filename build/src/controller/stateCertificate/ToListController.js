"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/stateCertificate/sql_toList");
const ToList_1 = __importDefault(require("../../dao/stateCertificate/ToList"));
class StateCertificateControllerGet extends ToList_1.default {
    getMeStateCerfiticate(req, res) {
        StateCertificateControllerGet.getStateCertificate(sql_toList_1.SQL_STATECERTIFICATE_VIEW.VIEW, [], res);
    }
}
const stateCertificateControllerGet = new StateCertificateControllerGet();
exports.default = stateCertificateControllerGet;
