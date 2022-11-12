import { SQL_TYPEDOCUMEN_VIEW } from './../../repo/typeDocument/sql_toList';
import { Response, Request } from 'express';
import TypeDocumentToList from "../../dao/typeDocument/ToList";

class TypeDocumentGet extends TypeDocumentToList{
    public getMeTypeDocument(req: Request, res: Response):void{
        TypeDocumentGet.getTypeDocument(SQL_TYPEDOCUMEN_VIEW.VIEW,[],res);
    }
}
const typeDocumentGet= new TypeDocumentGet();
export default typeDocumentGet;