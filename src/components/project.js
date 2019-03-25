import React from "react";

const Project = props => {
	const { thumbnail, name, children, description } = props;
	return (
		<div className="project">
		<div className="thumbnail">{thumbnail}</div>
		<h2 className="accent-pink">{name}</h2>
		<p className="project-description">{description}</p>
		{children}
		</div>
		);
};
export default Project;



