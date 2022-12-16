import { Router } from "express";
import personControllerCreate from "../controller/person/CreateController";
import personControllerGet from "../controller/person/ToListController";


class PersonRoutes {
  public routesApiPerson: Router;
  constructor() {
    this.routesApiPerson = Router();
    this.setting();
  }
  public setting() {
    this.routesApiPerson.get(
      "/view",
      personControllerGet.getMePerson
    );
    this.routesApiPerson.post(
      "/create",
      personControllerCreate.createMePerson
    );
  }
}
const personRoutes = new PersonRoutes();
export default personRoutes.routesApiPerson;