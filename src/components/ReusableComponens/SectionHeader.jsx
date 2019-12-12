import React from "react";
import "../ReusableComponens/links";

const SectionHeader = ({ className, id, text }) => {
  return (
    <h3 id={id} className={className}>
      {text} &#10504;
    </h3>
  );
};

export default SectionHeader;
