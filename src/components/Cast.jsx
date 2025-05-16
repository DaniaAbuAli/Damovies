import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Cast({ cast }) {
  return (
    <div className="cast mt-4">
      <h3>Top Cast:</h3>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={5}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 2,
          },
          567: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
        }}
      >
        {cast.map((actor) => {
          const src = `https://image.tmdb.org/t/p/original${actor.profile_path}`;
          return (
            <SwiperSlide className="mt-3 swiper-slide">
              <img src={src} alt="actor-profile" />
              <p className="actor-name">{actor.name}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
