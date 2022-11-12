import { Router } from "express";
import typeDocumentGet from "../controller/typeDocument/ToListController";
class TypeDocumentRoutes {
  public routesApiTypeDocument: Router;
  constructor() {
    this.routesApiTypeDocument = Router();
    this.setting();
  }
  public setting() {
    this.routesApiTypeDocument.get("/view", typeDocumentGet.getMeTypeDocument);
  }
}

const typeDocumentRoutes = new TypeDocumentRoutes();
export default typeDocumentRoutes.routesApiTypeDocument;
