import React from "react";
import Header from "./Header";
import Develop from "./subIndex.js/Develop";
import Design from "./subIndex.js/Design";
import Art from "./subIndex.js/Art";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../stylesheets/header.scss";
import "../stylesheets/projects.scss";
// import "../stylesheets/Landing.scss";

const Categories = () => {
  return (
    <>
      <main className="mainProjects">
        <Header className="mainProjects__home" />
        <nav
          className="mainProjects__containerProjects"
          role="navigation"
          aria-labelledby="projects's categories"
        >
          {/* <ul className="containerProjects__listSection"> */}
          <Link to="/project/develop" className="linksSections">
            {/* <li className="containerProjects__listSection-dev">Develop</li> */}
            <div className="mainProjects__containerProjects-infoDev">
              <Develop />
            </div>
          </Link>
          <Link to="/project/design" className="linksSections">
            {/* <li className="containerProjects__listSection-des">
                {" "}
                <Design>Design</Design>
              </li> */}
            <div className="mainProjects__containerProjects-infoDev">
              <Develop />
            </div>
          </Link>
          <Link to="/project/art" className="linksSections">
            {/* <li className="containerProjects__listSection-art">
                {" "}
                <Art>Art</Art>
              </li> */}
            <div className="mainProjects__containerProjects-infoDev">
              <Develop />
            </div>
          </Link>
          {/* </ul> */}
        </nav>
        <aside
          className="mainProjects__menu"
          aria-labelledby="menu"
          role="navigation"
        >
          <ul className="menu__list">
            <Link to="/projects" className="menu__list-linkProjects">
              <li className="menu__list-linkProjects-projects"> Proyectos</li>
            </Link>
            <Link to="/about" className="menu__list-linkAbout">
              <li className="menu__list-linkAbout-about"> Sobre mí</li>
            </Link>
          </ul>
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default Categories;
