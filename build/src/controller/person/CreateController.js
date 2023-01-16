"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_create_1 = require("./../../repo/person/sql_create");
const Create_1 = __importDefault(require("../../dao/person/Create"));
class PersonControllerCreate extends Create_1.default {
    createMePerson(req, res) {
        const first_name = req.body.firstName;
        const second_name = req.body.secondName;
        const first_last_name = req.body.firstLastName;
        const second_last_name = req.body.secondLastName;
        const mail = req.body.mail;
        const birthdat = req.body.birthdat;
        const direction = req.body.direction;
        const phone_number = req.body.phoneNumber;
        const occupation = req.body.occupation;
        const id_stratum = req.body.idStratum;
        const id_sisben = req.body.idSisben;
        const id_civil_status = req.body.idCivilStatus;
        const id_education_level = req.body.idEducationLevel;
        const id_city = req.body.idCity;
        const id_type_document = req.body.idTypeDocument;
        const numbers = req.body.numbers;
        const issued_in = req.body.issuedIn;
        const id_state_certificate = req.body.idStateCertificate;
        const photo = req.body.photo;
        const id_gender = req.body.idGender;
        const photo_fingerprint = req.body.photoFingerprint;
        const id_type_sanguineou = req.body.idTypeSanguineou;
        const date_tuition = req.body.dateTuition;
        const id_vehicle = req.body.idVehicle;
        const id_tuition = req.body.idTuition;
        const id_course = req.body.idCourse;
        const value_receipt = req.body.valueReceipt;
        const parameter = [first_name, second_name, first_last_name, second_last_name, mail, birthdat, direction, phone_number, occupation, id_type_document, numbers, issued_in, id_state_certificate, photo, photo_fingerprint, date_tuition, id_vehicle, id_tuition, id_course, id_stratum, id_sisben, id_civil_status, id_education_level, id_city, id_gender, id_type_sanguineou, value_receipt];
        PersonControllerCreate.createPerson(sql_create_1.SQL_PERSON_CREATE.CREATEPERSON, parameter, res);
    }
}
const personControllerCreate = new PersonControllerCreate();
exports.default = personControllerCreate;
