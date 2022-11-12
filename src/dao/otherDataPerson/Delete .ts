import { Response } from "express";
import pool from "../../config/connetion/connectionDB";


class OtherDataDelete {
    protected static async deleteById(sqlSearch: string, params: any, res: Response): Promise<any> {
        await pool.result(sqlSearch, params)
            .then((dato)=>{
                console.log(dato);
                return res.status(200).json({answer:  dato.rowCount, msg: 'Eliminado con exito.'});
            })
            .catch((miError)=>{
                console.log(miError);
                return res.status(400).json({answer: 'Error a la en el daos'});
            });
    }
}
export default OtherDataDelete;