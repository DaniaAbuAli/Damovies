import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MostPopular from "../components/MostPopular";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Home() {
  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [mostPopularMoviesLoading, setMostPopularMoviesLoading] =
    useState(true);
  const apiKey =import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_companies=2&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((result) => {
        const results = result.results;
        const movies = [];
        for (let i = 0; i < 7; i++) {
          movies.push({
            id: results[i].id,
            poster: results[i].poster_path,
            vote_average: results[i].vote_average,
            title: results[i].title,
          });
        }
        setMostPopularMovies(movies);
        setMostPopularMoviesLoading(false);
      });
  }, []);
  useEffect(() => {
    const fetchMovies = async () => {
      let results = [];
      for (let i = 1; i <= 22; i++) {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_companies=2&page=${i}`
        );
        const result = await response.json();
        const data = result.results;
        for (let j = 0; j < data.length; j++) {
          const movie = data[j];
          if (movie.poster_path !== null) {
            results.push({
              id: movie.id,
              poster: movie.poster_path,
              genre: movie.genre_ids,
              title: movie.original_title,
              vote: movie.vote_average,
            });
          }
        }
      }
      const uniqueMovies = Array.from(
        new Map(results.map((movie) => [movie.id, movie])).values()
      );

      setAllMovies(uniqueMovies);
      setCategoriesLoading(false);
    };
    fetchMovies();
  }, []);

  if (mostPopularMoviesLoading || categoriesLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <Navbar />
        <Hero />
        <MostPopular mostPopularMovies={mostPopularMovies} />
        <Categories allMovies={allMovies} />
        <Footer />
      </>
    );
  }
}
