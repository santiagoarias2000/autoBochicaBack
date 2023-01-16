"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_filterCertificate_1 = require("./../../repo/person/sql_filterCertificate");
const Filter_1 = __importDefault(require("../../dao/person/Filter"));
class PersonControllerFilter extends Filter_1.default {
    filterPersonCertificate(req, res) {
        PersonControllerFilter.getPerson(sql_filterCertificate_1.SQL_PERSON_FILTER.FILTERCERTIFICATE, [], res);
    }
    filterPersonNoCertificate(req, res) {
        PersonControllerFilter.getPerson(sql_filterCertificate_1.SQL_PERSON_FILTER.FILTERNOCERTIFICATE, [], res);
    }
}
const personControllerFilterC = new PersonControllerFilter();
exports.default = personControllerFilterC;
