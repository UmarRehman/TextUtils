import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export default function Navbar(props) {
  return (
    
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            color:
              props.mode === "dark"
                ? "white"
                : props.mode === "green"
                ? "white"
                : "black",
          }}
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{
                  color:
                    props.mode === "dark"
                      ? "white"
                      : props.mode === "green"
                      ? "white"
                      : "black",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/About"
                style={{
                  color:
                    props.mode === "dark"
                      ? "white"
                      : props.mode === "green"
                      ? "white"
                      : "black",
                }}
              >
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch me-2 ">
            <input
              onClick={props.toggleGreenMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              style={{
                color:
                  props.mode === "dark"
                    ? "white"
                    : props.mode === "green"
                    ? "white"
                    : "black",
              }}
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "green"
                ? "Disable green mode"
                : "Enable green mode"}
            </label>
          </div>
          <div className="form-check form-switch ">
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              style={{
                color:
                  props.mode === "dark"
                    ? "white"
                    : props.mode === "green"
                    ? "white"
                    : "black",
              }}
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "dark" ? "Disable dark mode" : "Enable dark mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
