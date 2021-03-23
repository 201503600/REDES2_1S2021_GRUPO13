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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverController = void 0;
const reporte_1 = require("../models/reporte");
const path_1 = require("path");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.resolve(__dirname, "../.env") });
class ServerController {
    newReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newReport = new reporte_1.Reporte(req.body);
                newReport.servidor = process.env.CARNET_1;
                yield newReport.save();
                return res.status(200).json({ nombre: newReport.nombre, id: newReport.id, date: newReport.createdAt });
            }
            catch (error) {
                return res.status(500).json({
                    msg: 'No se pudo crear el reporte',
                });
            }
        });
    }
    getReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reporte = yield reporte_1.Reporte.findById({ _id: req.params.id });
                res.status(200).json(reporte);
            }
            catch (error) {
                return res.status(500).json({
                    msg: 'El reporte ' + req.params.id + ' no existe'
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
