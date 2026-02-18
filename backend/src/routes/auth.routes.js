import express from "express";
import {
  emailVerification,
  forgotPassword,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify", emailVerification);
router.post("/login", loginUser);
router.post("/logout", authenticate, logoutUser);
router.post("/forgot-password", forgotPassword);

export default router;
