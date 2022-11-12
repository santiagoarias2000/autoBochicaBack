import { Request, Response } from "express";
import OtherDataPersonUpdate from "../../dao/otherDataPerson/Update";
import { SQL_OTHERDATA_UPDATE } from "../../repo/otherDataPersonRepo/sql_update";


class OtherDataPersonControllerUpdate extends OtherDataPersonUpdate {
    public updateOtherData(req: Request, res: Response): void {
        const code = req.body.theCode;
        const direction = req.body.direction;
        const phone_number = req.body.phoneNumber;
        const occupation= req.body.occupation;
        const id_stratum = req.body.idStratum
        const id_sisben = req.body.idSisben;
        const id_civil_status = req.body.idCivilStatus;
        const id_education_level = req.body.idEducationLevel;
        const id_city = req.body.idCity;
        const parameter = [code, direction, phone_number, occupation,id_stratum,id_sisben, id_civil_status,id_education_level,id_city];
        console.log(code);
        OtherDataPersonControllerUpdate.updateOtherDataPerson(SQL_OTHERDATA_UPDATE.UPDATE, parameter, res);
    }
}
const otherDataPersonControllerUpdate = new OtherDataPersonControllerUpdate();
export default otherDataPersonControllerUpdate;