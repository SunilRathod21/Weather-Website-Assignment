import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <h1>
        <Link to="/" className="nav__brand">
          Assignment
        </Link>
      </h1>
      <i
        className="fas fa-bars hamburger__icon "
        onClick={() => {
          show ? setShow(false) : setShow(true);
        }}
      ></i>
      <ul className={`nav__links ${show && "open"}`}>
        <li>
          <Link to="/" className="nav__link" onClick={() => setShow(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav__link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/service"
            className="nav__link"
            onClick={() => setShow(false)}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="nav__link"
            onClick={() => setShow(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
