import React from "react";
import FooterScreen from "./FooterScreen";
import "../stylesheets/Screen.scss";

const Screen = () => {
  return (
    <React.Fragment>
      <header className="header">
        <button className="headerHome" title="go to init page"></button>
      </header>
      <main className="mainScreen">
        <section
          className="mainScreen__isotype"
          role="figure"
          aria-labelledby="author's isotype"
        >
          <figure className="mainScreen__infographic"></figure>
        </section>
        <aside className="mainScreen__menu" aria-labelledby="menu">
          <ul className="mainScreen__menu-list">
            <li className="mainScreen__menu-list-projects">
              <a
                title="projects"
                href="/projects"
                className="mainScreen__menu-list-projectsLink"
              >
                <span className="mainScreen__menu-list-projects-link">
                  Proyectos
                </span>
              </a>
            </li>
            <li className="mainScreen__menu-list-about">
              <a
                title="about"
                href="/about"
                className="mainScreen__menu-list-aboutLink"
              >
                <span className="mainScreen__menu-list-about-link">
                  Sobre mí
                </span>
              </a>
            </li>
          </ul>
        </aside>
      </main>
      <FooterScreen />
    </React.Fragment>
  );
};
export default Screen;
