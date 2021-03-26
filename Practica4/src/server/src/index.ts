import { App } from './app'
import  "./db/connection";

async function main(){

    const app = new App(process.env.PORT_1 || 3002);

    await app.listen();
}

main();