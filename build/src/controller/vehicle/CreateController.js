"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_create_1 = require("../../repo/vehicles/sql_create");
const Create_1 = __importDefault(require("../../dao/vehicles/Create"));
class VehiclesControllerCreate extends Create_1.default {
    createMeVehicle(req, res) {
        const type_vehicle = req.body.typeVehicle;
        const license_plate = req.body.licensePlate;
        const date_soat = req.body.dateSoat;
        const date_tecnomecanical = req.body.dateTecnomecanical;
        const parameter = [type_vehicle, license_plate, date_soat, date_tecnomecanical];
        VehiclesControllerCreate.createVehicles(sql_create_1.SQL_VEHICLES_CREATE.CREATE, parameter, res);
    }
}
const vehiclesControllerCreate = new VehiclesControllerCreate();
exports.default = vehiclesControllerCreate;
