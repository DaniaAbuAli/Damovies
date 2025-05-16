import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DAMOVIES
        </Link>
        <ul className="items d-flex gap-3 gap-md-4 mt-2">
          <li>
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                location.pathname === "/watchList" ? "active" : ""
              }`}
              to="/watchList"
            >
              Watch List
            </Link>
          </li>
        </ul>
        <ul className="icons d-flex gap-3 gap-md-4">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="bi bi-search-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
}
