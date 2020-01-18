import React from "react";
import "./links.css";

const Links = ({ classes, links }) => (
  <div className={`links ${classes}`}>
    {links &&
      links.map((item, index) => (
        <div key={index}>
          <a href={item.link} className="singleLink">
            {" "}
            {item.text}{" "}
          </a>
        </div>
      ))}
  </div>
);

export default Links;

export const LinksWithLine = ({ classes, links }) => {
  return (
    <>
      <hr />
      <Links classes={classes} links={links} />
    </>
  );
};
