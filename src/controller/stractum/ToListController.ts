import { Request } from 'express';
import { Response } from 'express';
import { SQL_STRATUM_VIEW } from './../../repo/stratumRepo/sql_toList';
import ToListStractum from "../../dao/stractums/ToList";

class StratumControllerGet extends ToListStractum{
    public getMeStratum(req: Request, res: Response): void{
        StratumControllerGet.getStractum(SQL_STRATUM_VIEW.VIEW,[],res);
    }
}
const stratumControllerGet = new StratumControllerGet();
export default stratumControllerGet;