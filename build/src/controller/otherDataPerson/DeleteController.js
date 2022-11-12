"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql__delete_1 = require("./../../repo/otherDataPersonRepo/sql _delete");
const Delete_1 = __importDefault(require("../../dao/otherDataPerson/Delete "));
class OtherDataControllerDelete extends Delete_1.default {
    deleteOPD(req, res) {
        const code = req.params.theCode;
        const parametro = [code];
        OtherDataControllerDelete.deleteById(sql__delete_1.SQL_OTHERDATA_DELETE.DELETE, parametro, res);
    }
}
const otherDataControllerDelete = new OtherDataControllerDelete();
exports.default = otherDataControllerDelete;
