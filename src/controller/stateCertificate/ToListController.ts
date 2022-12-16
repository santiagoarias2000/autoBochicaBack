import { SQL_STATECERTIFICATE_VIEW } from './../../repo/stateCertificate/sql_toList';
import { Request } from 'express';
import { Response } from 'express';
import StateCertificateToList from '../../dao/stateCertificate/ToList';


class StateCertificateControllerGet extends StateCertificateToList{
    public getMeStateCerfiticate(req: Request, res: Response): void{
        StateCertificateControllerGet.getStateCertificate(SQL_STATECERTIFICATE_VIEW.VIEW,[],res);
    }
}
const stateCertificateControllerGet = new StateCertificateControllerGet();
export default stateCertificateControllerGet;