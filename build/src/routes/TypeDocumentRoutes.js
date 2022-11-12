"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/typeDocument/ToListController"));
class TypeDocumentRoutes {
    constructor() {
        this.routesApiTypeDocument = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiTypeDocument.get("/view", ToListController_1.default.getMeTypeDocument);
    }
}
const typeDocumentRoutes = new TypeDocumentRoutes();
exports.default = typeDocumentRoutes.routesApiTypeDocument;
