import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isLoggedIn: { type: Boolean, default: false },
    refreshToken: { type: String, default: null },
    otp: { type: String, default: null },
    otpExpiry: { type: Date, default: null },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
