import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "../ReusableComponens/SectionHeader.jsx";

const Link = ({ href, icon, text }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" className="links" href={href}>
      {icon} {text}
    </a>
  );
};

const Contact = ({ email }) => (
  <div className="main contact links">
    <SectionHeader id="contact" text="CONTACT:" className="contact" />
    <Link href={"mailto:anna@wojtyga.pl"} icon={<FaEnvelope />} text={email} />
    <Link
      href={"https://github.com/annamariapl"}
      icon={<FaGithub />}
      text={"github"}
    />
    <Link
      href={"https://www.linkedin.com/in/anna-wojtyga/"}
      icon={<FaLinkedin />}
      text={"linkedin"}
    />
  </div>
);

export default Contact;
