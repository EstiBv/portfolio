import React from "react";
import Header from "./Header";
import Develop from "./indexProjects/Develop";
import Design from "./indexProjects/Design";
import Art from "./indexProjects/Art";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../stylesheets/header.scss";
import "../stylesheets/projects.scss";

const Categories = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mainProjects">
        <nav
          className="mainProjects__containerProjects"
          role="navigation"
          aria-labelledby="projects's categories"
        >
          <Link
            to="/project/develop"
            className="mainProjects__devProjects linksSections"
          >
            <figure
              className="mainProjects__containerProjects-develop"
              role="img"
            >
              <Develop />
              <figcaption className="mainProjects__containerProjects-textDev">
                Develop
              </figcaption>
            </figure>
          </Link>
          <Link
            to="/project/design"
            className="mainProjects__desProjects linksSections"
          >
            <figure
              className="mainProjects__containerProjects-design"
              role="img"
            >
              <Design />
              <figcaption className="mainProjects__containerProjects-textDes">
                Design
              </figcaption>
            </figure>
          </Link>
          <Link
            to="/project/art"
            className="mainProjects__artProjects linksSections"
          >
            <figure className="mainProjects__containerProjects-art" role="img">
              <Art />
              <figcaption className="mainProjects__containerProjects-textArt">
                Art
              </figcaption>
            </figure>
          </Link>
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
