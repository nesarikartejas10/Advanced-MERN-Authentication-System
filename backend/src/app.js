import cookieParser from "cookie-parser";
import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import { config } from "./config/envconfig.js";

const app = express();

app.use(
  cors({
    origin: config.frontendURL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);

app.use(globalErrorHandler);
export default app;
