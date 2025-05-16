import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieDetailsLoading, setMovieDetailsLoading] = useState(true);
  const [watchList, setWatchList] = useState(() => {
    try {
      const storedWatchList = localStorage.getItem("watchlist");
      return storedWatchList ? JSON.parse(storedWatchList) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;
  const backdrop = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
  const poster = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`;
  const genres = movieDetails.genres;
  const cast = movieDetails.credits?.cast?.slice(0, 10) || [];
  const reviews = movieDetails.reviews?.results || [];
  const videos = movieDetails.videos?.results || [];
  let key = "";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `  https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,reviews,videos`
      );
      const result = await response.json();
      setMovieDetails(result);
      setMovieDetailsLoading(false);
    };
    fetchMovieDetails();
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchList));
  }, [watchList]);

  useEffect(() => {
    const movie = {
      id: movieId,
      poster: poster,
      vote: movieDetails?.vote_average,
    };
    setMovie(movie);
  }, [movieDetails]);

  for (let i = 0; i < videos.length; i++) {
    if (videos[i].type === "Trailer") {
      key = videos[i].key;
      break;
    }
  }

  const addToWatchList = () => {
    const add = watchList.some((movie) => movie.id == movieId);
    console.log(add);
    if (!add) {
      setWatchList([...watchList, movie]);
    }
  };

  if (movieDetailsLoading) return <Loader />;
  else {
    return (
      <>
        <Navbar />
        <div className="backdrop">
          <img src={backdrop} alt="backdrop" />
          <div className="buttons d-flex justify-content-center align-items-center gap-4">
            <a href={`https://www.youtube.com/watch?v=${key}`} target="_blank">
              <button>Trailer</button>
            </a>
            <a>
              <button onClick={addToWatchList}>
                {watchList.some((movie) => movie.id == movieId)
                  ? "✔  WatchList "
                  : "+ WatchList"}
              </button>
            </a>
          </div>
        </div>
        <div className="movie-details mt-4 mt-md-4 mt-lg-5">
          <div className="container">
            <div className="row d-flex justify-content-around">
              <div className="col-12 col-md-6 col-lg-5 poster">
                <img src={poster} alt="poster" />
              </div>
              <div className="col-12 col-md-6 col-lg-7 mt-3 p-4">
                <h2 className="mb-3">{movieDetails.original_title}</h2>
                <p className="fw-300">
                  <span className="fw-bold">Tagline: </span>
                  {movieDetails.tagline}
                </p>
                <p className="fw-300">
                  <span className="fw-bold">Release Date: </span>
                  {movieDetails.release_date}
                </p>
                <div className="genres">
                  <span className="fw-bold">Genre: </span>
                  {genres
                    ? genres.map((genre, index) => (
                        <span className="fw-300 genre" key={index}>
                          {genre.name}{" "}
                        </span>
                      ))
                    : null}
                </div>
                <div className="mt-3">
                  <span className="fw-bold">
                    Rating:{" "}
                    <span className="fw-300">
                      {movieDetails.vote_average} |
                    </span>{" "}
                  </span>
                  <span className="fw-bold">
                    Duration:{" "}
                    <span className="fw-300">{movieDetails.runtime} m</span>{" "}
                  </span>
                </div>
                <p className="mt-4 overview">{movieDetails.overview}</p>
              </div>
            </div>
            {cast ? <Cast cast={cast} /> : null}
            {reviews ? <Reviews reviews={reviews} /> : null}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
