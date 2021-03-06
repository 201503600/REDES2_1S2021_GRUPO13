import { Request, Response } from 'express';
import {Reporte} from "../models/reporte";


class ServerController {
    public async newReport(req: Request, res: Response) {
        try {
            const newReport= new Reporte(req.body);
            newReport.servidor= process.env.CARNET;
            await newReport.save();
            return res.status(200).json({nombre: newReport.nombre, id:newReport.id, date:newReport.createdAt})
            
        } catch (error) {
            return res.status(500).json({
                error,
            });
        }
    }

    public async getReport(req: Request, res: Response) {
        try {
            const reporte = await Reporte.findById({_id:req.params.id});
            reporte.servidoractual = process.env.CARNET;
            res.status(200).json(reporte);
        } catch (error) {
            return res.status(500).json({
                error
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


