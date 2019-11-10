import React from "react";

const Skill = props => {
  const { icon, name, level } = props;
  return (
    <div className="skill">
      <div className="skill-icon">{icon}</div>
      <h3>{name}</h3>
      {level}
    </div>
  );
};

export default Skill;
