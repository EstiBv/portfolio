import React from "react";
import Header from "./Header";
import InfoDevelop from "../components/indexProjects/infographics/InfoDevelop";
import InfoDesign from "../components/indexProjects/infographics/InfoDesign";
import InfoArt from "../components/indexProjects/infographics/InfoArt";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../stylesheets/header.scss";
import "../stylesheets/projects.scss";
import "../stylesheets/Landing.scss";

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
              <InfoDevelop />
              <figcaption className="mainProjects__containerProjects-text">
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
              <InfoDesign />
              <figcaption className="mainProjects__containerProjects-text">
                Design
              </figcaption>
            </figure>
          </Link>
          <Link
            to="/project/art"
            className="mainProjects__artProjects linksSections"
          >
            <figure className="mainProjects__containerProjects-art" role="img">
              <InfoArt />
              <figcaption className="mainProjects__containerProjects-text">
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
          <ul className="menu__listPyA">
            <Link to="/projects" className="menu__listPyA-linkProjectsPyA">
              <li className="menu__listPyA-linkProjectsPyA-projectsPyA">
                {" "}
                Proyectos
              </li>
            </Link>
            <Link to="/about" className="menu__listPyA-linkAboutPyA">
              <li className="menu__listPyA-linkAboutPyA-aboutPyA"> Sobre mí</li>
            </Link>
          </ul>
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default Categories;
