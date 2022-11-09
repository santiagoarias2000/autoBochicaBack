"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/stractum/ToListController"));
class StratumRoutes {
    constructor() {
        this.routesApiStratum = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiStratum.get("/view", ToListController_1.default.getMeStratum);
    }
}
const stratumRoutes = new StratumRoutes();
exports.default = stratumRoutes.routesApiStratum;
