import mongoose from "mongoose";
import { config } from "./envconfig.js";

async function connectDB() {
  try {
    await mongoose.connect(config.mongoURI);
    console.log("Connect to database successfully");
  } catch (error) {
    console.log("Failed to connect database", error.message);
    process.exit(1);
  }
}

export default connectDB;
