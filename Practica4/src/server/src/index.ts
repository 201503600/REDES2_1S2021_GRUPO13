import { App } from './app'
import  "./db/connection";

async function main(){

<<<<<<< HEAD
    const app = new App(process.env.PORT_1 || 3001);
=======
    const app = new App(process.env.PORT_1 || 3002);
>>>>>>> 6221db1eb1e8faffa2c4ecb40a7483d2be53d809

    await app.listen();
}

main();