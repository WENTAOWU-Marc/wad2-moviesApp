import React, { useEffect, createContext, useReducer } from "react";
import { getActors } from "../api/tmdb-api";

export const ActorsContext = createContext(null);

const reducer = (state, action) => {
    switch(action.type){
        case "load-actors":
            return { actors: action.payload.actors };
        case "combined-credits":
            return{};
        default: 
        return state;
    }
}

const ActorsContextProvider = (props) => {
    const[state, dispatch] = useReducer(reducer,{ actors : [] });

    useEffect(() => {
        getActors().then((actors) => {
          dispatch({ type: "load-actors", payload: { actors } });
        });
      }, []);

    return(
      <ActorsContext.Provider
        value ={{
            actors : state.actors,
            actorId : state.actors.id
        }} 
        >
        {props.children}
      </ActorsContext.Provider>
    );
};

export default ActorsContextProvider;