import React from "react";
import "../styles.css";

const Links = ({ classes, links }) => {
  return (
    <div className={`links ${classes}`}>
      {" "}
      {links &&
        links.map((item, index) => (
          <div className="sinlge-link-header" key={index}>
            <a href={item.link}> {item.text} </a>{" "}
          </div>
        ))}{" "}
    </div>
  );
};

export default Links;
