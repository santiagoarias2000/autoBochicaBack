import { Router } from "express";
import cityControllerGet from "../controller/city/ToListController";
class CityRoutes {
  public routesApiCity: Router;
  constructor() {
    this.routesApiCity = Router();
    this.setting();
  }
  public setting() {
    this.routesApiCity.get("/view", cityControllerGet.getMeCity);
  }
}
const cityRoutes = new CityRoutes();
export default cityRoutes.routesApiCity;
