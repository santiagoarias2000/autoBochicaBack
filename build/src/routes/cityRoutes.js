"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/city/ToListController"));
class CityRoutes {
    constructor() {
        this.routesApiCity = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiCity.get("/view", ToListController_1.default.getMeCity);
    }
}
const cityRoutes = new CityRoutes();
exports.default = cityRoutes.routesApiCity;
