"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateController_1 = __importDefault(require("../controller/identification/CreateController"));
const ToListController_1 = __importDefault(require("../controller/identification/ToListController"));
class IdentificationRoutes {
    constructor() {
        this.routesApiIdentification = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiIdentification.get("/view", ToListController_1.default.getMeIdentification);
        this.routesApiIdentification.post("/create", CreateController_1.default.createMeIdentification);
    }
}
const identificationRoutes = new IdentificationRoutes();
exports.default = identificationRoutes.routesApiIdentification;
