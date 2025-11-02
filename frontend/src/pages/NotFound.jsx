import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-light"
      style={{
        background: "radial-gradient(circle at top, #1a142a 0%, #0b081a 100%)",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1
        className="display-1 fw-bold mb-3"
        style={{
          color: "#ff4d6d",
          textShadow: "0 0 20px rgba(255, 77, 109, 0.6)",
        }}
      >
        🎬
      </h1>
      <h3 style={{ color: "#ffe66d" }}>Please select a movie first!</h3>
      <p className="text-secondary mb-4">
        You need to choose a movie before booking your seats 🍿
      </p>
      <Link
        to="/browse"
        className="btn fw-bold px-4 py-2"
        style={{
          backgroundColor: "#ff4d6d",
          color: "white",
          border: "none",
        }}
      >
        Browse Movies
      </Link>
    </div>
  );
};

export default NotFound;
