"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('useNewUrlParser', true);
mongoose_1.default.set('useFindAndModify', true);
mongoose_1.default.set('useCreateIndex', true);
mongoose_1.default.set('useUnifiedTopology', true);
let mongoDB = "mongodb://mongo-container:27017/redes2";
mongoose_1.default.connect(mongoDB);
mongoose_1.default.connect(mongoDB);
mongoose_1.default.Promise = global.Promise;
let db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, " ----  MongoDB connection error   ---- "));
morgan_1.default(':method :url :status :res[content-length] - :response-time ms');
