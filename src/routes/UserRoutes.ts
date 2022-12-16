import { Router } from "express";
import userControllerGet from "../controller/user/ToListController";

class UserRoutes {
  public routesApiUser: Router;
  constructor() {
    this.routesApiUser = Router();
    this.setting();
  }
  public setting() {
    this.routesApiUser.get("/view", userControllerGet.getMeUser);
  }
}
const userRoutes = new UserRoutes();
export default userRoutes.routesApiUser;