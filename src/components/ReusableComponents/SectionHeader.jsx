import React from "react";
import "./Links/links.jsx";

const SectionHeader = ({ className, id, text }) => {
  return (
    <h3 id={id} className={className}>
      {text}
    </h3>
  );
};

export default SectionHeader;
