import { Router } from "express";
import stratumControllerGet from "../controller/stractum/ToListController";

class StratumRoutes {
  public routesApiStratum: Router;
  constructor() {
    this.routesApiStratum = Router();
    this.setting();
  }

  public setting() {
    this.routesApiStratum.get("/view", stratumControllerGet.getMeStratum);
  }
}
const stratumRoutes = new StratumRoutes();
export default stratumRoutes.routesApiStratum;
