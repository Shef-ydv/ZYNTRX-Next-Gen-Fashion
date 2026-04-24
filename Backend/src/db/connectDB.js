import mongoose from "mongoose";
import { config } from "./config.js";

const mongoUri = config.MONGO_URI;

const connectDB = async () => {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  
};

export default connectDB;