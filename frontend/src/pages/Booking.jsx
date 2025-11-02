import React from "react";
import BookingPage from "../components/BookingPage";

const Booking = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "radial-gradient(circle at top, #18152e 0%, #0c0a1e 100%)",
        minHeight: "100vh",
        color: "var(--text-light)",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-4"
          style={{
            color: "var(--accent-yellow)",
            fontWeight: 700,
            textShadow: "0 0 10px rgba(255, 230, 109, 0.3)",
          }}
        >
          🍿 Seat Booking
        </h2>

        {/* Booking Component */}
        <BookingPage />
      </div>
    </div>
  );
};

export default Booking;
