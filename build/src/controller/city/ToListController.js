"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_ToList_1 = require("./../../repo/cityRepo/sql_ToList");
const ToList_1 = __importDefault(require("../../dao/city/ToList"));
class CityControllerGet extends ToList_1.default {
    getMeCity(req, res) {
        CityControllerGet.getCity(sql_ToList_1.SQL_CITY_VIEW.VIEW, [], res);
    }
}
const cityControllerGet = new CityControllerGet();
exports.default = cityControllerGet;
