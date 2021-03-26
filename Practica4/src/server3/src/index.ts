import { App } from './app'
import  "./db/connection";

async function main(){

<<<<<<< HEAD
    const app = new App(process.env.PORT_3 || 3003);
=======
    const app = new App(process.env.PORT_3 || 3004);
>>>>>>> 6221db1eb1e8faffa2c4ecb40a7483d2be53d809

    await app.listen();
}

main();