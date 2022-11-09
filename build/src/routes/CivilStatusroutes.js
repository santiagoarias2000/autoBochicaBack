"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/civilStatus/ToListController"));
class CivilStatusRoutes {
    constructor() {
        this.routesApiCivilStatus = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiCivilStatus.get("/view", ToListController_1.default.getMeCivilStatus);
    }
}
const civilStatusRoutes = new CivilStatusRoutes();
exports.default = civilStatusRoutes.routesApiCivilStatus;
