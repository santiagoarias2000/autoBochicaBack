import { Response } from 'express';
import pool from "../../config/connetion/connectionDB";


class VehiclesCreate{
    public static async createVehicles( sqlCreate: string, parameter: any, res: Response): Promise<any> {
        console.log(parameter);
        
        await pool.task(async consult => {            
                return await consult.one(sqlCreate, parameter);
        })
            .then((response) => {
                if (response?.id_vehicle != 0) {
                    res.status(200).json({ answer: 'Vehicles', newCode: response?.id_vehicle });
                } else {
                    res.status(402).json({ answer: 'Error create register it is repeated' })
                };
            })
            .catch((meErr) => {
                console.log('Error in daos: ', meErr);
                res.status(400).json({ answer: 'Error al crear la otra informacion del vehiculo.' });
            });
    } 
}
export default VehiclesCreate;