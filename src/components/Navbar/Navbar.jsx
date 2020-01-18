import React from "react";
import Links from "../ReusableComponents/Links/links";
import { linksHeader } from "./data.js";

const Navbar = ({ text }) => (
  <div className="header">
    <div>
      <h2 className="accent-color header-text"> {text}</h2>
      <p className="accent-color">JUNIOR FRONTEND DEVELOPER </p>
    </div>
    <Links classes="spread-elements" links={linksHeader}></Links>
  </div>
);

export default Navbar;
