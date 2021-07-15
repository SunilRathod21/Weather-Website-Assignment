import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <h1>
        <Link to="/" className="nav__brand">
          Assignment
        </Link>
      </h1>

      <ul className="nav__links">
        <li>
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
        <li>
          <Link to="/service" className="nav__link">
            Service
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
