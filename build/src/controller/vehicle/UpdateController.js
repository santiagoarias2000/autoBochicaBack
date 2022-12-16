"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_update_1 = require("./../../repo/vehicles/sql_update");
const Update_1 = __importDefault(require("../../dao/vehicles/Update"));
class VehicleControllerUpdate extends Update_1.default {
    updateVehicle(req, res) {
        const idVehicle = req.body.idVehicle;
        const type_vehicle = req.body.typeVehicle;
        const license_plate = req.body.licensePlate;
        const date_soat = req.body.dateSoat;
        const date_tecnomecanical = req.body.dateTecnomecanical;
        const parameter = [idVehicle, type_vehicle, license_plate, date_soat, date_tecnomecanical];
        VehicleControllerUpdate.updateVehicle(sql_update_1.SQL_VEHICLES_UPDATE.UPDATE, parameter, res);
    }
}
const vehicleControllerUpdate = new VehicleControllerUpdate();
exports.default = vehicleControllerUpdate;
