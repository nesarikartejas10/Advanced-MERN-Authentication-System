import nodemailer from "nodemailer";
import { config } from "../config/envconfig.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendOtpMail = async (name, email, otp) => {
  const emailTemplateSource = fs.readFileSync(
    path.join(__dirname, "../views/otpMailTemplate.hbs"),
    "utf-8",
  );

  const template = handlebars.compile(emailTemplateSource);
  const htmlToSend = template({ name, otp });
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.mailUser,
      pass: config.mailPass,
    },
  });

  const mailOptions = {
    from: config.mailUser,
    to: email,
    subject: "Password reset OTP",
    html: htmlToSend,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error while sending otp mail", error.message);
    }
    console.log("OTP email sent successfully:", info);
  });
};
