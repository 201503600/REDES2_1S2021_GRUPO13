import mongoose from "mongoose";

let mongoDB = "mongodb://mongo:27017/redestemp";

mongoose.connect(mongoDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

mongoose.connection.on("open", () => console.log("Succesfully mongodb"));
