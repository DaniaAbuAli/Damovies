import { useEffect, useState } from "react";
import FilterButtons from "./FilterButtons";
import Movies from "./Movies";

export default function Categories({allMovies}) {
  const [genresFilter, setGenresFilter] = useState([
    { genre: "Action", id: 28, movies: [] },
    { genre: "Adventure", id: 12, movies: [] },
    { genre: "Animation", id: 16, movies: [] },
    { genre: "Comedy", id: 35, movies: [] },
    { genre: "Family", id: 10751, movies: [] },
    { genre: "Fantasy", id: 14, movies: [] },
    { genre: "Drama", id: 18, movies: [] },
    { genre: "Romance", id: 10749, movies: [] },
    { genre: "Horror", id: 27, movies: [] },
    { genre: "Mystery", id: 9648, movies: [] },
    { genre: "Thriller", id: 53, movies: [] },
  ]);
  const [displayMovies, setDisplayMovies] = useState([]);
  
  useEffect(() => {
    if (allMovies.length > 0) setDisplayMovies(allMovies);
  }, [allMovies]);
  useEffect(() => {
    const updateGenresFilter = [...genresFilter];
    for (let i = 0; i < allMovies.length; i++) {
      const genres = allMovies[i].genre;
      for (let j = 0; j < genresFilter.length; j++) {
        for (let k = 0; k < genres.length; k++) {
          if (genresFilter[j].id === genres[k]) {
            if (
              !updateGenresFilter[j].movies.some(
                (movie) => movie.id === allMovies[i].id
              )
            ) {
              updateGenresFilter[j].movies.push(allMovies[i]);
            }
          }
        }
      }
    }
    setGenresFilter(updateGenresFilter);
  }, [allMovies]);

  return (
    <div className="categories">
      <div className="container">
        <FilterButtons
          genresFilter={genresFilter}
          setDisplayMovies={setDisplayMovies}
          allMovies={allMovies}
        />
        <Movies displayMovies={displayMovies} source="categories" />
      </div>
    </div>
  );
}
