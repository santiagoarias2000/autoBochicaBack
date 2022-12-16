"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_VEHICLES_CREATE = void 0;
exports.SQL_VEHICLES_CREATE = {
    CREATE: 'insert into vehicles(type_vehicle, license_plate, date_soat, date_tecnomecanical) values($1, $2, $3,$4) RETURNING id_vehicle'
};
