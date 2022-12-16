import { SQL_VEHICLES_UPDATE } from './../../repo/vehicles/sql_update';
import { Response, Request } from "express";
import VehicleUpdate from "../../dao/vehicles/Update";


class VehicleControllerUpdate extends VehicleUpdate{
    public updateVehicle(req: Request, res: Response): void {
        const idVehicle = req.body.idVehicle;
        const type_vehicle = req.body.typeVehicle;
        const license_plate = req.body.licensePlate;
        const date_soat = req.body.dateSoat;
        const date_tecnomecanical = req.body.dateTecnomecanical;
        const parameter = [idVehicle, type_vehicle,license_plate,date_soat,date_tecnomecanical];
        VehicleControllerUpdate.updateVehicle(SQL_VEHICLES_UPDATE.UPDATE, parameter, res);
    }
}
const vehicleControllerUpdate = new VehicleControllerUpdate();
export default vehicleControllerUpdate;