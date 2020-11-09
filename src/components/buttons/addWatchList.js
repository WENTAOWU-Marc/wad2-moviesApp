import React from "react";
import { Link } from "react-router-dom";

const WatchListButton = ({ movie }) => {
  return (
    <Link
    className="btn w-100 btn-primary "

    >
      Add to Watch List
    </Link>
  );
};

export default WatchListButton;