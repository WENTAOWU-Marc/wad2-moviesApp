import React,{ lazy,Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebaseConfig';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//providers
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import ActorsContextProvider from "./contexts/actorsContext";
// import HomePage from "./pages/homePage";
// import MoviePage from './pages/movieDetailsPage'
// import FavoriteMoviesPage from './pages/favoritesMoviesPage'  
// import MovieReviewPage from "./pages/movieReviewPage";
// import SiteHeader from './components/siteHeader'
// import UpcomingMoviesPage from './pages/upcomingMoviesPage'
// import AddMovieReviewPage from './pages/addMovieReviewPage'
// import WatchListMoviesPage from './pages/watchListPage'
// import ActorListPage from './pages/actorPage';
// import NowplayingMovieListPage from "./pages/nowplayingPage";
// import ActorPage from './pages/actorDetailsPage';
// import CombinedCreditsPage from './pages/combinedCreditsPage';
// import LoginPage from './pages/loginPage'
// import Signup from "./components/authorization/signUp";

//pages
const HomePage = lazy(() => import("./pages/homePage"))
const MoviePage = lazy(() => import("./pages/movieDetailsPage"))
const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"))
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"))
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"))
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"))
const WatchListMoviesPage = lazy(() => import("./pages/watchListPage"))
const ActorListPage = lazy(() => import("./pages/actorPage"))
const NowplayingMovieListPage = lazy(() => import("./pages/nowplayingPage"))
const ActorPage = lazy(() => import("./pages/actorDetailsPage"))
const CombinedCreditsPage = lazy(() => import("./pages/combinedCreditsPage"))
const LoginPage = lazy(() => import("./pages/loginPage"))
//components
const Signup = lazy(() => import("./components/authorization/signUp"))
const SiteHeader = lazy(() => import("./components/siteHeader"))








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
            <Route path='/signup' component={Signup} />
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