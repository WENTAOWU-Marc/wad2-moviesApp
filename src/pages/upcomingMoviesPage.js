import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchListButton  from '../components/buttons/addToWatchList'

const UpcomingMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("upcoming" in m);
  });
  
  return (
      <PageTemplate 
        title='Upcoming Movies'
        movies={movies}
        action={(movie) => {
          return <WatchListButton upcoming={movie} /> 
        }}
      />
  );
};

export default UpcomingMovieListPage;