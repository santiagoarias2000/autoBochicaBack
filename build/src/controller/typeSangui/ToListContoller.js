"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/typeSanguineous/sql_toList");
const ToList_1 = __importDefault(require("../../dao/typeSangui/ToList"));
class TypeSanguiContollerGet extends ToList_1.default {
    getMeTypeSangui(req, res) {
        TypeSanguiContollerGet.getTypeSangui(sql_toList_1.SQL_TYPESANGU_VIEW.VIEW, [], res);
    }
}
const typeSanguiContollerGet = new TypeSanguiContollerGet();
exports.default = typeSanguiContollerGet;
