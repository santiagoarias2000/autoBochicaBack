import { Request } from 'express';
import { SQL_CIVILSTATUS_VIEW } from './../../repo/civilStatusRepo/sql_toList';
import { Response } from 'express';
import CivilStatusToList from "../../dao/civilStatus/ToList";

class CivilStatusControllerGet extends CivilStatusToList{
    public getMeCivilStatus(req: Request, res: Response): void{
        CivilStatusControllerGet.getCivilStatus(SQL_CIVILSTATUS_VIEW.VIEW,[],res);
    }
}
const civilStatusControllerGet = new CivilStatusControllerGet();
export default civilStatusControllerGet;