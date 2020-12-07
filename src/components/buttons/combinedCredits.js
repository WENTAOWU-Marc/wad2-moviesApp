import React from "react";
import { Link } from "react-router-dom";


const CombinedCreditsButton =({ actorid}) =>{
    return(
        <Link
        className="btn w-100 btn-primary "
      to={{
        pathname: `/reviews/form`,
        
    }}
    >
        Combined Credits
        </Link>
    );
};

export default CombinedCreditsButton;