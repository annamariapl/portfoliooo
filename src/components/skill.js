import React from "react";

// capital S!
const Skill = props => {
	const { icon, name, children } = props;
	return (
		<div className="skill">
		<div className="skill-icon">{icon}</div>
		<h3>{name}</h3>
		{children}
		</div>
		);
};

export default Skill;
