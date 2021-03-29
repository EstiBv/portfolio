import React from "react";
import "../stylesheets/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__menu">
        <ul className="footer__menuList">
          <li className="footer__menuList-notion">
            <a
              href="https://www.notion.com"
              target="_blank"
              rel="noreferrer"
              title="access Notion"
              className="footer__menuList-into"
            >
              {" "}
            </a>
          </li>
          <li className="footer__menuList-gitHub">
            <a
              href="https://github.com/EstiBv"
              target="_blank"
              rel="noreferrer"
              title="access gitHub"
              className="footer__menuList-into"
            >
              {" "}
            </a>
          </li>
          <li className="footer__menuList-email">
            <a
              href="mailto: estibalizbarato@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="send email"
              className="footer__menuList-into"
            >
              {" "}
            </a>
          </li>
          <li className="footer__menuList-linkedin">
            <a
              href="https://www.linkedin.com/in/estibalizbarato/"
              target="_blank"
              rel="noreferrer"
              title="access linkedin"
              className="footer__menuList-into"
            >
              {" "}
            </a>
          </li>
          <li className="footer__menuList-behance">
            <a
              href="https://www.behance.net/estibalizbarato"
              target="_blank"
              rel="noreferrer"
              title="access behance"
              className="footer__menuList-into"
            >
              {" "}
            </a>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">
        <span>© 2021 por Estíbaliz Barato</span>
      </small>
    </footer>
  );
};

export default Footer;
