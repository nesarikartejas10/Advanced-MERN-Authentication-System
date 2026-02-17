import createHttpError from "http-errors";
import asyncHandler from "./asyncHandler.js";
import jwt from "jsonwebtoken";
import { config } from "../config/envconfig.js";
import { User } from "../models/user.model.js";

export const authenticate = asyncHandler((req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(createHttpError(401, "Access token is missing or invalid"));
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, config.jwtSecret, async (error, decoded) => {
    if (error) {
      if (error.name === "TokenExpiredError") {
        return next(
          createHttpError(
            400,
            "Access Token has expired, use refreshtoken to generate again",
          ),
        );
      }
      return next(createHttpError(400, "Access token is missing or invalid"));
    }

    const { id } = decoded;
    const user = await User.findById(id);
    if (!user) {
      return next(createHttpError(404, "User not found"));
    }
    req.user = user;
    req.userId = user._id;
    next();
  });
});
