import { Router } from "express";
import civilStatusControllerGet from "../controller/civilStatus/ToListController";
class CivilStatusRoutes {
  public routesApiCivilStatus: Router;
  constructor() {
    this.routesApiCivilStatus = Router();
    this.setting();
  }
  public setting() {
    this.routesApiCivilStatus.get(
      "/view",
      civilStatusControllerGet.getMeCivilStatus
    );
  }
}
const civilStatusRoutes = new CivilStatusRoutes();
export default civilStatusRoutes.routesApiCivilStatus;
