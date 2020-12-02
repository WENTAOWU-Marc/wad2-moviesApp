import React from "react";
import "./actorDetails.css";

export default ({ actor }) => {
    return (
        <>
          <h4>Biography</h4>
          <p>{actor.biography}</p>
          <ul className="list-group list-group-horizontal">
            <li key="acb" className="list-group-item list-group-item-dark">
              Birthday
            </li>
            <li key="acb" className="list-group-item ">
              {actor.birthday}
            </li>
            <li key="acp" className="list-group-item list-group-item-dark">
               Place of birth
            </li>
            <li key="acp" className="list-group-item ">
              {actor.place_of_birth}
            </li>
            <li key="acpo" className="list-group-item list-group-item-dark">
               Popularity
            </li>
            <li key="acpo" className="list-group-item ">
              {actor.popularity}
            </li>
          </ul>
        </>
      );
}
