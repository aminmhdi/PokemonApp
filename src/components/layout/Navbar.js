import React from "react";
import { Github } from "react-bootstrap-icons";
import { Navbar } from "react-bootstrap";
import PropTyes from "prop-types";

const AppNavbar = ({ title }) => {
  return (
    <Navbar className="navbar-expand-lg navbar-light bg-light">
      <a
        className="navbar-brand px-4"
        href="/"
      >
        <Github /> {title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/about"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};
AppNavbar.defaultProps = {
  title: "Pokemon App",
  icon: "Github"
};

AppNavbar.propTyes = {
  title: PropTyes.string.isRequired,
  icon: PropTyes.string.isRequired
};
export default AppNavbar;
