import { Response } from "express";
import pool from "../../config/connetion/connectionDB";
import PDF from "pdfkit";

class PersonDetails{
    protected static async detailsById(sqlSearch: string, params: any, res: Response): Promise<any> {
        await pool.one(sqlSearch, params)
            .then((dato)=>{
                return res.status(200).json(dato);
            })
            .catch((miError)=>{
                console.log(miError);
                return res.status(400).json({answer: 'Error search from PersonDetails'});
            });
    }
}
export default PersonDetails;