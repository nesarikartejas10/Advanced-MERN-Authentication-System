import express from "express";
import {
  emailVerification,
  loginUser,
  registerUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify", emailVerification);
router.post("/login", loginUser);

export default router;
