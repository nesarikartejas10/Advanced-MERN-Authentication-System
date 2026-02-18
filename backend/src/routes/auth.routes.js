import express from "express";
import {
  changePassword,
  emailVerification,
  forgotPassword,
  loginUser,
  logoutUser,
  registerUser,
  verifyOTP,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/authenticate.js";
import { userSchema, validateUser } from "../validators/user.validate.js";

const router = express.Router();

router.post("/register", validateUser(userSchema), registerUser);
router.post("/verify", emailVerification);
router.post("/login", loginUser);
router.post("/logout", authenticate, logoutUser);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp/:email", verifyOTP);
router.post("/change-password/:email", changePassword);

export default router;
