import React from "react";
import Develop from "./subIndex.js/Develop";
import Design from "./subIndex.js/Design";
import Art from "./subIndex.js/Art";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div>Hola projects</div>
      <ul>
        <li>
          <Link to="/project/develop">
            <Develop>Develop</Develop>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/project/design">
            <Design>Design</Design>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/project/art">
            <Art>Art</Art>
          </Link>
        </li>
      </ul>

      <Footer />
    </>
  );
};

export default Categories;
