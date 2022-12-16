"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/stateCertificate/ToListController"));
class StatusCertificateRoutes {
    constructor() {
        this.routesApiStatusCertificate = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiStatusCertificate.get("/view", ToListController_1.default.getMeStateCerfiticate);
    }
}
const statusCertificateRoutes = new StatusCertificateRoutes();
exports.default = statusCertificateRoutes.routesApiStatusCertificate;
