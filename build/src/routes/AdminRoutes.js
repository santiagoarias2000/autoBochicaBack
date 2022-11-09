"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/administrator/ToListController"));
class AdministratorRoutes {
    constructor() {
        this.routesApiAdministrator = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiAdministrator.get("/view", ToListController_1.default.getMeAdministrator);
    }
}
const administratorRoutes = new AdministratorRoutes();
exports.default = administratorRoutes.routesApiAdministrator;
