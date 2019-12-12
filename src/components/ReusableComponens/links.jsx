import React from "react";
import "../ReusableComponens/links";

const Links = ({ classes, links }) => {
  return (
    <div className={`links ${classes}`}>
      {links &&
        links.map((item, index) => (
          <div className="sinlge-link-header" key={index}>
            <a href={item.link}> {item.text} </a>
          </div>
        ))}
    </div>
  );
};

export default Links;

export const LinksWithLine = ({ classes, links }) => {
  return (
    <>
      <hr />
      <Links classes={classes} links={links} />
    </>
  );
};
