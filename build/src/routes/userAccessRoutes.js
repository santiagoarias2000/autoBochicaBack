"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserAccessController_1 = __importDefault(require("../controller/userAcess/UserAccessController"));
class AccessRoutes {
    constructor() {
        this.routesAccessApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.routesAccessApi.post('/login', UserAccessController_1.default.searchOneAccess);
    }
}
const accessRoutes = new AccessRoutes();
exports.default = accessRoutes.routesAccessApi;
