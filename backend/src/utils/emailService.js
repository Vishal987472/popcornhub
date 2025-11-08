// src/services/emailService.js
import nodemailer from "nodemailer";
import { config } from "../config/keys.js";
import { logger } from "../utils/logger.js";

// Create a reusable transporter object using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail", // You can change to Outlook, SendGrid, etc.
  auth: {
    user: config.EMAIL_USER, // from .env
    pass: config.EMAIL_PASS, // from .env (App Password if Gmail)
  },
});

/**
 * Send Email
 * @param {string} to - recipient email
 * @param {string} subject - email subject
 * @param {string} html - email body in HTML
 */
export const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: `"PopcornHub 🍿" <${config.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    logger.info(`📧 Email sent to ${to}`);
  } catch (error) {
    logger.error(`❌ Email send failed: ${error.message}`);
    throw new Error("Email sending failed");
  }
};
