import React,{ Suspense } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import WatchListMoviesPage from './pages/watchListPage'
import ActorListPage from './pages/actorPage';
import ActorsContextProvider from "./contexts/actorsContext";
import NowplayingMovieListPage from "./pages/nowplayingPage";
import ActorPage from './pages/actorDetailsPage';
import CombinedCreditsPage from './pages/combinedCreditsPage';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebaseConfig';
import LoginPage from './pages/loginPage'



const App = () => {
  
  
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader /> 
      <div className="container-fluid">
        <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
          <ActorsContextProvider>
            <Switch>
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/actors/combinedcredits/:id" component={CombinedCreditsPage} />
            <Route exact path="/actors/actor" component={ActorListPage} />
            <Route exact path="/movies/nowplayings" component={NowplayingMovieListPage} />
            <Route exact path="/movies/watchlist" component={WatchListMoviesPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route exact path="/movies/upcomings" component={UpcomingMoviesPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/actors/:id" component={ActorPage} />
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
            </Switch>
          </ActorsContextProvider>
          </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
 </BrowserRouter>  
 );
};

//JSX语法
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<h3>Loading...</h3>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);