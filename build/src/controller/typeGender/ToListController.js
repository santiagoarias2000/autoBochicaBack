"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/typeGender/sql_toList");
const ToList_1 = __importDefault(require("../../dao/typeGender/ToList"));
class TypeGenderControllerGet extends ToList_1.default {
    getMeTypeGender(req, res) {
        TypeGenderControllerGet.getTypeGender(sql_toList_1.SQL_TYPEGENDER_VIEW.VIEW, [], res);
    }
}
const typeGenderContollerGet = new TypeGenderControllerGet();
exports.default = typeGenderContollerGet;
