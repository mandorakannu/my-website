// connect to mongodb database
import mongoose from "mongoose";

const URI: string = process.env.DATABASE as string;
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    mongoose.connect(URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
