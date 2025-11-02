// src/config/constants.js
export const APP_CONSTANTS = {
  APP_NAME: "PopcornHub",
  VERSION: "1.0.0",

  MOVIE: {
    DEFAULT_SEATS: 50,
    GENRES: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"],
  },

  BOOKING: {
    STATUS: {
      CONFIRMED: "Confirmed",
      CANCELLED: "Cancelled",
      PENDING: "Pending",
    },
  },

  MESSAGES: {
    SERVER_ERROR: "Something went wrong on the server.",
    MOVIE_NOT_FOUND: "Movie not found.",
    BOOKING_FAILED: "Failed to complete booking.",
  },
};
