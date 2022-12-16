import { SQL_PERSON_CREATE } from './../../repo/person/sql_create';
import { Request, Response } from "express";
import PersonCreate from "../../dao/person/Create";

class PersonControllerCreate extends PersonCreate {
  public createMePerson(req: Request, res: Response): void {
    const first_name = req.body.firstName;
    const second_name = req.body.secondName;
    const first_last_name = req.body.firstLastName;
    const second_last_name = req.body.secondLastName;
    const mail = req.body.mail;
    const birthdat = req.body.birthdat;
    const direction = req.body.direction;
    const phone_number = req.body.phoneNumber;
    const occupation = req.body.occupation;
    const id_stratum = req.body.idStratum;
    const id_sisben = req.body.idSisben;
    const id_civil_status = req.body.idCivilStatus;
    const id_education_level = req.body.idEducationLevel;
    const id_city = req.body.idCity;
    const id_identification = req.body.idIdentification
    const id_gender = req.body.idGender;
    const id_type_sanguineou = req.body.idTypeSanguineou;
    const parameter = [first_name, second_name, first_last_name,second_last_name,mail,birthdat,direction,phone_number,occupation,id_stratum,id_sisben,id_civil_status,id_education_level,id_city,id_identification,id_gender,id_type_sanguineou ];

    PersonControllerCreate.createPerson(
      SQL_PERSON_CREATE.CREATEPERSON,
      parameter,
      res
    );
  }
}
const personControllerCreate = new PersonControllerCreate();
export default personControllerCreate;