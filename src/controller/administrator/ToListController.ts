import { Request, Response } from "express";
import AdministratorToList from "../../dao/administrator/ToList";
import { SQL_ADMIN_VIEW } from "../../repo/admiRepo/sql_toList";



class AdministratorControllerGet extends AdministratorToList{
    public getMeAdministrator(req: Request, res: Response): void{
        AdministratorControllerGet.getAdministrator(SQL_ADMIN_VIEW.VIEW, [], res);
    } 
}
const administratorControllerGet = new AdministratorControllerGet();
export default administratorControllerGet;