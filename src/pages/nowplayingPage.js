import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import NowWatchListButton  from '../components/buttons/nowAddToWatchList'

const NowplayingMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowplaying.filter((m) => {  // New
    return !("nowplaying" in m);
  });
  
  return (
      <PageTemplate 
        title='Nowplaying Movies'
        movies={movies}
         action={(movie) => {
           return <NowWatchListButton nowplaying={movie} /> 
        }}
      />
  );
};

export default NowplayingMovieListPage;