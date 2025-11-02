// src/config/keys.js
import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/popcornhub",
  NODE_ENV: process.env.NODE_ENV || "development",
  STRIPE_KEY: process.env.STRIPE_KEY || "sk_test_placeholder",
  EMAIL_USER: process.env.EMAIL_USER || "",
  EMAIL_PASS: process.env.EMAIL_PASS || "",
  TWILIO_SID: process.env.TWILIO_SID || "",
  TWILIO_AUTH: process.env.TWILIO_AUTH || "",
  TWILIO_PHONE: process.env.TWILIO_PHONE || "",
};
