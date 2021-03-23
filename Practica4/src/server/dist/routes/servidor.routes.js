"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servidor_controllers_1 = require("../controllers/servidor.controllers");
class ServerRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', servidor_controllers_1.serverController.getReports);
        this.router.get('/:id', servidor_controllers_1.serverController.getReport)
            .post('/', servidor_controllers_1.serverController.newReport);
    }
    getRouter() {
        return this.router;
    }
}
const serverRouter = new ServerRoute();
exports.default = serverRouter.getRouter();
