import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = props => (
  <div className="main contact">
    <h3 id="contact" className="section-title">
      CONTACT:
    </h3>
    <br />
    <p>
      {<FaPhone />} {props.phoneNumber}
    </p>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link-contact links"
      href="mailto:anna@wojtyga.pl"
    >
      <p>
        {<FaEnvelope />} email: {props.email}
      </p>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link-contact"
      href="https://github.com/annamariapl"
    >
      <p> {<FaGithub />} github</p>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link-contact"
      href="https://www.linkedin.com/in/anna-wojtyga/"
    >
      <p> {<FaLinkedin />} linkedin </p>
    </a>
  </div>
);

export default Contact;
