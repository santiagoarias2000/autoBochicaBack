"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateController_1 = __importDefault(require("../controller/vehicle/CreateController"));
const DeleteContoller_1 = __importDefault(require("../controller/vehicle/DeleteContoller"));
const DetailsController_1 = __importDefault(require("../controller/vehicle/DetailsController"));
const ToListController_1 = __importDefault(require("../controller/vehicle/ToListController"));
const UpdateController_1 = __importDefault(require("../controller/vehicle/UpdateController"));
class VehiclesRoutes {
    constructor() {
        this.routesApiVehicles = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiVehicles.get("/view", ToListController_1.default.getMeVehicles);
        this.routesApiVehicles.post("/create", CreateController_1.default.createMeVehicle);
        this.routesApiVehicles.get("/details/:idVehicle", DetailsController_1.default.DetailsOne);
        this.routesApiVehicles.delete("/delete/:idVehicle", DeleteContoller_1.default.deleteVehicles);
        this.routesApiVehicles.put("/update", UpdateController_1.default.updateVehicle);
    }
}
const vehiclesRoutes = new VehiclesRoutes();
exports.default = vehiclesRoutes.routesApiVehicles;
