"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_IDENTIFICATION_LIST = void 0;
exports.SQL_IDENTIFICATION_LIST = {
    VIEW: "select idn.id_identifications, idn.numbers,idn.issued_in, td.type_document  from identifications idn, types_documents td where idn.id_type_document = td.id_type_document"
};
