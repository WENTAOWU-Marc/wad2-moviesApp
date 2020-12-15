import React from "react";
import { withRouter } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import TemplateActorPage from "../components/templateActorPage";
import useActor from "../hooks/useActor";

const ActorPage = props => {
  const { id } = props.match.params;
  const [actor] = useActor(id)  // NEW
  return (
    <>
    {actor ? (
      <>
        <TemplateActorPage actor={actor}>
          <ActorDetails actor={actor} />
        </TemplateActorPage>
      </>
    ) : (
      <p>Waiting for actor details</p>
    )}
  </>
  );
};

export default withRouter(ActorPage);
