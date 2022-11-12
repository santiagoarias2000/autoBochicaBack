import { SQL_TYPESANGU_VIEW } from './../../repo/typeSanguineous/sql_toList';
import { Response } from 'express';
import { SQL_TYPEGENDER_VIEW } from './../../repo/typeGender/sql_toList';
import { Request } from 'express';
import TypeSanguineuosToList from "../../dao/typeSangui/ToList";

class TypeSanguiContollerGet extends TypeSanguineuosToList{
    public getMeTypeSangui(req: Request, res: Response){
        TypeSanguiContollerGet.getTypeSangui(SQL_TYPESANGU_VIEW.VIEW,[],res);
    }
}
const typeSanguiContollerGet = new TypeSanguiContollerGet();
export default typeSanguiContollerGet;