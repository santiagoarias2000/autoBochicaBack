import { Router } from 'express';
import sisbenControllerGet from '../controller/sisben/ToListController';
class SisbenRoutes{
    public routesApiSisben: Router;
    constructor(){
        this.routesApiSisben = Router();
        this.setting();
    }
    public setting(){
        this.routesApiSisben.get("/view", sisbenControllerGet.getMeSisben);
    }
}
const sisbenRoutes = new SisbenRoutes();
export default sisbenRoutes.routesApiSisben;