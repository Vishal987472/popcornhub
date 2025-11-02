// src/app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import movieRoutes from "./routes/movieRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// --- Middlewares ---
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// --- Rate Limiter ---
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100, // limit each IP to 100 requests
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// --- Routes ---
app.use("/api/movies", movieRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);

// --- Health Check Route ---
app.get("/", (req, res) => {
  res.send("🎬 PopcornHub API is running!");
});

// --- Global Error Handler ---
app.use(errorHandler);

export default app;
