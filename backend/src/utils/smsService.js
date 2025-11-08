    // src/services/smsService.js
import twilio from "twilio";
import { config } from "../config/keys.js";
import { logger } from "../utils/logger.js";

// Twilio client setup
const client = twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

/**
 * Send SMS
 * @param {string} to - recipient phone number (with country code)
 * @param {string} message - message text
 */
export const sendSMS = async (to, message) => {
  try {
    await client.messages.create({
      body: message,
      from: config.TWILIO_PHONE_NUMBER,
      to,
    });

    logger.info(`📱 SMS sent to ${to}`);
  } catch (error) {
    logger.error(`❌ SMS send failed: ${error.message}`);
    throw new Error("SMS sending failed");
  }
};
