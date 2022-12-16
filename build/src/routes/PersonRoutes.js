"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateController_1 = __importDefault(require("../controller/person/CreateController"));
const ToListController_1 = __importDefault(require("../controller/person/ToListController"));
class PersonRoutes {
    constructor() {
        this.routesApiPerson = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiPerson.get("/view", ToListController_1.default.getMePerson);
        this.routesApiPerson.post("/create", CreateController_1.default.createMePerson);
    }
}
const personRoutes = new PersonRoutes();
exports.default = personRoutes.routesApiPerson;
