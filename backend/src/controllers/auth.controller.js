import asyncHandler from "../middlewares/asyncHandler.js";
import createHttpError from "http-errors";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyMail } from "../utils/verifyMail.js";
import { config } from "../config/envconfig.js";

export const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(createHttpError(400, "User already exist"));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: newUser._id }, config.jwtSecret, {
    expiresIn: "5m",
  });

  await verifyMail(token, email);

  newUser.token = token;
  await newUser.save();

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: newUser,
  });
});
