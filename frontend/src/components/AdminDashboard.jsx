import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("movies");
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 500);

  // Simulate search action
  useEffect(() => {
    if (debouncedSearch.trim() !== "") {
      console.log("Searching for:", debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <div
      className="container-fluid py-5 text-light"
      style={{
        background: "radial-gradient(circle at top, #10081f 0%, #060312 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-4 fw-bold"
          style={{
            color: "#e50914",
            textShadow: "0 0 12px rgba(229, 9, 20, 0.6)",
          }}
        >
          🎬 PopcornHub Admin Dashboard
        </h2>

        {/* Navigation Tabs */}
        <ul className="nav nav-pills justify-content-center mb-4">
          {["movies", "bookings", "reports"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? "active" : ""}`}
                style={{
                  backgroundColor:
                    activeTab === tab ? "#e50914" : "transparent",
                  border: "1px solid #e50914",
                  color: "#fff",
                  marginRight: "8px",
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "movies"
                  ? "🎞️ Movies"
                  : tab === "bookings"
                  ? "🎟️ Bookings"
                  : "📊 Reports"}
              </button>
            </li>
          ))}
        </ul>

        {/* Optional Search Bar */}
        <div className="row mb-4 justify-content-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg bg-dark text-light border-0 shadow-sm"
              placeholder={`Search in ${activeTab}...`}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        {/* Tab Content */}
        <div className="card bg-dark border-0 shadow-lg p-4">
          {activeTab === "movies" && (
            <>
              <h4 style={{ color: "#e50914" }}>🎞️ Manage Movies</h4>
              <p className="text-secondary">
                Add, edit, or delete movies currently showing in PopcornHub.
              </p>
              <button className="btn btn-danger btn-sm">Add New Movie</button>
              <table className="table table-dark table-striped mt-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Duration</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Inception</td>
                    <td>Sci-Fi</td>
                    <td>148 min</td>
                    <td>
                      <button className="btn btn-sm btn-outline-danger me-2">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline-light">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          {activeTab === "bookings" && (
            <>
              <h4 style={{ color: "#e50914" }}>🎟️ Manage Bookings</h4>
              <p className="text-secondary">
                View and manage all customer bookings here.
              </p>
              <table className="table table-dark table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Movie</th>
                    <th>Seats</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Vishal</td>
                    <td>Interstellar</td>
                    <td>5, 6, 7</td>
                    <td>
                      <span className="badge bg-success">Confirmed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          {activeTab === "reports" && (
            <>
              <h4 style={{ color: "#e50914" }}>📊 Reports</h4>
              <p className="text-secondary">
                Summary of revenue, ticket sales, and top-performing movies.
              </p>
              <div
                className="p-4 rounded"
                style={{
                  backgroundColor: "#141018",
                  border: "1px solid rgba(229,9,20,0.3)",
                }}
              >
                <h5 className="text-danger">Total Revenue: ₹85,000</h5>
                <h6 className="text-light">Tickets Sold: 1,230</h6>
                <h6 className="text-light">Top Movie: Inception</h6>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
