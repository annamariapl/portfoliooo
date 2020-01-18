import React, { useState } from "react";
import GitHub from "./GitHub.jsx";
import Collapse from "@kunukn/react-collapse";
import SectionHeader from "../ReusableComponents/SectionHeader.jsx";

const GitContainer = ({ myCommits }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = index => {
    if (isOpen === index) {
      setIsOpen(true);
    } else setIsOpen(false);
  };
  return (
    <div className="main">
      <div onClick={() => handleClick(false)}>
        <SectionHeader id="github" text="GIT HUB" />
      </div>

      <Collapse isOpen={isOpen === true}>
        My last 5 commits <br /> <i>*only from public repositories</i>
        <GitHub myCommits={myCommits.slice(0, 5)} />
      </Collapse>
    </div>
  );
};

export default GitContainer;
