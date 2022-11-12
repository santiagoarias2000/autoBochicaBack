import { Response } from 'express';
import pool from '../../config/connetion/connectionDB';
class OtherDataToList{
    public static async getOtherData(sqlConsult: string, parameter: any, res: Response): Promise<any>{
        await pool.result(sqlConsult, parameter)
        .then((result)=>{
            res.status(200).json(result.rows)
        })
        .catch((myErr)=>{
            console.log('Error in daos', myErr);
            res.status(400).json({respuesta: 'No esta trabajando: otherDataDaosToList'})
        });
    }
}
export default OtherDataToList;