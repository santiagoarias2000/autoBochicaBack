"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ADMIN_CREATE = void 0;
exports.SQL_ADMIN_CREATE = {
    CREATE: "INSERT INTO administrator(user_admin, password_admin) \
VALUES ($1,$2) \
RETURNING id_admin;",
    CONFIRM: "SELECT COUNT(AD.user_admin) AS amount \
FROM administrator AD \
WHERE (AD.user_admin) = lower($1)",
};
