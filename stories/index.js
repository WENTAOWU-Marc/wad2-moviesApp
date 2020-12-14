import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import ActorDetails from "../src/components/actorDetails";
import ActorCard from "../src/components/actorCard";
import ActorList from "../src/components/actorList";
import Login from "../src/components/authorization/logIn";
import Signup from "../src/components/authorization/signUp";
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from '../src/firebaseConfig';
import Logout from "../src/components/authorization/logout"

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const actor = {
    "adult": false,
    "gender": 2,
    "id": 500,
    "biography": "An American actor and filmmaker. He has been nominated for three Academy Awards and has won three Golden Globe Awards. He started his career at age 19 in the 1981 film Endless Love. After portraying supporting roles in Taps (1981) and The Outsiders (1983), his first leading role was in Risky Business, released in August 1983. Cruise became a full-fledged movie star after starring as Pete \"Maverick\" Mitchell in Top Gun (1986). He has since 1996 been well known for his role as secret agent Ethan Hunt in the Mission: Impossible film series. One of the biggest movie stars in Hollywood, Cruise has starred in many successful films, including The Color of Money (1986), Cocktail (1988), Rain Man (1988), Born on the Fourth of July (1989), Far and Away(1992), A Few Good Men (1992), The Firm (1993), Interview with the Vampire: The Vampire Chronicles (1994), Jerry Maguire (1996), Eyes Wide Shut (1999), Magnolia (1999), Vanilla Sky (2001), Minority Report (2002),The Last Samurai (2003), Collateral (2004), War of the Worlds (2005), Lions for Lambs (2007), Valkyrie (2008), Knight and Day (2010), Jack Reacher (2012), Oblivion (2013), and Edge of Tomorrow (2014). In 2012, Cruise was Hollywood's highest-paid actor. Fifteen of his films grossed over $100 million domestically; twenty-one have grossed in excess of $200 million worldwide. Cruise is known for his support for the Church of Scientology and its affiliated social programs.",
    "birthday": "1962-07-03",
    "place_of_birth": "Syracuse, New York, USA",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/auZIuHEUec5tBTns3tCRXfayxZq.jpg",
        "genre_ids": [
          28,
          878
        ],
        "id": 137113,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Edge of Tomorrow",
        "overview": "Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
        "poster_path": "/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
        "release_date": "2014-05-27",
        "title": "Edge of Tomorrow",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 10066
      },
      {
        "adult": false,
        "backdrop_path": "/Pv6vu1lxgct3GWhUXVVOMZwNlZ.jpg",
        "genre_ids": [
          28,
          878,
          12,
          9648
        ],
        "id": 75612,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Oblivion",
        "overview": "Jack Harper is one of the last few drone repairmen stationed on Earth.  Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jack’s mission is nearly complete.  His existence is brought crashing down when he rescues a beautiful  stranger from a downed spacecraft.  Her arrival triggers a chain of events that  forces him to question everything he knows and puts the fate of humanity in his hands.",
        "poster_path": "/2ncs7hqBsEjFMqt6Y7ShBCO9tWs.jpg",
        "release_date": "2013-04-10",
        "title": "Oblivion",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 8250
      },
      {
        "adult": false,
        "backdrop_path": "/hqyjzDRCs1N5gEsh2gklzPdsEFD.jpg",
        "genre_ids": [
          28,
          53,
          12
        ],
        "id": 56292,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Mission: Impossible - Ghost Protocol",
        "overview": "Ethan Hunt and his team are racing against time to track down a dangerous terrorist named Hendricks, who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
        "poster_path": "/7GCKNRbzcA4rJXAKoE8KS9IDnZP.jpg",
        "release_date": "2011-12-07",
        "title": "Mission: Impossible - Ghost Protocol",
        "video": false,
        "vote_average": 7,
        "vote_count": 7333
      }
    ],
    "known_for_department": "Acting",
    "name": "Tom Cruise",
    "popularity": 27.424,
    "profile_path": "/gThaIXgpCm3PCiXwFNDBJCme85y.jpg"
}

storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);

//actors
storiesOf("Actor Page/ActorCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <ActorCard
      actor={actor}
      action={actors => <button className="btn w-100 btn-primary">Test</button>}
    />
  ));

  storiesOf("Actor Page/ActorList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const actors = [actor, actor, actor, actor, actor];
    return (
      <ActorList
        actors={actors}
        action={actors => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

  storiesOf("Actor Details Page/ActorDetails", module).add("default", () => (
    <ActorDetails actor={actor} />
  ));

  storiesOf("Authorization Page/Login Page", module).add("default", () => (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Login />
    </FirebaseAppProvider>
  ));
  
  
  storiesOf("Authorization Page/Signup Page", module).add("default", () => (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Signup />
    </FirebaseAppProvider>
  ));
  
  storiesOf("Authorization Page/Logout Page", module).add("default", () => (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Logout />
    </FirebaseAppProvider>
  ));

  storiesOf("Actor Page/siteHeader", module).add("default", () => (
    <ActorDetails actor={actor} />
  ));