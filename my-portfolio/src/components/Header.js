import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" role="button">
      <button className="homeHeaderProjects"></button>
    </Link>
  );
};

export default Header;
