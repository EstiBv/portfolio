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
      <main>
        <article>
          <h2>
            <span>33 </span>
            lenguaje
          </h2>
          <h2>
            <span>22 </span>
            stack
          </h2>
          <h2>
            <span>11 </span>
            herramientas
          </h2>
          <figure>
            <InfoDevelop />
          </figure>
        </article>
        <section>
          <div className="backgroundImg">
            <button className="button1">buton1</button>
            <button className="button2">button2</button>
            <div className="backgroundImg2">IMG</div>
          </div>
          <article className="imgDescription">
            <h4>titulo</h4>
            <p>Descripcion</p>
          </article>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Develop;
