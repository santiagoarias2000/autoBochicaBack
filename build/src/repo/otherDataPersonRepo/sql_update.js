"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_OTHERDATA_UPDATE = void 0;
exports.SQL_OTHERDATA_UPDATE = {
    UPDATE: 'update others_persons_data set direction=$2, phone_number=$3, occupation=$4, id_stratum=$5, id_sisben=$6, id_civil_status = $7, id_education_level=$8, id_city=$9 \
    where id_other_person_data = $1'
};
