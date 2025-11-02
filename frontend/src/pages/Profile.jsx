import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const Profile = () => {
  const bookings = [
    { id: 1, movie: "Inception", seats: ["A1", "A2", "A3"], date: "2025-11-02", amount: "₹750", status: "Confirmed" },
    { id: 2, movie: "Interstellar", seats: ["B4", "B5"], date: "2025-10-29", amount: "₹500", status: "Cancelled" },
  ];

  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 400);

  const filteredBookings = bookings.filter((b) =>
    b.movie.toLowerCase().includes(debouncedFilter.toLowerCase())
  );

  return (
    <div
      className="container py-5 text-light"
      style={{
        background: "radial-gradient(circle at top, #10081f 0%, #060312 100%)",
        minHeight: "100vh",
      }}
    >
      <h2
        className="text-center mb-4 fw-bold"
        style={{ color: "#e50914", textShadow: "0 0 10px rgba(229,9,20,0.6)" }}
      >
        👤 My Profile
      </h2>

      <div className="card bg-dark border-0 shadow-lg p-4">
        <h5 style={{ color: "#e50914" }}>Booking History</h5>

        <input
          type="text"
          className="form-control form-control-lg bg-dark text-light border-0 shadow-sm mt-3 mb-4"
          placeholder="Search bookings by movie name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <table className="table table-dark table-hover mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Movie</th>
              <th>Seats</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((b) => (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.movie}</td>
                  <td>{b.seats.join(", ")}</td>
                  <td>{b.date}</td>
                  <td>{b.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        b.status === "Confirmed" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-secondary">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
