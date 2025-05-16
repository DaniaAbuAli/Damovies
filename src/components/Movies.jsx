import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Movies({ displayMovies, source }) {
  const [movies, setMovies] = useState(displayMovies);

  useEffect(() => {
    setMovies(displayMovies);
  }, [displayMovies]);

  const removeMovie = (id) => {
    const updatedWatchlist = movies.filter((movie) => id !== movie.id);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    setMovies(updatedWatchlist);
  };

  return (
    <div className="movies mt-3">
      {source === "watchlist" ? (
        <h4 className="mt-4 mb-4">My watchlist : </h4>
      ) : null}
      <div className="row">
        {movies.map((movie) => {
          const src = `https://image.tmdb.org/t/p/original${movie.poster}`;
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
              <div className="d-flex justify-content-center align-items-center">
                <div className="movie">
                  <img src={src} alt="" />
                  <div className="overlay">
                    <div className="info d-flex justify-content-evenly">
                      <Link to={`/movie/${movie.id}`}>
                        <button>About Movie</button>
                      </Link>
                      {source === "watchlist" ? (
                        <button onClick={() => removeMovie(movie.id)}>
                          Remove
                        </button>
                      ) : (
                        <div className="rating d-flex">
                          <p>{movie.vote.toFixed(1)}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
