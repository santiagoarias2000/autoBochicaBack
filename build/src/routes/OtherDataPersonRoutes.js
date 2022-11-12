"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateController_1 = __importDefault(require("../controller/otherDataPerson/CreateController"));
const DeleteController_1 = __importDefault(require("../controller/otherDataPerson/DeleteController"));
const ToListController_1 = __importDefault(require("../controller/otherDataPerson/ToListController"));
const UpdateController_1 = __importDefault(require("../controller/otherDataPerson/UpdateController"));
class OtherDataPersonRoutes {
    constructor() {
        this.routesApiOtherDataPerson = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiOtherDataPerson.get("/view", ToListController_1.default.getMeOtherData);
        this.routesApiOtherDataPerson.post("/create", CreateController_1.default.createMeOtherData);
        this.routesApiOtherDataPerson.delete("/delete/:theCode", DeleteController_1.default.deleteOPD);
        this.routesApiOtherDataPerson.put("/update", UpdateController_1.default.updateOtherData);
    }
}
const otherDataPersonRoutes = new OtherDataPersonRoutes();
exports.default = otherDataPersonRoutes.routesApiOtherDataPerson;
