import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListMoviesPage = props => {
    const context = useContext(MoviesContext);
    // const watchList = context.upcoming.filter( m => m.upcoming );
    const newWatchList = context.nowplaying.filter( n => n.nowplaying) ;
    return (
      <MovieListPageTemplate
        movies={newWatchList}
        title={"Watch List Movies"}
        action={movie => <AddReviewButton movie={movie} />}
      />
    );
  };
  
  export default WatchListMoviesPage;