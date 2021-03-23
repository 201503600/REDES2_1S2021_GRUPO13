import { App } from './app'
import  "./models/db/connection";

async function main(){

    const app = new App(process.env.PORT || 3001);

    await app.listen();
}

main();