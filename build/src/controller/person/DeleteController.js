"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_delete_1 = require("./../../repo/person/sql_delete");
const Delete_1 = __importDefault(require("../../dao/person/Delete"));
class PersonControllerDelete extends Delete_1.default {
    deletePerson(req, res) {
        const id_person = req.params.idPerson;
        const parametro = [id_person];
        PersonControllerDelete.deleteById(sql_delete_1.SQL_PERSON_DELETE.DELETE, parametro, res);
    }
}
const personControllerDelete = new PersonControllerDelete();
exports.default = personControllerDelete;
