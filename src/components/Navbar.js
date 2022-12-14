import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-left">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
         
           
          </ul>
          {/* <ul className="navbar-nav float-right">
            <li>
              <button type="button" class="btn btn-light">
                Login
              </button>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "set title here"
}