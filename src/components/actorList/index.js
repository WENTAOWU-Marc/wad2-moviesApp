import React from "react";
import Actor from "../actorCard/";
import "./actorList.css";

const ActorList = ({actors, action}) => {
  const ActorCards = actors.map(a => (
    <Actor key={a.id} actor={a} action={action} />
  ));
  return <div className="row actors bg-info">{ActorCards}</div>;
};

export default ActorList;