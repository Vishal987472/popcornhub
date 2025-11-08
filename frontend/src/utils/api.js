import axios from "axios";

// ✅ Backend Base URL
// You can switch between local & deployed server easily
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api";

// ✅ TMDB Base URL (optional if you want to fetch from TMDB)
const TMDB_BASE_URL="https://api.themoviedb.org/3";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_KEY;

// Create axios instance for backend
const backendAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Create axios instance for TMDB
const tmdbAPI = axios.create({
  baseURL: TMDB_BASE_URL,
  params: { api_key: TMDB_API_KEY },
});

// 🎥 Fetch movies from TMDB or your backend
export const fetchMovies = async (page = 1, query = "") => {
  try {
    if (query) {
      // Search movies by title
      const res = await tmdbAPI.get(`/search/movie`, { params: { query, page } });
      return res.data.results;
    } else {
      // Browse popular movies
      const res = await tmdbAPI.get(`/movie/popular`, { params: { page } });
      return res.data.results;
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// 🎞 Fetch single movie details
export const fetchMovieDetails = async (movieId) => {
  try {
    const res = await tmdbAPI.get(`/movie/${movieId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

// 🪑 Create new booking
export const createBooking = async (bookingData) => {
  try {
    const res = await backendAPI.post("/bookings", bookingData);
    return res.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

// 💳 Simulate or process payment
export const processPayment = async (paymentData) => {
  try {
    const res = await backendAPI.post("/payments", paymentData);
    return res.data;
  } catch (error) {
    console.error("Error processing payment:", error);
    throw error;
  }
};

// 👤 Fetch user bookings (Profile Page)
export const fetchUserBookings = async (userId) => {
  try {
    const res = await backendAPI.get(`/bookings/user/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    return [];
  }
};
