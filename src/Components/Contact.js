import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__left">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <Link className="btn__secondary" to="/contact">
          Read More &rarr;
        </Link>
      </div>
      <div className="contact__right">
        <form>
          <div>
            <label>Full Name</label>
            <input type="text" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required />
          </div>

          <div>
            <label>Message</label>
            <textarea type="text" required rows="4"></textarea>
          </div>
          <button className="btn__primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
