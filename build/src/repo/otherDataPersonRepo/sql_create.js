"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_OTHERDATA_CREATE = void 0;
exports.SQL_OTHERDATA_CREATE = {
    CREATE: 'insert into others_persons_data(direction, phone_number, occupation, id_stratum, id_sisben, id_civil_status, id_education_level, id_city) \
    values($1,$2,$3,$4,$5,$6,$7,$8)\
    RETURNING id_other_person_data',
};
