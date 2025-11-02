// src/server.js
import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./utils/db.js";
import { logger } from "./utils/logger.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`);
});
