"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_1 = __importDefault(require("../../dao/otherDataPerson/Update"));
const sql_update_1 = require("../../repo/otherDataPersonRepo/sql_update");
class OtherDataPersonControllerUpdate extends Update_1.default {
    updateOtherData(req, res) {
        const code = req.body.theCode;
        const direction = req.body.direction;
        const phone_number = req.body.phoneNumber;
        const occupation = req.body.occupation;
        const id_stratum = req.body.idStratum;
        const id_sisben = req.body.idSisben;
        const id_civil_status = req.body.idCivilStatus;
        const id_education_level = req.body.idEducationLevel;
        const id_city = req.body.idCity;
        const parameter = [code, direction, phone_number, occupation, id_stratum, id_sisben, id_civil_status, id_education_level, id_city];
        console.log(code);
        OtherDataPersonControllerUpdate.updateOtherDataPerson(sql_update_1.SQL_OTHERDATA_UPDATE.UPDATE, parameter, res);
    }
}
const otherDataPersonControllerUpdate = new OtherDataPersonControllerUpdate();
exports.default = otherDataPersonControllerUpdate;
