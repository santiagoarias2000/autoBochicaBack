import { Router } from 'express';
import tuitionsControllerGet from '../controller/tuitions/ToListController';

class TuitionsRoutes{
    public routesApiTiution: Router;
    constructor(){
        this.routesApiTiution = Router();
        this.setting();
    }
    public setting(){
        this.routesApiTiution.get("/view", tuitionsControllerGet.getMeTuition);
    }
}
const tuitionsRoutes = new TuitionsRoutes();
export default tuitionsRoutes.routesApiTiution;