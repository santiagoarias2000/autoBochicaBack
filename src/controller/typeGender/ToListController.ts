import { SQL_TYPEGENDER_VIEW } from './../../repo/typeGender/sql_toList';
import { Response } from 'express';
import { Request } from 'express';
import TypeGenderToList from "../../dao/typeGender/ToList";

class TypeGenderControllerGet extends TypeGenderToList{
    public getMeTypeGender(req:Request, res: Response):void{
        TypeGenderControllerGet.getTypeGender(SQL_TYPEGENDER_VIEW.VIEW,[],res);
    }
}
const typeGenderContollerGet = new TypeGenderControllerGet();
export default typeGenderContollerGet;