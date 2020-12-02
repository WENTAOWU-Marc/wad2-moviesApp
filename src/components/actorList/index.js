import React from "react";
import Actor from "../actorCard/";
import "./actorList.css";

const ActorList = ({actors}) => {
  const ActorCards = actors.map(a => (
    <Actor key={a.id} actor={a}  />
  ));
  return <div className="row actors bg-info">{ActorCards}</div>;
};

export default ActorList;