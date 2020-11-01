import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import {getUpcomingMovie} from "../api/tmdb-api"
import PageTemplate from '../components/templateMovieListPage'

const UpcomingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getUpcomingMovie().then(movies => {
        setMovies(movies);
      });
    }, []);  

    const addToFavorites = movieId => {
        setMovies(movies => {
          const index = movies.map(m => m.id).indexOf(movieId);
          StubAPI.add(movies[index]);
          let newMoviesState = [...movies]
          newMoviesState.splice(index, 1);
          return newMoviesState;
        });
      };

    return (
      <PageTemplate
        movies={movies}
        title={"Upcoming Movies"}
        buttonHandler={addToFavorites}
      />
    );
  };

  export default UpcomingMoviesPage;