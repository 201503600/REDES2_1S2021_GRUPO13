import { App } from './app'
import  "./db/connection";

async function main(){

    const app = new App(process.env.PORT_3 || 3004);

    await app.listen();
}

main();