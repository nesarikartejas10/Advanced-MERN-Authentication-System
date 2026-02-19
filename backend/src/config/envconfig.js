import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  env: process.env.NODE_ENV,
  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS,
  jwtSecret: process.env.JWT_SECRET,
  frontendURL: process.env.FRONTEND_URL,
};

export const config = Object.freeze(_config);
