import express from "express";
import {
  emailVerification,
  registerUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify", emailVerification);

export default router;
