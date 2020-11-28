import React, { useEffect, createContext, useReducer } from "react";
import { getActors } from "../api/tmdb-api";

export const ActorsContext = createContext(null);

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case "load-actors":
            return { actors: action.payload.actors }
    }
}

const ActorsContextProvider = (props) => {
    const[state,dispatch] = useReducer(reducer,{ actors : [] });

    useEffect(() => {
        getActors().then((actors) => {
          dispatch({ type: "load-actors", payload: { actors } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return(
        <ActorsContext.Provider
        value ={{
            actors : state.actors,
        }} 
        >
        </ActorsContext.Provider>
    );
};

export default ActorsContextProvider;