import React from "react";
import Links from "../ReusableComponens/links";
import { linksHeader } from "./data.js";

const Header = ({ text }) => (
  <div className="header">
    <div>
      <h2 className="accent-color header-text"> {text}</h2>
      <p className="accent-color">JUNIOR FRONTEND DEVELOPER </p>
    </div>
    <Links classes="spread-elements" links={linksHeader}></Links>
  </div>
);

export default Header;
