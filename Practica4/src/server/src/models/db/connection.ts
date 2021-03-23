import mongoose from "mongoose";
import mongoKeys from "../../keys/mongoKey";

mongoose.connect(
  `mongodb+srv://${mongoKeys.user}:${mongoKeys.password}@${mongoKeys.host}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    //useCreateIndex: true,
  }
);

mongoose.connection.on("open", () => console.log("Succesfully mongodb"));
