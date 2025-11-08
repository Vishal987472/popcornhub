// 🎬 API + APP CONSTANTS

export const APP_NAME = "PopcornHub";

// Base URLs
export const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;
export const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

// 🎨 THEME COLORS (Dark + Red + Gold)
export const THEME = {
  background: "radial-gradient(circle at top, #1a142a 0%, #0b081a 100%)",
  primaryRed: "#ff4d6d", // main accent
  gold: "#ffe66d", // highlights
  darkCard: "#181223", // card background
  textLight: "#f8f9fa",
  textMuted: "#a0a0a0",
};

// 🎭 GENRES (useful for filters)
export const GENRES = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller",
  "War",
  "Western",
];

// 🎟️ SEAT MAP SETTINGS
export const SEAT_CONFIG = {
  rows: 8,
  cols: 8,
  pricePerSeat: 250, // ₹250 per seat
  spacing: 5,
};

// 💳 PAYMENT SETTINGS
export const PAYMENT = {
  currency: "INR",
  gateway: "Simulated", // Later can switch to Stripe/Razorpay
};

// 🌍 PAGINATION SETTINGS
export const PAGINATION = {
  itemsPerPage: 12,
};

// ⚠️ MESSAGES
export const MESSAGES = {
  noMovies: "No movies found. Try another title!",
  loading: "Loading your movies...",
  bookingSuccess: "Booking confirmed! Enjoy your show 🍿",
  bookingError: "Something went wrong. Please try again!",
  paymentSuccess: "Payment successful 🎉",
  paymentFailed: "Payment failed. Please retry.",
};
