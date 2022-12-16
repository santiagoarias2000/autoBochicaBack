"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_IDENTIFICATION_CREATE = void 0;
exports.SQL_IDENTIFICATION_CREATE = {
    CREATE: "insert into identifications(numbers, issued_in,id_type_document) values($1,$2,$3) RETURNING id_identifications"
};
