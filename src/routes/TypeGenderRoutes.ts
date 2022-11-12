import { Router } from "express";
import typeGenderContollerGet from "../controller/typeGender/ToListController";
class TypeGenderRoutes {
  public routesApiAdminstrator: Router;
  constructor() {
    this.routesApiAdminstrator = Router();
    this.setting();
  }
  public setting() {
    this.routesApiAdminstrator.get(
      "/view",
      typeGenderContollerGet.getMeTypeGender
    );
  }
}
const typeGenderRoutes = new TypeGenderRoutes();
export default typeGenderRoutes.routesApiAdminstrator;
