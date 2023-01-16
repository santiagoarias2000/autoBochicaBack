"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateController_1 = __importDefault(require("../controller/person/CreateController"));
const DeleteController_1 = __importDefault(require("../controller/person/DeleteController"));
const DetailsController_1 = __importDefault(require("../controller/person/DetailsController"));
const FilterController_1 = __importDefault(require("../controller/person/FilterController"));
const ToListController_1 = __importDefault(require("../controller/person/ToListController"));
const UpdateController_1 = __importDefault(require("../controller/person/UpdateController"));
class PersonRoutes {
    constructor() {
        this.routesApiPerson = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiPerson.get("/view", ToListController_1.default.getMePerson);
        this.routesApiPerson.post("/create", CreateController_1.default.createMePerson);
        this.routesApiPerson.get("/details/:idPerson", DetailsController_1.default.DetailsOne);
        this.routesApiPerson.get("/filtercertificate", FilterController_1.default.filterPersonCertificate);
        this.routesApiPerson.get("/filternocertificate", FilterController_1.default.filterPersonNoCertificate);
        this.routesApiPerson.get("/detailsupdate/:idPerson", DetailsController_1.default.DetailsOneUpdate);
        this.routesApiPerson.delete("/delete/:idPerson", DeleteController_1.default.deletePerson);
        this.routesApiPerson.put("/update", UpdateController_1.default.updatePerson);
        //falta colocar el id
        // this.routesApiPerson.get( "/pdf",personControllerDetails.createPDF  );
    }
}
const personRoutes = new PersonRoutes();
exports.default = personRoutes.routesApiPerson;
