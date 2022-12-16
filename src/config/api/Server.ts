import cors from "cors";
import morgan from "morgan";
import express from "express";
import StratumRoutes from "../../routes/StratumRoutes";
import SisbenRoutes from "../../routes/SisbenRoutes";
import CivilStatusroutes from "../../routes/CivilStatusroutes";
import EducationLevelRoutes from "../../routes/EducationLevelRoutes";
import cityRoutes from "../../routes/cityRoutes";
import TypeDocumentRoutes from "../../routes/TypeDocumentRoutes";
import TypeGenderRoutes from "../../routes/TypeGenderRoutes";
import TypeSanguinRoutes from "../../routes/TypeSanguinRoutes";
import safety from "../../middleware/Safety";
import PersonRoutes from "../../routes/PersonRoutes";
import userAccessRoutes from "../../routes/userAccessRoutes";
import RolesRoutes from "../../routes/RolesRoutes";
import UserRoutes from "../../routes/UserRoutes";
import VehiclesRoutes from "../../routes/VehiclesRoutes";
import CoursesRoutes from "../../routes/CoursesRoutes";
import TuitionsRoutes from "../../routes/TuitionsRoutes";
import StateCertificateRoutes from "../../routes/StateCertificateRoutes";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.startSetting();
    this.activeRoute();
  }

  public startSetting(): void {
    this.app.set("PORT", 3123);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public activeRoute(): void {
    this.app.use('/api/public', userAccessRoutes);
    this.app.use('/api/private/stratum', StratumRoutes);
    this.app.use('/api/private/stratum', StratumRoutes);
    this.app.use('/api/private/sisben', SisbenRoutes);
    this.app.use('/api/private/civilstatus', CivilStatusroutes);
    this.app.use('/api/private/educationlevel', EducationLevelRoutes);
    this.app.use('/api/private/city', cityRoutes);
    this.app.use('/api/private/typedocument', TypeDocumentRoutes);
    this.app.use('/api/private/typegender', TypeGenderRoutes);
    this.app.use('/api/private/typesanguineos', TypeSanguinRoutes);
    this.app.use('/api/private/person', PersonRoutes);
    this.app.use('/api/private/roles', RolesRoutes);
    this.app.use('/api/private/user', UserRoutes);
    this.app.use('/api/private/vehicles', VehiclesRoutes);
    this.app.use('/api/private/course', CoursesRoutes);
    this.app.use('/api/private/tuitions', TuitionsRoutes);
    this.app.use('/api/private/statecertificate', StateCertificateRoutes);
  }

  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("It works", this.app.get("PORT"));
    });
  }
}
export default Server;
