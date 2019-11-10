import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = ({ email }) => (
  <div className="main contact">
    <h3 id="contact" className="section-title">
      CONTACT:
    </h3>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link-contact links"
      href="mailto:anna@wojtyga.pl"
    >
      <FaEnvelope /> {email}
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link-contact"
      href="https://github.com/annamariapl"
    >
      <p>
        <FaGithub /> github
      </p>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link-contact"
      href="https://www.linkedin.com/in/anna-wojtyga/"
    >
      <p>
        <FaLinkedin /> linkedin
      </p>
    </a>
  </div>
);

export default Contact;
