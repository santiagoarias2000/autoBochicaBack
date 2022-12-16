import { Response } from 'express';
import pool from "../../config/connetion/connectionDB";


class PersonCreate{
    public static async createPerson( sqlCreate: string, parameter: any, res: Response): Promise<any> {
        console.log(parameter);
        
        await pool.task(async consult => {            
                return await consult.one(sqlCreate, parameter);
        })
            .then((response) => {
                if (response?.id_person != 0) {
                    res.status(200).json({ answer: 'Person', newCode: response?.id_person });
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
export default PersonCreate;