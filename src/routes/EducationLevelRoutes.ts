import { Router } from "express";
import educLevelControllerGet from "../controller/educationLevel/ToListController";

class EducationLevelRoutes {
  public routesApiEducationLevel: Router;
  constructor() {
    this.routesApiEducationLevel = Router();
    this.setting();
  }
  public setting() {
    this.routesApiEducationLevel.get(
      "/view",
      educLevelControllerGet.getMeEducLevel
    );
  }
}
const educacionlevelRoutes = new EducationLevelRoutes();
export default educacionlevelRoutes.routesApiEducationLevel;
