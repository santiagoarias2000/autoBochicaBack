import { Response } from 'express';
import pool from '../../config/connetion/connectionDB';
class CityToList{
    public static async getCity(sqlConsult:string, parameter: any, res: Response): Promise<any>{
        await pool.result(sqlConsult, parameter)
        .then((result)=>{
            res.status(200).json(result.rows)
        }).catch((myErr)=>{
            console.log('Error in daos: ', myErr);
            res.status(400).json({respuesta: 'No esta trabajando el dao de ciudades'});
        });
    }
}
export default CityToList;