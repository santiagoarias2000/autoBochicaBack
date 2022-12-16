"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/identication/sql_toList");
const ToList_1 = __importDefault(require("../../dao/identification/ToList"));
class IdentificationControllerGet extends ToList_1.default {
    getMeIdentification(req, res) {
        IdentificationControllerGet.getIdentificantion(sql_toList_1.SQL_IDENTIFICATION_LIST.VIEW, [], res);
    }
}
const identificationControllerGet = new IdentificationControllerGet();
exports.default = identificationControllerGet;
