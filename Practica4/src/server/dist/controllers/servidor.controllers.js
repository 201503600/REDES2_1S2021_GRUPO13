"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverController = void 0;
const reporte_1 = require("../models/reporte");
class ServerController {
    newReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newReport = new reporte_1.Reporte(req.body);
                newReport.servidor = process.env.CARNET;
                yield newReport.save();
                return res.status(200).json({ nombre: newReport.nombre, id: newReport.id, date: newReport.createdAt });
            }
            catch (error) {
                return res.status(500).json({
                    error,
                });
            }
        });
    }
    getReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reporte = yield reporte_1.Reporte.findById({ _id: req.params.id });
                reporte.servidoractual = process.env.CARNET;
                res.status(200).json(reporte);
            }
            catch (error) {
                return res.status(500).json({
                    error
                });
            }
        });
    }
    getReports(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reporte = yield reporte_1.Reporte.find();
                res.status(200).json(reporte);
            }
            catch (error) {
                return res.status(500).json({
                    msg: 'Error en la busqueda'
                });
            }
        });
    }
}
exports.serverController = new ServerController();
