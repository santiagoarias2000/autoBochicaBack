import { SQL_EDUCLEVEL_VIEW } from './../../repo/educacionlevelRepo/sql_toList';
import { Response } from 'express';
import { Request } from 'express';
import EducactionLevelToList from "../../dao/educationLevel/ToList";

class EducLevelControllerGet extends EducactionLevelToList{
    public getMeEducLevel(req: Request, res: Response):void{
        EducLevelControllerGet.getEduLevel(SQL_EDUCLEVEL_VIEW.VIEW,[],res);
    }
}
const educLevelControllerGet = new EducLevelControllerGet();
export default educLevelControllerGet;