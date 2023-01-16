"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PERSON_CREATE = void 0;
exports.SQL_PERSON_CREATE = {
    CREATEPERSON: "insert into persons(first_name,second_name,first_last_name,second_last_name,mail,birthdat,direction,phone_number,occupation,id_type_document,numbers,issued_in,id_state_certificate,photo,photo_fingerprint,date_tuition,id_vehicle,id_tuition,id_course,id_stratum,id_sisben,id_civil_status,id_education_level,id_city,id_gender,id_type_sanguineou,value_receipt ) \
     values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27)\
     RETURNING id_person",
    CREATEOTHERDATA: "insert into persons(first_name,second_name,first_last_name,second_last_name,mail,birthdat,direction,phone_number,occupation,id_stratum,id_sisben,id_civil_status,id_education_level,id_city,id_identification,id_gender,id_type_sanguineou) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)",
    // insert into persons(first_name,second_name,first_last_name,second_last_name,mail,birthdat,direction,phone_numbe,occupation,id_type_document,numbers,issued_in,state_certificate,photo,photo_fingerprint,date_tuition,id_receipt,id_vehicle,id_certificate,id_tuition,id_course,id_stratum,id_sisben,id_civil_status,id_education_level,id_city,id_gender,id_type_sanguineou ) values('first_name','second_name','first_last_name','second_last_name','mail','birthdat','direction','phone_numbe','occupation',1,'numbers','issued_in','state_certificate','photo','photo_fingerprint','2020-02-02',1,1,1,1,1,1,1,1,1,1,1,1 )
};
