"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporte = void 0;
const { Schema, model } = require("mongoose");
const reporteSchema = Schema({
    carnet: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    detalle: {
        type: String,
        required: true
    },
    servidor: {
        type: String,
        required: true
    },
    servidoractual: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
    versionKey: false
});
const Reporte = model('Reporte', reporteSchema);
exports.Reporte = Reporte;
