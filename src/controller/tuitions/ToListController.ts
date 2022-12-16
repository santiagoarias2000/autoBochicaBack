import { SQL_TUIYIONS_VIEW } from './../../repo/tuitions/sql_toList';
import { Request } from 'express';
import { Response } from 'express';
import TuitionsToList from '../../dao/tuitions/ToList';


class TuitionsControllerGet extends TuitionsToList{
    public getMeTuition(req: Request, res: Response): void{
        TuitionsControllerGet.getTuitions(SQL_TUIYIONS_VIEW.VIEW,[],res);
    }
}
const tuitionsControllerGet = new TuitionsControllerGet();
export default tuitionsControllerGet;