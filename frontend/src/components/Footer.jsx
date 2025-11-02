import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-light py-4 mt-auto"
      style={{
        background:
          "linear-gradient(90deg, #0c0a1e 0%, #1a142a 40%, #2b0d2f 100%)",
        borderTop: "1px solid rgba(255, 230, 109, 0.2)",
      }}
    >
      <div className="container">
        <h5
          className="fw-bold"
          style={{ color: "var(--accent-yellow, #ffe66d)" }}
        >
          🎬 PopcornHub
        </h5>
        <p className="mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
          Your one-stop destination for movies, magic, and memories.
        </p>

        <div className="d-flex justify-content-center gap-3 mb-3">
          <a
            href="#"
            className="text-decoration-none"
            style={{ color: "#ff4d6d" }}
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="#"
            className="text-decoration-none"
            style={{ color: "#ff4d6d" }}
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="#"
            className="text-decoration-none"
            style={{ color: "#ff4d6d" }}
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        <small style={{ color: "rgba(255,255,255,0.6)" }}>
          © {new Date().getFullYear()} PopcornHub — All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
