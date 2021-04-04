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
      <main className="mainLanding">
        <section
          className="mainLanding__isotype"
          role="figure"
          aria-labelledby="author's isotype"
        >
          <figure className="mainLanding__infographic"></figure>
        </section>
        <aside
          className="mainLanding__menu"
          aria-labelledby="menu"
          role="navigation"
          onMouseMove={changeScreenLanding}
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

export default Landing;
