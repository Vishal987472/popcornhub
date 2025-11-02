import React, { useEffect, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const MovieBrowse = ({ searchQuery, genre, currentPage, setCurrentPage }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Simulated movie dataset (replace with TMDB API)
  const sampleMovies = [
    {
      id: 1,
      title: "Inception",
      genre: "sci-fi",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjhkNjM0ZTMtNGM5MC00ZTQ3LTk3YmYtZTkzYzdiNWE0ZTA2XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "sci-fi",
      poster:
        "https://image.tmdb.org/t/p/w300//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "action",
      poster:
        "https://image.tmdb.org/t/p/w300//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: 4,
      title: "Joker",
      genre: "drama",
      poster:
        "https://image.tmdb.org/t/p/w300//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      genre: "action",
      poster:
        "https://image.tmdb.org/t/p/w300//or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
    {
      id: 6,
      title: "It",
      genre: "horror",
      poster:
        "https://image.tmdb.org/t/p/w300//9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    },
    {
      id: 7,
      title: "Tenet",
      genre: "sci-fi",
      poster:
        "https://image.tmdb.org/t/p/w300//k68nPLbIST6NP96JmTxmZijEvCA.jpg",
    },
    {
      id: 8,
      title: "The Hangover",
      genre: "comedy",
      poster:
        "https://image.tmdb.org/t/p/w300//uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    },
  ];

  // Pagination config
  const moviesPerPage = 6;

  // Fetch movies (simulated)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setMovies(sampleMovies);
      setLoading(false);
    }, 600);
  }, []);

  // Filter movies based on search + genre
  useEffect(() => {
    let filtered = [...movies];

    if (genre !== "all") {
      filtered = filtered.filter((m) => m.genre === genre);
    }

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
    setCurrentPage(1); // reset to page 1 when filters change
  }, [genre, searchQuery, movies]);

  // Pagination logic
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = filteredMovies.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  // UI
  return (
    <div className="text-center mt-4">
      {loading ? (
        <div className="text-light mt-5">
          <div className="spinner-border text-danger" role="status"></div>
          <p className="mt-3 text-secondary">Loading movies...</p>
        </div>
      ) : filteredMovies.length === 0 ? (
        <p className="text-secondary mt-4">No movies found 🍿</p>
      ) : (
        <>
          {/* Movie Grid */}
          <div className="row g-4 justify-content-center">
            {currentMovies.map((movie) => (
              <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card bg-dark border-0 shadow-lg h-100 movie-card"
                  style={{
                    border: "1px solid rgba(229,9,20,0.3)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="card-img-top rounded-top"
                    style={{ height: "360px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title text-light"
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        textShadow: "0 0 6px rgba(255,255,255,0.2)",
                      }}
                    >
                      {movie.title}
                    </h5>
                    <p className="text-secondary mb-3 text-capitalize">
                      Genre: {movie.genre}
                    </p>
                    <button
                      className="btn btn-danger w-100"
                      style={{
                        backgroundColor: "#e50914",
                        border: "none",
                        fontWeight: 600,
                      }}
                      onClick={() =>
                        navigate(`/booking/${movie.id}`, { state: movie })
                      } // ✅ navigate to booking page
                    >
                      🎟️ Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-5">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link bg-dark text-danger border-0"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    ‹ Prev
                  </button>
                </li>
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <li
                    key={idx}
                    className={`page-item ${
                      currentPage === idx + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link bg-dark text-danger border-0"
                      onClick={() => setCurrentPage(idx + 1)}
                    >
                      {idx + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link bg-dark text-danger border-0"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next ›
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </div>
  );
};

export default MovieBrowse;
