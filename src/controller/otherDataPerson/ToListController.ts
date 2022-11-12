import { SQL_OTHERDATA_VIEW } from './../../repo/otherDataPersonRepo/sql_toList';
import { Response } from 'express';
import { Request } from 'express';
import OtherDataToList from "../../dao/otherDataPerson/ToList"

class OtherDataControllerGet extends OtherDataToList{
    public getMeOtherData(req:Request, res: Response): void{
        OtherDataControllerGet.getOtherData(SQL_OTHERDATA_VIEW.VIEW,[],res);
    }
}
const otherDataControllerGet = new OtherDataControllerGet();
export default otherDataControllerGet;