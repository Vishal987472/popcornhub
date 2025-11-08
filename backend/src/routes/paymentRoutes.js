import express from "express";
import { createOrder, verifyPayment } from "../controllers/paymentController.js";

const router = express.Router();

// Create a new Razorpay order
router.post("/create-order", createOrder);

// Verify payment after success
router.post("/verify", verifyPayment);

export default router;
