import React from "react";
import "../stylesheets/FooterScreen.scss";
const FooterScreen = () => {
  return (
    <footer className="footerScreen">
      <nav className="footerScreen__menu">
        <ul className="footerScreen__menuList">
          <li className="footerScreen__menuList-notion">
            <a
              href="https://www.notion.com"
              target="_blank"
              rel="noreferrer"
              title="access Notion"
              className="footerScreen__menuList-into"
            >
              {" "}
            </a>
          </li>
          <li className="footerScreen__menuList-gitHub">
            <a
              href="https://github.com/EstiBv"
              target="_blank"
              rel="noreferrer"
              title="access gitHub"
              className="footerScreen__menuList-into"
            >
              {" "}
            </a>
          </li>
          <li className="footerScreen__menuList-email">
            <a
              href="mailto: estibalizbarato@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="send email"
              className="footerScreen__menuList-into"
            >
              {" "}
            </a>
          </li>
          <li className="footerScreen__menuList-linkedin">
            <a
              href="https://www.linkedin.com/in/estibalizbarato/"
              target="_blank"
              rel="noreferrer"
              title="access linkedin"
              className="footerScreen__menuList-into"
            >
              {" "}
            </a>
          </li>
          <li className="footerScreen__menuList-behance">
            <a
              href="https://www.behance.net/estibalizbarato"
              target="_blank"
              rel="noreferrer"
              title="access behance"
              className="footerScreen__menuList-into"
            >
              {" "}
            </a>
          </li>
        </ul>
      </nav>
      <small className="footerScreen__copy">
        <span>© 2021 por Estíbaliz Barato</span>
      </small>
    </footer>
  );
};

export default FooterScreen;
