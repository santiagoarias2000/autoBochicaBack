import { SQL_CITY_VIEW } from './../../repo/cityRepo/sql_ToList';
import { Response } from 'express';
import { Request } from 'express';
import CityToList from "../../dao/city/ToList";

class CityControllerGet extends CityToList{
    public getMeCity(req: Request, res: Response): void{
        CityControllerGet.getCity(SQL_CITY_VIEW.VIEW,[],res);
    }
}
const cityControllerGet = new CityControllerGet();
export default cityControllerGet;