"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/tuitions/ToListController"));
class TuitionsRoutes {
    constructor() {
        this.routesApiTiution = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiTiution.get("/view", ToListController_1.default.getMeTuition);
    }
}
const tuitionsRoutes = new TuitionsRoutes();
exports.default = tuitionsRoutes.routesApiTiution;
