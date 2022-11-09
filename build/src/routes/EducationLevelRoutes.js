"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/educationLevel/ToListController"));
class EducationLevelRoutes {
    constructor() {
        this.routesApiEducationLevel = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiEducationLevel.get("/view", ToListController_1.default.getMeEducLevel);
    }
}
const educacionlevelRoutes = new EducationLevelRoutes();
exports.default = educacionlevelRoutes.routesApiEducationLevel;
