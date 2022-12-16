"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_create_1 = require("./../../repo/identication/sql_create");
const Create_1 = __importDefault(require("../../dao/identification/Create"));
class IdentificationControllerCreate extends Create_1.default {
    createMeIdentification(req, res) {
        const numbers = req.body.numbers;
        const issued_in = req.body.issuedIn;
        const id_type_document = req.body.typeDocument;
        console.log(id_type_document);
        const parameter = [numbers, issued_in, id_type_document];
        IdentificationControllerCreate.createIdentification(sql_create_1.SQL_IDENTIFICATION_CREATE.CREATE, parameter, res);
    }
}
const identificationControllerCreate = new IdentificationControllerCreate();
exports.default = identificationControllerCreate;
