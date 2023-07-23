import mongoose from "mongoose";


export const connectDb = async () => {
    try {
      await mongoose.connect(process.env.DB_URL);
      console.log("Database connected successfully!");
    } catch (error) {
      console.log("Error connecting to database:", error);
    }
  };