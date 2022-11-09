import cors from "cors";
import morgan from "morgan";
import express from "express";
import AdminRoutes from "../../routes/AdminRoutes";
import StratumRoutes from "../../routes/StratumRoutes";
import SisbenRoutes from "../../routes/SisbenRoutes";
import CivilStatusroutes from "../../routes/CivilStatusroutes";
import EducationLevelRoutes from "../../routes/EducationLevelRoutes";
import cityRoutes from "../../routes/cityRoutes";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.startSetting();
    this.activeRoute();
  }

  public startSetting(): void {
    this.app.set("PORT", 8088);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public activeRoute(): void {
    this.app.use('/api/admin', AdminRoutes);
    this.app.use('/api/stratum', StratumRoutes);
    this.app.use('/api/sisben', SisbenRoutes);
    this.app.use('/api/civilstatus', CivilStatusroutes);
    this.app.use('/api/educationlevel', EducationLevelRoutes);
    this.app.use('/api/city', cityRoutes);
  }

  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("It works", this.app.get("PORT"));
    });
  }
}
export default Server;
