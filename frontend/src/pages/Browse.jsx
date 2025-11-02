import React, { useState, useEffect } from "react";
import MovieBrowse from "../components/MovieBrowse";
import useDebounce from "../hooks/useDebounce";
import "../index.css";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Debounce for search input (reduces API calls)
  const debouncedSearch = useDebounce(searchQuery, 600);

  // Simulated genres (replace with TMDB API genres later)
  const genres = [
    { id: "all", name: "All" },
    { id: "action", name: "Action" },
    { id: "comedy", name: "Comedy" },
    { id: "drama", name: "Drama" },
    { id: "horror", name: "Horror" },
    { id: "sci-fi", name: "Sci-Fi" },
  ];

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "radial-gradient(circle at top, #10081f 0%, #060312 100%)",
        minHeight: "100vh",
        color: "var(--text-light)",
      }}
    >
      <div className="container">
        {/* Page Title */}
        <h2
          className="text-center mb-4"
          style={{
            color: "#e50914",
            fontWeight: 700,
            textShadow: "0 0 10px rgba(229, 9, 20, 0.6)",
          }}
        >
          🍿 Browse Movies
        </h2>

        {/* Search + Filter Row */}
        <div className="row mb-4 justify-content-center">
          <div className="col-md-6 col-10 mb-3 mb-md-0">
            <input
              type="text"
              className="form-control form-control-lg bg-dark text-light border-0 shadow-sm"
              placeholder="Search by movie title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="col-md-3 col-8">
            <select
              className="form-select form-select-lg bg-dark text-light border-0 shadow-sm"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              {genres.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Movie Grid */}
        <MovieBrowse
          searchQuery={debouncedSearch}
          genre={genre}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Browse;
