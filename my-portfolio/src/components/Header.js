import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" role="button" className="burger">
      <button className="burger_buttonHome" aria-label="home"></button>
    </Link>
  );
};

export default Header;
