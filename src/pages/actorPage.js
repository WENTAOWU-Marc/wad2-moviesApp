import React, { useContext } from "react";
import ActorListPageTemplate from '../components/templateActorListPage'
import {ActorsContext} from '../contexts/actorsContext'
import CombinedCreditsButton from '../components/buttons/combinedCredits'

const ActorListPage = () => {
    const context = useContext(ActorsContext);
    const actors = context.actors;

    return (
       <ActorListPageTemplate 
        name='No. Actors'
        actors={actors}
        action={(actor) =>{
          return <CombinedCreditsButton actor={actor} /> 
        }}
      />
    );
};

export default ActorListPage;