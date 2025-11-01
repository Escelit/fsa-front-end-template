import mongoose from "mongoose";

const DB_NAME = "my-database";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/fsa-database");
    console.log("Database connected successfully!");
  } catch (error) {
    console.error(`x Error: ${error.message}`);

    process.exit(1);
  }
};
