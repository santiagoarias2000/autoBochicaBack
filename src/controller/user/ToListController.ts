import { Request } from 'express';
import { Response } from 'express';
import UserToList from '../../dao/user/ToList';
import { SQL_USER_VIEW } from '../../repo/user/sql_toList';


class UserControllerGet extends UserToList{
    public getMeUser(req: Request, res: Response): void{
        UserControllerGet.getUser(SQL_USER_VIEW.VIEW,[],res);
    }
}
const userControllerGet = new UserControllerGet();
export default userControllerGet;