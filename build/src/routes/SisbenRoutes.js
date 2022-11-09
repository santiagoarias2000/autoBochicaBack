"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/sisben/ToListController"));
class SisbenRoutes {
    constructor() {
        this.routesApiSisben = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiSisben.get("/view", ToListController_1.default.getMeSisben);
    }
}
const sisbenRoutes = new SisbenRoutes();
exports.default = sisbenRoutes.routesApiSisben;
