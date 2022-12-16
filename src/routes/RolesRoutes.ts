import { Router } from "express";
import rolesControllerGet from "../controller/roles/ToListController";
class RolesRoutes {
  public routesApiRoles: Router;
  constructor() {
    this.routesApiRoles = Router();
    this.setting();
  }
  public setting() {
    this.routesApiRoles.get("/view", rolesControllerGet.getMeRoles);
  }
}
const rolesRoutes = new RolesRoutes();
export default rolesRoutes.routesApiRoles;