import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const CombinedCreditsPage = () => {
    const context = useContext(MoviesContext);
    const movies = context.movies;

    return (
        <PageTemplate 
          title='Combined Credits'
          movies={movies}
          action={(movie) => {
            return <AddToFavoritesButton movie={movie} /> 
          }}
        />
    );
};

export default CombinedCreditsPage ;