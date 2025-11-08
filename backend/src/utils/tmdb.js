import axios from "axios";
import { config } from "../config/keys.js";

const { TMDB_API_KEY, TMDB_BASE_URL } = config;

// Fetch movies by query or genre
export const fetchMoviesFromTMDB = async (query, genre, page = 1) => {
  try {
    let url = "";

    if (query) {
      // Search movies
      url = `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
        query
      )}&page=${page}`;
    } else if (genre && genre !== "all") {
      // Discover movies by genre
      const genreMap = {
        action: 28,
        comedy: 35,
        drama: 18,
        horror: 27,
        "sci-fi": 878,
      };
      const genreId = genreMap[genre] || "";
      url = `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&page=${page}`;
    } else {
      // Default: popular movies
      url = `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`;
    }

    const response = await axios.get(url);
    return response.data.results.map((movie) => ({
      title: movie.title,
      genre: genre || "N/A",
      duration: `${Math.floor(Math.random() * 80) + 80} min`, // TMDB doesn't give runtime in list
      rating: movie.vote_average,
      description: movie.overview,
      posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      releaseDate: movie.release_date,
    }));
  } catch (error) {
    console.error("❌ Error fetching TMDB movies:", error.message);
    throw new Error("Failed to fetch movies from TMDB");
  }
};
