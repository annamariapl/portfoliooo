import React from "react";
import "./links";

const TitleWithHorizontalLine = ({ text }) => {
  return (
    <>
      <hr />
      <h4>
        <br />
        {text}
      </h4>
    </>
  );
};

export default TitleWithHorizontalLine;
