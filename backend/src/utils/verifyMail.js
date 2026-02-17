import nodemailer from "nodemailer";
import { config } from "../config/envconfig.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const verifyMail = async (token, email) => {
  const emailTemplateSource = fs.readFileSync(
    path.join(__dirname, "../views/emailTemplate.hbs"),
    "utf-8",
  );

  const template = handlebars.compile(emailTemplateSource);
  const htmlToSend = template({ token: encodeURIComponent(token) });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.mailUser,
      pass: config.mailPass,
    },
  });

  const mailConfigs = {
    from: config.mailUser,
    to: email,
    subject: "Email verification",
    html: htmlToSend,
  };

  transporter.sendMail(mailConfigs, (error, info) => {
    if (error) {
      console.log("Error while sending mail", error.message);
    }
    console.log("Email sent successfully:", info);
  });
};
