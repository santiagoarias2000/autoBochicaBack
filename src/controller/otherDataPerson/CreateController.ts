import { SQL_OTHERDATA_CREATE } from './../../repo/otherDataPersonRepo/sql_create';
import { Request, Response } from "express";
import OtherDataPersonCreate from "../../dao/otherDataPerson/create";


class OtherDataPersonControllerCreate extends OtherDataPersonCreate {
    public createMeOtherData(req: Request, res: Response): void {
        const direction = req.body.direction;
        const phone_number = req.body.phoneNumber;
        const occupation= req.body.occupation;
        const id_stratum = req.body.idStratum
        const id_sisben = req.body.idSisben;
        const id_civil_status = req.body.idCivilStatus;
        const id_education_level = req.body.idEducationLevel;
        const id_city = req.body.idCity;
        const parameter = [direction, phone_number, occupation,id_stratum,id_sisben, id_civil_status,id_education_level,id_city];

        OtherDataPersonControllerCreate.createOtherDataPerson(SQL_OTHERDATA_CREATE.CREATE, parameter, res);
    }
}
const otherDataPersonControllerCreate = new OtherDataPersonControllerCreate();
export default otherDataPersonControllerCreate;