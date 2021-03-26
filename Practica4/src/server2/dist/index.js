"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("./db/connection");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
<<<<<<< HEAD
        const app = new app_1.App(process.env.PORT_2 || 3002);
=======
        const app = new app_1.App(process.env.PORT_2 || 3003);
>>>>>>> 6221db1eb1e8faffa2c4ecb40a7483d2be53d809
        yield app.listen();
    });
}
main();
