import Navbar from "../components/Navbar";
import Movies from "../components/Movies";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
export default function WatchList() {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchList(movies);
  }, []);

  return (
    <div className="watchlist">
      <Navbar />
      <div className="container">
        <Movies displayMovies={watchList} source="watchlist" />
      </div>
    </div>
  );
}
