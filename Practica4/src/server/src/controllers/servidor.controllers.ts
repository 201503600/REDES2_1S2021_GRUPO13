import { Request, Response } from 'express';
import {Reporte} from "../models/reporte";
import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, "../.env") });

class ServerController {
    public async newReport(req: Request, res: Response) {
        try {
            const newReport= new Reporte(req.body);
            
            newReport.servidor= process.env.CARNET;
            await newReport.save();
            return res.status(200).json({nombre: newReport.nombre, id:newReport.id, date:newReport.createdAt})
            
        } catch (error) {
            return res.status(500).json({
                msg: 'No se pudo crear el reporte',
            });
        }
    }

    public async getReport(req: Request, res: Response) {
        try {
            const reporte = await Reporte.findById({_id:req.params.id});
            res.status(200).json(reporte);
        } catch (error) {
            return res.status(500).json({
                msg:'El reporte '+req.params.id+' no existe'
            });
        }   
    }

    public async getReports(req: Request, res: Response) {
        try {
            const reporte = await Reporte.find();
            res.status(200).json(reporte);
        } catch (error) {
            return res.status(500).json({
                msg:'Error en la busqueda'
            });
        }
        
    }


}

export const serverController = new ServerController();


