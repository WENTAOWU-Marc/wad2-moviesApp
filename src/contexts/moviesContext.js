import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies  } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        // nowplaying: [...state.nowplaying],
      };
    case "add-watchlist":
      return{
        upcoming: state.upcoming.map((m) =>
        m.id === action.payload.upcoming.id ? { ...m, upcoming: true } : m
      ),
      movies: [...state.movies],
      nowplaying: [...state.nowplaying],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], 
        // nowplaying: [...state.nowplaying] 
      };
    case "load-upcoming":
      return { upcoming: action.payload.upcoming, movies: [...state.movies], 
        // nowplaying: [...state.nowplaying]
      };
    // case "load-nowplaying":
    //   return { nowplaying: action.payload.nowplaying, movies: [...state.movies],upcoming: [...state.upcoming]
    //   };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        nowplaying: [...state.nowplaying],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], nowplaying: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchList = (movieId) =>{
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { upcoming: state.upcoming[index] } });
  }

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((upcoming) => {
      dispatch({ type: "load-upcoming", payload: { upcoming } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   getNowPlayingMovies().then((nowplaying) => {
  //     dispatch({ type: "load-nowplaying", payload: { nowplaying } });
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        nowplaying :state.nowplaying,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList: addToWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;