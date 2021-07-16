import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "./style.css";
const About = () => {
  return (
    <div className="about">
      <div className="about__left">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <Link className="btn__secondary" to="/about">
          Read More &rarr;
        </Link>
      </div>
      <div className="about__right">
        <img src="About.svg" alt="About" />
      </div>
    </div>
  );
};

export default About;
