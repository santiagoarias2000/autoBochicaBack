import { Response } from 'express';
import pool from '../../config/connetion/connectionDB';
class TypeSanguineuosToList{
    public static async getTypeSangui(sqlConsult: string, parameter: any, res: Response):Promise<any>{
        await pool.result(sqlConsult, parameter)
        .then((result)=>{
            res.status(200).json(result.rows)
        })
        .catch((myErr)=>{
            console.log('Error in daos', myErr);
            res.status(400).json({respuesta: 'no esta trabajando: typesanguiDao'})
        });
    }
}
export default TypeSanguineuosToList;