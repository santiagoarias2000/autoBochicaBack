"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/typeGender/ToListController"));
class TypeGenderRoutes {
    constructor() {
        this.routesApiAdminstrator = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiAdminstrator.get("/view", ToListController_1.default.getMeTypeGender);
    }
}
const typeGenderRoutes = new TypeGenderRoutes();
exports.default = typeGenderRoutes.routesApiAdminstrator;
