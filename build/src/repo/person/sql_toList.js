"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PERSON_VIEW = void 0;
exports.SQL_PERSON_VIEW = {
    VIEW: "select id_person,first_name, second_name, first_last_name, second_last_name, mail, birthdat, direction, phone_number, occupation, numbers, issued_in, tsdo.type_document, stsscer.state_certificate, value_receipt, photo, photo_fingerprint, date_tuition,vhi.license_plate,tuis.name_tuition,cou.name_course, cou.time_course,tg.type_gender,ts.type, ts.rh, stra.name_stractum, sis.name_sisben, cs.type_civil_status,el.name_education_level, ci.name_city \
    from persons ps\
    INNER join types_documents tsdo ON tsdo.id_type_document = ps.id_type_document\
    inner join vehicles vhi ON vhi.id_vehicle = ps.id_vehicle\
    inner join tuitions tuis ON tuis.id_tuition = ps.id_tuition\
    inner join courses cou on cou.id_course = ps.id_course\
    inner join types_genders tg on ps.id_gender = tg.id_type_gender\
    inner join types_sanguineous ts on ps.id_type_sanguineou = ts.id_type_sanguineou\
    inner join stractums stra on ps.id_stratum = stra.id_stractum\
    inner join sisbens sis on ps.id_sisben = sis.id_sisben\
    inner join civils_status cs on ps.id_civil_status = cs.id_civil_status\
    inner join educations_levels el on ps.id_education_level = el.id_education_level\
    inner join citys ci ON ci.id_city = ps.id_city\
    inner join state_certificate stsscer ON stsscer.id_state_certificate = ps.id_state_certificate",
};
