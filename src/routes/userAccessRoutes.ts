import { Router } from "express";
import userAccessController from "../controller/userAcess/UserAccessController";

class AccessRoutes {
    public routesAccessApi: Router;
    constructor() {
        this.routesAccessApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.routesAccessApi.post('/login',userAccessController.searchOneAccess);
    }
}

const accessRoutes = new AccessRoutes();
export default accessRoutes.routesAccessApi;