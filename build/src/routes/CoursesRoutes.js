"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/course/ToListController"));
class CoursesRoutes {
    constructor() {
        this.routesApiCourse = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiCourse.get("/view", ToListController_1.default.getMeCourse);
    }
}
const coursesRoutes = new CoursesRoutes();
exports.default = coursesRoutes.routesApiCourse;
