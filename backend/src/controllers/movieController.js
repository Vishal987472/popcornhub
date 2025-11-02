import Movie from "../models/Movie.js";

/**
 * @desc    Get all movies
 * @route   GET /api/movies
 */
export const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get a movie by ID
 * @route   GET /api/movies/:id
 */
export const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Add a new movie (Admin)
 * @route   POST /api/movies
 */
export const createMovie = async (req, res, next) => {
  try {
    const { title, description, genre, duration, rating, language, posterUrl, showTimes } = req.body;

    if (!title || !posterUrl) {
      return res.status(400).json({ message: "Title and Poster are required" });
    }

    const movie = await Movie.create({
      title,
      description,
      genre,
      duration,
      rating,
      language,
      posterUrl,
      showTimes,
    });

    res.status(201).json({
      message: "Movie added successfully!",
      movie,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update movie details (Admin)
 * @route   PUT /api/movies/:id
 */
export const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({
      message: "Movie updated successfully!",
      updatedMovie,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete a movie (Admin)
 * @route   DELETE /api/movies/:id
 */
export const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie deleted successfully!" });
  } catch (error) {
    next(error);
  }
};
