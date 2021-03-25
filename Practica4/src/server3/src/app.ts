import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors'

require('dotenv').config();

import ServidorRoutes from './routes/servidor.routes'

export class App{
    
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(){
        this.app.use('/', ServidorRoutes );
    }


    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('==> SERVER 1 on port', this.app.get('port'));
    }

}