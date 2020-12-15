import React from "react";
import { Link } from "react-router-dom";
import "./actorCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActorCard = ({actor,action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/actors/${actor.id}`}>
        <img
          className="card-img-tag center "
          alt={actor.name}
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{actor.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {actor.popularity}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(actor)}
        </div>
      </div>
    </div>
    
  );
};

export default ActorCard;