import { User } from "./user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!!!" });
    }

    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          existingUser.username === username
            ? "Username is already taken!!!"
            : "Email is already registered!!!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      massage: "User registered successfully.",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
