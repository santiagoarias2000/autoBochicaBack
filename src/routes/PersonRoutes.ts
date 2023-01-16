import { Router } from "express";
import personControllerCreate from "../controller/person/CreateController";
import personControllerDelete from "../controller/person/DeleteController";
import personControllerDetails from "../controller/person/DetailsController";
import personControllerFilterC from "../controller/person/FilterController";
import personControllerGet from "../controller/person/ToListController";
import personControllerUpdate from "../controller/person/UpdateController";

class PersonRoutes {
  public routesApiPerson: Router;
  constructor() {
    this.routesApiPerson = Router();
    this.setting();
  }
  public setting() {
    this.routesApiPerson.get("/view", personControllerGet.getMePerson);
    this.routesApiPerson.post("/create", personControllerCreate.createMePerson);
    this.routesApiPerson.get( "/details/:idPerson", personControllerDetails.DetailsOne );
    this.routesApiPerson.get( "/filtercertificate", personControllerFilterC.filterPersonCertificate );
    this.routesApiPerson.get( "/filternocertificate", personControllerFilterC.filterPersonNoCertificate );
    this.routesApiPerson.get( "/detailsupdate/:idPerson", personControllerDetails.DetailsOneUpdate );
    this.routesApiPerson.delete( "/delete/:idPerson", personControllerDelete.deletePerson );
    this.routesApiPerson.put( "/update", personControllerUpdate.updatePerson );
    //falta colocar el id
    // this.routesApiPerson.get( "/pdf",personControllerDetails.createPDF  );
  }
}
const personRoutes = new PersonRoutes();
export default personRoutes.routesApiPerson;
