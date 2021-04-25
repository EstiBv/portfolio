import React from "react";
import InfoDevelop from "./infographics/InfoDevelop";
import "../../stylesheets/pages/develop.scss";
import Header from "../Header";
import Footer from "../Footer";

const Develop = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mainArea">
        <section className="mainArea__legend" title="infographic legend">
          <h2 className="mainArea__legend-tools">
            <span className="mainArea__legend-tools-language"></span>
            lenguaje
          </h2>
          <h2 className="mainArea__legend-stack">
            <span className="mainArea__legend-stack-tech"> </span>
            proyecto
          </h2>
          <h2 className="mainArea__legend-area">
            <span className="mainArea__legend-area-circle"> </span>
            área
          </h2>
          <figure className="mainArea__legend-infography">
            <InfoDevelop />
          </figure>
        </section>
        <section className="mainArea__projectViewer" title="projects viewer">
          <div className="mainArea__projectViewer-containerViewer">
            <div className="mainArea__projectViewer-containerViewer-img">
              <a
                href="https://github.com/EstiBv/task-schedule"
                title="go to project's repository"
                rel="noreferrer"
                target="_blank"
                className="mainArea__projectViewer-containerViewer-img-linkGitHub"
              >
                Ir al repositorio del proyecto
              </a>
              <button
                className="mainArea__projectViewer-containerViewer-btnPrevius"
                aria-label="previous"
              ></button>
              <button
                className="mainArea__projectViewer-containerViewer-btnNext"
                aria-label="next"
              ></button>
            </div>
          </div>
          <article className="mainArea__projectViewer-description">
            <h4>Título</h4>
            <p>Descripción</p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Develop;
