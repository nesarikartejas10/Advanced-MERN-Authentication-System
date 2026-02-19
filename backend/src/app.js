import cookieParser from "cookie-parser";
import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);

app.use(globalErrorHandler);
export default app;
