import { Response } from 'express';
import pool from "../../config/connetion/connectionDB";

class SisbenToList{

    public static async getSisben(sqlConsult:string, parameter:any,res:Response): Promise<any>{
        await pool.result(sqlConsult, parameter)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((myErr)=>{
            console.log('Error in getSisben(dao): ', myErr);
            res.status(400).json({respuesta:'No esta trabajando correctamente el DAO de estrato'})
            
        });
    }
}
export default SisbenToList;