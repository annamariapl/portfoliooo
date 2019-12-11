import React from "react";

const Skill = props => {
  const { icon, name } = props;
  return (
    <div className="skill">
      <div className="skill-icon">{icon}</div>
      <div className="skill-text">{name}</div>
    </div>
  );
};

export default Skill;
