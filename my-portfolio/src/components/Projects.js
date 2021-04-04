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
        <section
          className="mainProjects__containerProjects"
          role="list"
          aria-labelledby="projects's categories"
        >
          <ul className="containerProjects__listSection">
            <li className="containerProjects__listSection-dev">
              <Link to="/project/develop">
                <Develop>Develop</Develop>
              </Link>
            </li>
            <li className="containerProjects__listSection-des">
              {" "}
              <Link to="/project/design">
                <Design>Design</Design>
              </Link>
            </li>
            <li className="containerProjects__listSection-art">
              {" "}
              <Link to="/project/art">
                <Art>Art</Art>
              </Link>
            </li>
          </ul>
        </section>
        <aside className="mainProjects__menu" aria-labelledby="menu">
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
