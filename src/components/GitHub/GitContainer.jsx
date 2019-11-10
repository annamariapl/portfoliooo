import React, { useState } from "react";
import GitHub from "./GitHub.jsx";
import Collapse from "@kunukn/react-collapse";

const GitContainer = ({ myCommits }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = index => {
    if (isOpen === index) {
      setIsOpen(true);
    } else setIsOpen(index);
  };

  return (
    <div className="main">
      <div onClick={() => handleClick(false)}>
        <h3 className="section-title">GIT HUB &#10504;</h3>
      </div>
      <Collapse isOpen={isOpen === true}>
        My last commits <br /> <i>*only from public repositories</i>
        <GitHub myCommits={myCommits} />
      </Collapse>
    </div>
  );
};

export default GitContainer;
