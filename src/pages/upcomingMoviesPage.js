import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchListButton  from '../components/buttons/addWatchList'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });
  
  return (
      <PageTemplate 
        title='Upcoming Movies'
        movies={movies}
        action={(movie) => {
          return <WatchListButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;