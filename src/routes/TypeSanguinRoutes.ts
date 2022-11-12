import { Router } from "express";
import typeSanguiContollerGet from "../controller/typeSangui/ToListContoller";
class TypeSanguinRoutes {
  public routesApiTypeSangui: Router;
  constructor() {
    this.routesApiTypeSangui = Router();
    this.setting();
  }
  public setting() {
    this.routesApiTypeSangui.get(
      "/view",
      typeSanguiContollerGet.getMeTypeSangui
    );
  }
}
const typeSanguinRoutes = new TypeSanguinRoutes();
export default typeSanguinRoutes.routesApiTypeSangui;
