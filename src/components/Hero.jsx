import hero1 from "../assets/images/hero1.webp";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.jpg";

export default function Hero() {
  return (
    <div
      id="carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={hero1}
            className="d-block w-100"
            alt="Disney Molan movie poster"
          />
        </div>
        <div className="carousel-item">
          <img
            src={hero2}
            className="d-block w-100"
            alt="Disney Cars movie poster"
          />
        </div>
        <div className="carousel-item">
          <img
            src={hero3}
            className="d-block w-100"
            alt="Disney Maleficent movie poster"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
