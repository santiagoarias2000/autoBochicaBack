import { Response } from 'express';
import pool from '../../config/connetion/connectionDB';

class TypeGenderToList{
    public static async getTypeGender(sqlConsult: string, parameter: any, res: Response): Promise<any>{
        await pool.result(sqlConsult, parameter)
        .then((result)=>{
            res.status(200).json(result.rows)
        })
        .catch((myErr)=>{
            console.log('Erro in daos', myErr);

        });
    }
}
export default TypeGenderToList;