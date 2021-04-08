import morgan from 'morgan';
import  mongoose  from "mongoose";

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

let mongoDB = "mongodb://mongo-container:27017/redes2";
mongoose.connect(mongoDB);
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, " ----  MongoDB connection error   ---- "));
morgan(':method :url :status :res[content-length] - :response-time ms')

