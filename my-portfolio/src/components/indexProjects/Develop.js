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
          <h2 className="mainArea__legend-stack">
            <span>33 </span>
            lenguaje
          </h2>
          <h2 className="mainArea__legend-area">
            <span>22 </span>
            stack
          </h2>
          <h2 className="mainArea__legend-project">
            <span>11 </span>
            herramientas
          </h2>
          <figure className="mainArea__legend-infography">
            <InfoDevelop />
          </figure>
        </section>
        <section className="mainArea__projectViewer" title="projects viewer">
          <div className="mainArea__projectViewer-containerViewer">
            <button
              className="mainArea__projectViewer-containerViewer-btnPrevius"
              aria-label="previous"
            ></button>
            <button
              className="mainArea__projectViewer-containerViewer-btnNext"
              aria-label="next"
            ></button>
            <div className="mainArea__projectViewer-containerViewer-img"></div>
          </div>
          <article className="mainArea__projectViewer-description">
            <h4>titulo</h4>
            <p>Descripcion</p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Develop;
