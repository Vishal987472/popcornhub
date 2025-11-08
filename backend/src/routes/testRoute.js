import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "🎬 Welcome to PopcornHub Backend API",
    version: "1.0.0",
    status: "running",
  });
});

export default router;
