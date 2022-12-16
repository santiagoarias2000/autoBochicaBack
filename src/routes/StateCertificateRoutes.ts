import { Router } from "express";
import stateCertificateControllerGet from "../controller/stateCertificate/ToListController";


class StatusCertificateRoutes {
  public routesApiStatusCertificate: Router;
  constructor() {
    this.routesApiStatusCertificate = Router();
    this.setting();
  }
  public setting() {
    this.routesApiStatusCertificate.get(
      "/view",
      stateCertificateControllerGet.getMeStateCerfiticate
    );
  }
}
const statusCertificateRoutes = new StatusCertificateRoutes();
export default statusCertificateRoutes.routesApiStatusCertificate;
