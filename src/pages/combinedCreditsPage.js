import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from '../components/templateMovieListPage'
import {getCombinedCredits} from '../api/tmdb-api'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const CombinedCreditsPage = (props) => {
  const {id} =props.match.params;
  const [movies,SetMovies]=useState([])
  getCombinedCredits(id).then((res)=>{
    SetMovies(res)
  })

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

export default withRouter(CombinedCreditsPage) ;