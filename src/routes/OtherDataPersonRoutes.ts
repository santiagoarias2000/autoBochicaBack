import { Router } from "express";
import otherDataPersonControllerCreate from "../controller/otherDataPerson/CreateController";
import otherDataControllerDelete from "../controller/otherDataPerson/DeleteController";
import otherDataControllerGet from "../controller/otherDataPerson/ToListController";
import otherDataPersonControllerUpdate from "../controller/otherDataPerson/UpdateController";
class OtherDataPersonRoutes {
  public routesApiOtherDataPerson: Router;
  constructor() {
    this.routesApiOtherDataPerson = Router();
    this.setting();
  }
  public setting() {
    this.routesApiOtherDataPerson.get(
      "/view",
      otherDataControllerGet.getMeOtherData
    );
    this.routesApiOtherDataPerson.post(
      "/create",
      otherDataPersonControllerCreate.createMeOtherData
    );
    this.routesApiOtherDataPerson.delete(
      "/delete/:theCode",
      otherDataControllerDelete.deleteOPD
    );
    this.routesApiOtherDataPerson.put(
      "/update",
      otherDataPersonControllerUpdate.updateOtherData
    );
  }
}
const otherDataPersonRoutes = new OtherDataPersonRoutes();
export default otherDataPersonRoutes.routesApiOtherDataPerson;
