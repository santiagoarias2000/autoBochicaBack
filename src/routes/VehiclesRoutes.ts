import { Router } from 'express';
import vehiclesControllerCreate from '../controller/vehicle/CreateController';
import vehicleControllerDelete from '../controller/vehicle/DeleteContoller';
import vehicleControllerDetails from '../controller/vehicle/DetailsController';
import vehicleControllerGet from '../controller/vehicle/ToListController';
import vehicleControllerUpdate from '../controller/vehicle/UpdateController';

class VehiclesRoutes{
    public routesApiVehicles: Router;
    constructor(){
        this.routesApiVehicles = Router();
        this.setting();
    }
    public setting(){
        this.routesApiVehicles.get("/view", vehicleControllerGet.getMeVehicles);
        this.routesApiVehicles.post( "/create", vehiclesControllerCreate.createMeVehicle );
        this.routesApiVehicles.get( "/details/:idVehicle", vehicleControllerDetails.DetailsOne );
        this.routesApiVehicles.delete( "/delete/:idVehicle", vehicleControllerDelete.deleteVehicles );
        this.routesApiVehicles.put( "/update", vehicleControllerUpdate.updateVehicle );
    }

}
const vehiclesRoutes = new VehiclesRoutes();
export default vehiclesRoutes.routesApiVehicles;