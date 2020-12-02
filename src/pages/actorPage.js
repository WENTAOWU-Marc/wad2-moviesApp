import React, { useContext } from "react";
import ActorListPageTemplate from '../components/templateActorListPage'
import {ActorsContext} from '../contexts/actorsContext'

const ActorListPage = () => {
    const context = useContext(ActorsContext);
    const actors = context.actors;
    console.log(actors)


    return (
       <ActorListPageTemplate 
        name='No. Actors'
        actors={actors}
      />
    );
};

export default ActorListPage;