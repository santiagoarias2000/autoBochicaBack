"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_create_1 = require("./../../repo/otherDataPersonRepo/sql_create");
const Create_1 = __importDefault(require("../../dao/otherDataPerson/Create"));
class OtherDataPersonControllerCreate extends Create_1.default {
    createMeOtherData(req, res) {
        const direction = req.body.direction;
        const phone_number = req.body.phoneNumber;
        const occupation = req.body.occupation;
        const id_stratum = req.body.idStratum;
        const id_sisben = req.body.idSisben;
        const id_civil_status = req.body.idCivilStatus;
        const id_education_level = req.body.idEducationLevel;
        const id_city = req.body.idCity;
        const parameter = [direction, phone_number, occupation, id_stratum, id_sisben, id_civil_status, id_education_level, id_city];
        OtherDataPersonControllerCreate.createOtherDataPerson(sql_create_1.SQL_OTHERDATA_CREATE.CREATE, parameter, res);
    }
}
const otherDataPersonControllerCreate = new OtherDataPersonControllerCreate();
exports.default = otherDataPersonControllerCreate;
