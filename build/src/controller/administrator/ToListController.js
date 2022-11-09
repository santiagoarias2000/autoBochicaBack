"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToList_1 = __importDefault(require("../../dao/administrator/ToList"));
const sql_toList_1 = require("../../repo/admiRepo/sql_toList");
class AdministratorControllerGet extends ToList_1.default {
    getMeAdministrator(req, res) {
        AdministratorControllerGet.getAdministrator(sql_toList_1.SQL_ADMIN_VIEW.VIEW, [], res);
    }
}
const administratorControllerGet = new AdministratorControllerGet();
exports.default = administratorControllerGet;
