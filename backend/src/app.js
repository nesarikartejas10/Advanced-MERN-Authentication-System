import cookieParser from "cookie-parser";
import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(globalErrorHandler);
export default app;
