import { Router } from 'express';
import { serverController } from '../controllers/servidor.controllers';


class ServerRoute {
    private router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config(): void {
        this.router.get('/',serverController.getReports);
        this.router.get('/:id',serverController.getReport)
            .post('/', serverController.newReport);
    }

    getRouter() : Router{
        return this.router;
    }
}

const serverRouter = new ServerRoute();
export default serverRouter.getRouter();
