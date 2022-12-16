import { Response } from 'express';
import pool from '../../config/connetion/connectionDB';
class CourseToList{
    public static async getCourse(sqlConsult: string, parameter:any, res: Response): Promise<any>{
        await pool.result(sqlConsult, parameter)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((myErr)=>{
            console.log('Error in daos: ', myErr);
            res.status(400).json({respuesta:'No esta trabajando el daos en course'});
        });
    }
}
export default CourseToList;