"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListContoller_1 = __importDefault(require("../controller/typeSangui/ToListContoller"));
class TypeSanguinRoutes {
    constructor() {
        this.routesApiTypeSangui = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiTypeSangui.get("/view", ToListContoller_1.default.getMeTypeSangui);
    }
}
const typeSanguinRoutes = new TypeSanguinRoutes();
exports.default = typeSanguinRoutes.routesApiTypeSangui;
