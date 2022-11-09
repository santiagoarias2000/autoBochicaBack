import { Request } from 'express';
import { Response } from 'express';
import SisbenToList from "../../dao/sisben/ToList";
import { SQL_SISBEN_VIEW } from '../../repo/sisbenRepo/sql_toList';

class SisbenControllerGet extends SisbenToList{
    public getMeSisben(req: Request, res: Response): void{
        SisbenControllerGet.getSisben(SQL_SISBEN_VIEW.VIEW,[],res);
    }
}
const sisbenControllerGet = new SisbenControllerGet();
export default sisbenControllerGet;