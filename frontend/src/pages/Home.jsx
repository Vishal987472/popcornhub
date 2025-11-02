import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Home = () => {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "90vh",
        background:
          "radial-gradient(circle at top, #18152e 0%, #0c0a1e 100%)",
        color: "var(--text-light)",
      }}
    >
      {/* Logo */}
      <img
        src="/logo192.png"
        alt="PopcornHub Logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />

      {/* Title */}
      <h1
        style={{
          fontWeight: "700",
          color: "var(--accent-yellow)",
          fontSize: "3.2rem",
        }}
      >
        Welcome to <span style={{ color: "var(--accent-red)" }}>PopcornHub</span>
      </h1>
      <p
        style={{
          color: "var(--text-muted)",
          maxWidth: "600px",
          marginTop: "10px",
        }}
      >
        Discover the latest blockbusters, book your favorite seats, and dive
        into the world of movies — all in one hub!
      </p>

      {/* CTA Button */}
      <Link
        to="/browse"
        className="btn btn-primary mt-4 px-4 py-2"
        style={{
          fontWeight: "600",
          letterSpacing: "0.5px",
          boxShadow: "0 4px 10px rgba(230, 57, 70, 0.4)",
        }}
      >
        🍿 Explore Movies
      </Link>
    </div>
  );
};

export default Home;
