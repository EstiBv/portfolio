import React from "react";
import Footer from "./Footer";
import "../stylesheets/Landing.scss";
import { Link } from "react-router-dom";

const Landing = (props) => {
  const changeScreenLanding = (ev) => {
    props.handleScreenLanding(ev);
    console.log("screen", ev);
  };
  return (
    <>
      <header className="header">
        <button className="home">{/* <a href="/"></a> */}</button>
      </header>
      <main className="main">
        <section
          className="main__isotype"
          role="figure"
          aria-labelledby="author's isotype"
        >
          <figure className="main__infographic"></figure>
        </section>
        <aside
          className="main__menu"
          aria-labelledby="menu"
          onMouseMove={changeScreenLanding}
        >
          <ul className="main__menu-list">
            <Link to="/projects" className="main__menu-list-projects">
              <li className="main__menu-list-projects-link">
                {" "}
                Proyectos
                {/* <a
                  title="projects"
                  href="/projects"
                  className="main__menu-list-projectsLink"
                > */}
                {/* <span className="main__menu-list-projects-link">
                    Proyectos
                  </span>
                </a> */}
              </li>
            </Link>
            <Link to="/about" className="main__menu-list-about">
              <li className="main__menu-list-about-link">
                {" "}
                Sobre mí
                {/* <a
                  title="about"
                  href="/about"
                  className="main__menu-list-aboutLink"
                >
                  <span className="main__menu-list-about-link">Sobre mí</span>
                </a> */}
              </li>
            </Link>
          </ul>
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
