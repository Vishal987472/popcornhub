import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 py-3 shadow-sm">
      <div className="container-fluid">
        {/* Logo and Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logo192.png"
            alt="PopcornHub Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span style={{ color: "var(--accent-yellow)", fontWeight: "700" }}>
            Popcorn
          </span>
          <span style={{ color: "var(--accent-red)", fontWeight: "700" }}>
            Hub
          </span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/browse">
                Browse
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/booking">
                Book Tickets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>

          {/* Book Now Button */}
          <Link to="/browse" className="btn btn-primary ms-3">
            🎟 Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
