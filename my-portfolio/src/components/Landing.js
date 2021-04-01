import React from "react";
import Footer from "./Footer";
import "../stylesheets/Landing.scss";

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
            <li className="main__menu-list-projects">
              <a
                title="projects"
                href="/projects"
                className="main__menu-list-projectsLink"
              >
                <span className="main__menu-list-projects-link">Proyectos</span>
              </a>
            </li>
            <li className="main__menu-list-about">
              <a
                title="about"
                href="/about"
                className="main__menu-list-aboutLink"
              >
                <span className="main__menu-list-about-link">Sobre mí</span>
              </a>
            </li>
          </ul>
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
