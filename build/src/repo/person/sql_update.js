"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PERSON_UPDATE = void 0;
exports.SQL_PERSON_UPDATE = {
    UPDATE: "UPDATE persons SET  first_name=$2,second_name=$3,first_last_name=$4,second_last_name=$5,mail=$6,birthdat=$7,direction=$8,phone_number=$9,occupation=$10,id_type_document=$11,numbers=$12,issued_in=$13,id_state_certificate=$14,photo=$15,photo_fingerprint=$16,date_tuition=$17,id_vehicle=$18,id_tuition=$19,id_course=$20,id_stratum=$21,id_sisben=$22,id_civil_status=$23,id_education_level=$24,id_city=$25,id_gender=$26,id_type_sanguineou=$27,value_receipt=$28 where id_person = $1 ",
};
