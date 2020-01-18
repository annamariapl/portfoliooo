import React from "react";

const Title = ({ title }) => {
  return <h3>{title}</h3>;
};

export default Title;

export const TitleWithHorizontalLine = ({ title }) => {
  return (
    <>
      <hr />
      <Title title={title} />
    </>
  );
};
