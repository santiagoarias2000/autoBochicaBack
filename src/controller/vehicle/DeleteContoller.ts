import { Request, Response } from "express";
import VehicleDelete from "../../dao/vehicles/Detele";
import { SQL_VEHICLES_DELETE } from "../../repo/vehicles/sql_delete";


class VehicleControllerDelete extends VehicleDelete{
    public deleteCustomer(req: Request, res: Response): void{
        const id_vehicle = req.params.idVehicle;
        const parametro = [id_vehicle];
        VehicleControllerDelete.deleteById(SQL_VEHICLES_DELETE.DELETE,parametro, res);
    }
}
const vehicleControllerDelete = new VehicleControllerDelete();
export default vehicleControllerDelete;