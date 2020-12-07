import React, { useState } from "react";
import ActorHeader from "../headerActorList";
import ActorList from "../actorList";

const ActorListPageTemplate = ({ actors, name ,action }) => {
    // const [genderFilter, setgenderFilter] = useState("");
    // const gender = Number(genderFilter)
    let displayedActors = actors;
    // .filter(m => {
    //   return  gender > 0
    //     ? m.genre_ids.includes(Number(genderFilter))
    //     : true;
    // });

    // const handleChange = (value) => {
    //   setgenderFilter(value);
    // }
    return (
        <>
          <ActorHeader name={name} numActors={displayedActors.length} />
          {/* <FilterControls onUserInput={handleChange} numActors={displayedActors.length}/> */}
          <ActorList
           actors={displayedActors}
           action={action}
          />
        </>
      );
};

export default ActorListPageTemplate;