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
    expiresIn: "10m",
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

export const emailVerification = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(
      createHttpError(401, "Authorization token is missing or invalid"),
    );
  }

  const token = authHeader.split(" ")[1];

  let decoded;
  try {
    decoded = jwt.verify(token, config.jwtSecret);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(createHttpError(400, "The registration token has expired"));
    }
    return next(createHttpError(400, "Token verification failed"));
  }

  const user = await User.findOne({ _id: decoded.id });
  if (!user) {
    return next(createHttpError(404, "User not found"));
  }

  user.token = null;
  user.isVerified = true;
  await user.save();

  res
    .status(200)
    .json({ success: true, message: "Email verified successfully" });
});

export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(createHttpError(400, "All fields are requied"));
  }

  const user = await User.fineOne({ email });
  if (!user) {
    return next(createHttpError(404, "User not found"));
  }

  //check if password is correct or not
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(createHttpError(401, "Incorrect password"));
  }

  //check if user is verified or not
  if (!user.isVerfied) {
    return next(createHttpError(403, "Please verify your email to continue"));
  }
});
