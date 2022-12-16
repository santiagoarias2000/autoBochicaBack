"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CHECK_ADMIN = void 0;
exports.SQL_CHECK_ADMIN = {
    CHECK: "Select COUNT(admi.user_admin) \
    from administrator admi \
     where (admi.user_admin) = lower('admin')\
     and (admi.password_admin) = ('admin') \
     RETURNIG id_administrator"
};
