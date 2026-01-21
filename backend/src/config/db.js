import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connect to database successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Error in connecting to database", err);
    });

    await mongoose.connect(
      "mongodb+srv://nesarikartejas10:nesarikartejas10@cluster0.fpf6um5.mongodb.net/mern-auth",
    );
  } catch (error) {
    console.error(`Failed to connect mongoDB`, error);
    process.exit(1);
  }
};

export default connectDB;
