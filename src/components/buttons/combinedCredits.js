import React from "react";
import { Link } from "react-router-dom";


const CombinedCreditsButton =({actor}) =>{
    return(
        <Link
        className="btn w-100 btn-primary "
      to={{
        pathname: `/actors/combinedcredits/${actor.id}`, 
    }}
    >
        Combined Credits
        </Link>
    );
};

export default CombinedCreditsButton;