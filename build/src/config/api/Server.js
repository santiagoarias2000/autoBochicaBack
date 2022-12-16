"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const StratumRoutes_1 = __importDefault(require("../../routes/StratumRoutes"));
const SisbenRoutes_1 = __importDefault(require("../../routes/SisbenRoutes"));
const CivilStatusroutes_1 = __importDefault(require("../../routes/CivilStatusroutes"));
const EducationLevelRoutes_1 = __importDefault(require("../../routes/EducationLevelRoutes"));
const cityRoutes_1 = __importDefault(require("../../routes/cityRoutes"));
const TypeDocumentRoutes_1 = __importDefault(require("../../routes/TypeDocumentRoutes"));
const TypeGenderRoutes_1 = __importDefault(require("../../routes/TypeGenderRoutes"));
const TypeSanguinRoutes_1 = __importDefault(require("../../routes/TypeSanguinRoutes"));
const PersonRoutes_1 = __importDefault(require("../../routes/PersonRoutes"));
const userAccessRoutes_1 = __importDefault(require("../../routes/userAccessRoutes"));
const RolesRoutes_1 = __importDefault(require("../../routes/RolesRoutes"));
const UserRoutes_1 = __importDefault(require("../../routes/UserRoutes"));
const VehiclesRoutes_1 = __importDefault(require("../../routes/VehiclesRoutes"));
const CoursesRoutes_1 = __importDefault(require("../../routes/CoursesRoutes"));
const TuitionsRoutes_1 = __importDefault(require("../../routes/TuitionsRoutes"));
const StateCertificateRoutes_1 = __importDefault(require("../../routes/StateCertificateRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startSetting();
        this.activeRoute();
    }
    startSetting() {
        this.app.set("PORT", 3123);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activeRoute() {
        this.app.use('/api/public', userAccessRoutes_1.default);
        this.app.use('/api/private/stratum', StratumRoutes_1.default);
        this.app.use('/api/private/stratum', StratumRoutes_1.default);
        this.app.use('/api/private/sisben', SisbenRoutes_1.default);
        this.app.use('/api/private/civilstatus', CivilStatusroutes_1.default);
        this.app.use('/api/private/educationlevel', EducationLevelRoutes_1.default);
        this.app.use('/api/private/city', cityRoutes_1.default);
        this.app.use('/api/private/typedocument', TypeDocumentRoutes_1.default);
        this.app.use('/api/private/typegender', TypeGenderRoutes_1.default);
        this.app.use('/api/private/typesanguineos', TypeSanguinRoutes_1.default);
        this.app.use('/api/private/person', PersonRoutes_1.default);
        this.app.use('/api/private/roles', RolesRoutes_1.default);
        this.app.use('/api/private/user', UserRoutes_1.default);
        this.app.use('/api/private/vehicles', VehiclesRoutes_1.default);
        this.app.use('/api/private/course', CoursesRoutes_1.default);
        this.app.use('/api/private/tuitions', TuitionsRoutes_1.default);
        this.app.use('/api/private/statecertificate', StateCertificateRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("It works", this.app.get("PORT"));
        });
    }
}
exports.default = Server;
