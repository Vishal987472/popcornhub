import express from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

const router = express.Router();

/**
 * 🎬 Movie Routes
 * Base path: /api/movies
 */

// Get all movies
router.get("/", getAllMovies);

// Get movie by ID
router.get("/:id", getMovieById);

// Add new movie (Admin)
router.post("/", createMovie);

// Update movie (Admin)
router.put("/:id", updateMovie);

// Delete movie (Admin)
router.delete("/:id", deleteMovie);

export default router;
