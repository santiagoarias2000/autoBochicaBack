import { SQL_OTHERDATA_DELETE } from './../../repo/otherDataPersonRepo/sql _delete';
import { Request, Response } from "express";
import OtherDataDelete from "../../dao/otherDataPerson/Delete ";


class OtherDataControllerDelete extends OtherDataDelete{
    public deleteOPD(req: Request, res: Response): void{
        const code = req.params.theCode;
        const parametro = [code];
        OtherDataControllerDelete.deleteById(SQL_OTHERDATA_DELETE.DELETE,parametro, res);
    }
}
const otherDataControllerDelete = new OtherDataControllerDelete();
export default otherDataControllerDelete;