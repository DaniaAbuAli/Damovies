import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

export default function FilterButtons({
  genresFilter,
  setDisplayMovies,
  allMovies,
}) {
  const [activeId, setActiveId] = useState(1);
  const categories = [
    { genre: "All", id: 1 },
    { genre: "Action", id: 28 },
    { genre: "Adventure", id: 12 },
    { genre: "Animation", id: 16 },
    { genre: "Comedy", id: 35 },
    { genre: "Family", id: 10751 },
    { genre: "Fantasy", id: 14 },
    { genre: "Drama", id: 18 },
    { genre: "Romance", id: 10749 },
    { genre: "Horror", id: 27 },
    { genre: "Mystery", id: 9648 },
    { genre: "Thriller", id: 53 },
  ];

  const showMovies = (id) => {
    setActiveId(id);
    if (id === 1) setDisplayMovies(allMovies);
    else {
      const result = genresFilter.filter((genre) => {
        if (genre.id === id) return genre;
      });
      const movies = result[0].movies;
      setDisplayMovies(movies);
    }
  };

  return (
    <div className="filter-buttons mt-4 p-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={8}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          420: {
            slidesPerView: 3,
          },
          567: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 8,
          },
        }}
      >
        {categories.map((category) => {
          return (
            <SwiperSlide className="swiper-slide" key={category.id}>
              <button
                onClick={() => showMovies(category.id)}
                className={category.id === activeId ? "active" : ""}
              >
                {category.genre}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
