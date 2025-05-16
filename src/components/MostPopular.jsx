import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

export default function MostPopular({ mostPopularMovies }) {
  return (
    <div className="most-popular">
      <div className="container">
        <h2>Most Popular</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          className="mt-4"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            415: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1116: {
              slidesPerView: 5,
            },
          }}
        >
          {mostPopularMovies
            ? mostPopularMovies.map((movie) => {
                const src = `https://image.tmdb.org/t/p/original${movie.poster}`;
                return (
                  <SwiperSlide key={movie.id} className="popular-swiper-slide">
                    <img
                      src={src}
                      alt={`Poster of ${movie.title}`}
                      className="popular-movies"
                    />
                    <div className="overlay">
                      <div className="info d-flex justify-content-evenly">
                        <Link to={`/movie/${movie.id}`}>
                          <button>About Movie</button>
                        </Link>
                        <div className="rating d-flex">
                          <p>{movie.vote_average.toFixed(1)}</p>
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
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
      </div>
    </div>
  );
}
