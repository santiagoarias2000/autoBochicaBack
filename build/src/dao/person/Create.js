"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionDB_1 = __importDefault(require("../../config/connetion/connectionDB"));
class PersonCreate {
    static createPerson(sqlCreate, parameter, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(parameter);
            yield connectionDB_1.default.task((consult) => __awaiter(this, void 0, void 0, function* () {
                return yield consult.one(sqlCreate, parameter);
            }))
                .then((response) => {
                if ((response === null || response === void 0 ? void 0 : response.id_person) != 0) {
                    res.status(200).json({ answer: 'Person', newCode: response === null || response === void 0 ? void 0 : response.id_person });
                }
                else {
                    res.status(402).json({ answer: 'Error create register it is repeated' });
                }
                ;
            })
                .catch((meErr) => {
                console.log('Error in daos: ', meErr);
                res.status(400).json({ answer: 'Error al crear la otra informacion del usuario.' });
            });
        });
    }
}
exports.default = PersonCreate;
