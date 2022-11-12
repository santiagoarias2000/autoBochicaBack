"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_OTHERDATA_VIEW = void 0;
exports.SQL_OTHERDATA_VIEW = {
    VIEW: "select OPD.direction, OPD.phone_number, OPD.occupation, stra.name_stractum, sis.name_sisben, cs.type_civil_status, ed.name_education_level,cy.name_city \
    from others_persons_data OPD \
    LEFT join stractums stra on OPD.id_stratum = stra.id_stractum\
    LEFT join citys cy on OPD.id_city = cy.id_city\
    LEFT join sisbens sis on OPD.id_sisben = sis.id_sisben\
    LEFT join civils_status cs on OPD.id_civil_status = cs.id_civil_status\
    LEFT join educations_levels ed ON OPD.id_education_level = ed.id_education_level",
};
