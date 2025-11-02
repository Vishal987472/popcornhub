import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = location.state;

  // Handle direct navbar access
  if (!movie) {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center text-light"
        style={{
          background: "radial-gradient(circle at top, #1a142a 0%, #0b081a 100%)",
          minHeight: "100vh",
        }}
      >
        <h2 className="mb-3" style={{ color: "#ff4d6d" }}>
          🎟️ No Movie Selected
        </h2>
        <p className="text-secondary mb-4">
          Please browse and select a movie before booking.
        </p>
        <button
          className="btn btn-danger"
          style={{ backgroundColor: "#e50914", border: "none" }}
          onClick={() => navigate("/browse")}
        >
          🍿 Browse Movies
        </button>
      </div>
    );
  }

  // Seat Selection Logic
  const totalSeats = 30;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNum) => {
    if (selectedSeats.includes(seatNum)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNum));
    } else {
      setSelectedSeats([...selectedSeats, seatNum]);
    }
  };

  const ticketPrice = 250; // ₹ per seat
  const totalPrice = selectedSeats.length * ticketPrice;

  return (
    <div
      className="container-fluid py-5 text-light"
      style={{
        background: "radial-gradient(circle at top, #18152e 0%, #0c0a1e 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold mb-4 text-center"
          style={{
            color: "#ffe66d",
            textShadow: "0 0 10px rgba(255,230,109,0.4)",
          }}
        >
          🎬 Book Tickets for {movie.title}
        </h2>

        <div className="row align-items-center">
          {/* Poster Section */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={movie.poster}
              alt={movie.title}
              className="img-fluid rounded shadow-lg"
              style={{
                border: "2px solid #ff4d6d",
                boxShadow: "0 0 20px rgba(255,77,109,0.3)",
              }}
            />
          </div>

          {/* Seat Booking Section */}
          <div className="col-md-8">
            <div
              className="p-4 rounded"
              style={{
                backgroundColor: "#100b20",
                border: "1px solid rgba(255,230,109,0.2)",
              }}
            >
              <h5
                className="mb-3 fw-bold"
                style={{ color: "#ff4d6d", letterSpacing: "1px" }}
              >
                🎟️ Select Your Seats
              </h5>

              <div
                className="d-flex flex-wrap justify-content-center mb-3"
                style={{ gap: "10px" }}
              >
                {Array.from({ length: totalSeats }).map((_, i) => {
                  const seatNum = i + 1;
                  const isSelected = selectedSeats.includes(seatNum);
                  const isBooked = i % 11 === 0; // random booked pattern

                  return (
                    <button
                      key={seatNum}
                      disabled={isBooked}
                      className={`btn btn-sm ${
                        isSelected
                          ? "btn-danger"
                          : isBooked
                          ? "btn-secondary"
                          : "btn-outline-light"
                      }`}
                      style={{
                        width: "48px",
                        height: "48px",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        cursor: isBooked ? "not-allowed" : "pointer",
                      }}
                      onClick={() => handleSeatClick(seatNum)}
                    >
                      {seatNum}
                    </button>
                  );
                })}
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h5 className="m-0 text-light">
                  Selected:{" "}
                  <span style={{ color: "#ff4d6d" }}>
                    {selectedSeats.length > 0
                      ? selectedSeats.join(", ")
                      : "None"}
                  </span>
                </h5>
                <h5 className="m-0 text-warning">
                  Total: ₹{totalPrice.toLocaleString()}
                </h5>
              </div>

              <div className="text-center mt-4">
                <button
                  className="btn btn-lg"
                  style={{
                    backgroundColor:
                      selectedSeats.length > 0 ? "#ff4d6d" : "#444",
                    color: "white",
                    border: "none",
                    cursor:
                      selectedSeats.length > 0 ? "pointer" : "not-allowed",
                    transition: "all 0.3s ease",
                  }}
                  disabled={selectedSeats.length === 0}
                  onClick={() =>
                    navigate("/payment", {
                      state: { movie, selectedSeats, totalPrice },
                    })
                  }
                >
                  💳 Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
