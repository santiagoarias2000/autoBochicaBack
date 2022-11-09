import { Response } from 'express';
import pool from "../../config/connetion/connectionDB";

class ToListStractum{

    public static async getStractum(sqlConsult:string, parameter: any, res: Response): Promise<any>{
        await pool.result(sqlConsult, parameter)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((myErr)=>{
            console.log('Error in daos GetStractum: ', myErr);
            res.status(400).json({respuesta:'No esta trabajando correctamente el DAO de estrato'})
            
        });
    }
}
export default ToListStractum;