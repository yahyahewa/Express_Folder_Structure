import express from "express";
import morgan from "morgan";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";


dotenv.config();
connectDb();
const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  export default app;