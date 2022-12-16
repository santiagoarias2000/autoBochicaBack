export const SQL_VEHICLES_CREATE={
CREATE: 'insert into vehicles(type_vehicle, license_plate, date_soat, date_tecnomecanical) values($1, $2, $3,$4) RETURNING id_vehicle'
}