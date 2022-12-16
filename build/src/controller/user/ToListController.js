"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToList_1 = __importDefault(require("../../dao/user/ToList"));
const sql_toList_1 = require("../../repo/user/sql_toList");
class UserControllerGet extends ToList_1.default {
    getMeUser(req, res) {
        UserControllerGet.getUser(sql_toList_1.SQL_USER_VIEW.VIEW, [], res);
    }
}
const userControllerGet = new UserControllerGet();
exports.default = userControllerGet;
