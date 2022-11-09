"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/educacionlevelRepo/sql_toList");
const ToList_1 = __importDefault(require("../../dao/educationLevel/ToList"));
class EducLevelControllerGet extends ToList_1.default {
    getMeEducLevel(req, res) {
        EducLevelControllerGet.getEduLevel(sql_toList_1.SQL_EDUCLEVEL_VIEW.VIEW, [], res);
    }
}
const educLevelControllerGet = new EducLevelControllerGet();
exports.default = educLevelControllerGet;
