import { Response } from 'express';
import pool from "../../config/connetion/connectionDB";


class OtherDataPersonCreate{
    public static async createOtherDataPerson( sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool.task(async consult => {            
                return await consult.one(sqlCreate, parameter);
        })
            .then((response) => {
                if (response?.id_other_person_data != 0) {
                    res.status(200).json({ answer: 'Create other data person', newCode: response?.id_other_person_data });
                } else {
                    res.status(402).json({ answer: 'Error create register it is repeated' })
                };
            })
            .catch((meErr) => {
                console.log('Error in daos: ', meErr);
                res.status(400).json({ answer: 'Error al crear la otra informacion del usuario.' });
            });
    } 
}
export default OtherDataPersonCreate;