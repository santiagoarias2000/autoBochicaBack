import { Response } from "express";
import pool from "../../config/connetion/connectionDB";


class OtherDataPersonUpdate {
    public static async updateOtherDataPerson(sqlUpdate: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const dato = await consulta.result(sqlUpdate, paramentros);
            console.log(dato.rows);
        })
            .then((answer) => {

                
                console.log(answer);
                res.status(200).json({ answer: 'Se actualizo la informacion del usuario', });
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ answers: 'Error for OtherDataPersonUpdate' });

            });
    }
}
export default OtherDataPersonUpdate;