import { config } from "../config/envconfig.js";

const globalErrorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message: error.message || "Something went wrong",
    errorStack: config.env === "production" ? null : error.stack,
  });
};

export default globalErrorHandler;
