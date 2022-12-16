"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_VEHICLES_DETAILS = void 0;
exports.SQL_VEHICLES_DETAILS = {
    DETAILS: 'SELECT id_vehicle, type_vehicle, license_plate, date_soat, date_tecnomecanical  FROM vehicles WHERE id_vehicle = $1',
};
