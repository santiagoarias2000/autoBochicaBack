"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const AdminRoutes_1 = __importDefault(require("../../routes/AdminRoutes"));
const StratumRoutes_1 = __importDefault(require("../../routes/StratumRoutes"));
const SisbenRoutes_1 = __importDefault(require("../../routes/SisbenRoutes"));
const CivilStatusroutes_1 = __importDefault(require("../../routes/CivilStatusroutes"));
const EducationLevelRoutes_1 = __importDefault(require("../../routes/EducationLevelRoutes"));
const cityRoutes_1 = __importDefault(require("../../routes/cityRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startSetting();
        this.activeRoute();
    }
    startSetting() {
        this.app.set("PORT", 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activeRoute() {
        this.app.use('/api/admin', AdminRoutes_1.default);
        this.app.use('/api/stratum', StratumRoutes_1.default);
        this.app.use('/api/sisben', SisbenRoutes_1.default);
        this.app.use('/api/civilstatus', CivilStatusroutes_1.default);
        this.app.use('/api/educationlevel', EducationLevelRoutes_1.default);
        this.app.use('/api/city', cityRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("It works", this.app.get("PORT"));
        });
    }
}
exports.default = Server;
