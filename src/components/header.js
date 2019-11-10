import React from "react";
import Links from "./links";

const Header = ({ text }) => (
  <div className="header">
    <h2 className="accent-color header-text"> {text} </h2>
    <div>
      <Links
        classes="spread-elements"
        links={[
          {
            text: "about",
            link: "#about"
          },
          {
            text: "skills",
            link: "#skills"
          },
          {
            text: "projects",
            link: "#projects"
          },
          {
            text: "github",
            link: "#github"
          },
          {
            text: "contact",
            link: "#contact"
          }
        ]}
      ></Links>{" "}
    </div>{" "}
  </div>
);

export default Header;
