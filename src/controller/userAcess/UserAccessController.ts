import { SQL_ACCESS_LOGIN } from './../../repo/usersAccess/sql_access_login';
import { Request, Response } from "express";
import UserAccessLogin from "../../dao/userAccess/UserAccessLogin";

class UserAccessController extends UserAccessLogin {


    public searchOneAccess(req: Request, res: Response): void {
        const mail_access = req.body.mail;
        const password_access = req.body.password;
        const parametro = [mail_access, password_access];
        UserAccessController.searchIdAccess(SQL_ACCESS_LOGIN.VALIDATELOGIN, parametro, res);

    }
}
const userAccessController = new UserAccessController();
export default userAccessController;