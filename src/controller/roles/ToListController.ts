import { SQL_ROLE_VIEW } from './../../repo/roles/sql_role';

import { Request } from 'express';
import { Response } from 'express';
import RolesToList from '../../dao/roles/ToList';


class RolesControllerGet extends RolesToList{
    public getMeRoles(req: Request, res: Response): void{
        RolesControllerGet.getRoles(SQL_ROLE_VIEW.VIEW,[],res);
    }
}
const rolesControllerGet = new RolesControllerGet();
export default rolesControllerGet;