import { Router } from "express";
import administratorControllerGet from "../controller/administrator/ToListController";

class AdministratorRoutes {
  public routesApiAdministrator: Router;
  constructor() {
    this.routesApiAdministrator = Router();
    this.setting();
  }
  public setting() {
    this.routesApiAdministrator.get(
      "/view",
      administratorControllerGet.getMeAdministrator
    );
  }
}
const administratorRoutes = new AdministratorRoutes();
export default administratorRoutes.routesApiAdministrator;
