import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../Services/tmdbService";
import Movie from "../Models/Movie";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await fetchPopularMovies();
      setMovies(movieData);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Popular Movies</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 col-lg-3 mb-4">
              <div className="card">
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    ⭐ {movie.vote_average} | 🗓 {movie.release_date}
                  </p>
                  <p className="card-text">
                    {movie.overview.substring(0, 80)}...
                  </p>
                  <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularMovies;
