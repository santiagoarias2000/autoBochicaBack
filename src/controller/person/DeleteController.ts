import { SQL_PERSON_DELETE } from './../../repo/person/sql_delete';
import { Request, Response } from "express";
import PersonDelete from "../../dao/person/Delete";



class PersonControllerDelete extends PersonDelete {
    public deletePerson(req: Request, res: Response): void{
        const id_person = req.params.idPerson;
        const parametro = [id_person];
        PersonControllerDelete.deleteById(SQL_PERSON_DELETE.DELETE,parametro, res);
    }
}
const personControllerDelete = new PersonControllerDelete();
export default personControllerDelete;