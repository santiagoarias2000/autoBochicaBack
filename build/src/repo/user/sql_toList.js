"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_USER_VIEW = void 0;
exports.SQL_USER_VIEW = {
    VIEW: "select re.name_rol from roles re inner join users ur on re.id_rol = ur.id_rol "
};
