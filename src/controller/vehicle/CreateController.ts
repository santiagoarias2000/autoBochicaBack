import { SQL_VEHICLES_CREATE } from '../../repo/vehicles/sql_create';
import { Request, Response } from "express";
import VehiclesCreate from '../../dao/vehicles/Create';

class VehiclesControllerCreate extends VehiclesCreate {
  public createMeVehicle(req: Request, res: Response): void {
    const type_vehicle = req.body.typeVehicle;
    const license_plate = req.body.licensePlate;
    const date_soat = req.body.dateSoat;
    const date_tecnomecanical = req.body.dateTecnomecanical;
    const parameter = [type_vehicle, license_plate, date_soat,date_tecnomecanical ];

    VehiclesControllerCreate.createVehicles(
      SQL_VEHICLES_CREATE.CREATE,
      parameter,
      res
    );
  }
}
const vehiclesControllerCreate = new VehiclesControllerCreate();
export default vehiclesControllerCreate;