"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoKey_1 = __importDefault(require("../../keys/mongoKey"));
mongoose_1.default.connect(`mongodb+srv://${mongoKey_1.default.user}:${mongoKey_1.default.password}@${mongoKey_1.default.host}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    //useCreateIndex: true,
});
mongoose_1.default.connection.on("open", () => console.log("Succesfully mongodb"));
