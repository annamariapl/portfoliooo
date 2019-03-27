import React from "react";

const Project = props => {
	const { thumbnail, name, children, description, projectUrl, projectInfo } = props;
	return (
		<div className="project">
		<h2 className="accent-color title">{name}</h2>

		<a target="_blank" href={projectUrl}> 	
		<div className="project-container">
		<div className="thumbnail"> {thumbnail}</div>  
		<div className="project-info"> 
		<div className="project-bold-div"><span className="bold"> Details <br/> </span></div> {projectInfo}</div>
		</div>
		<div className="project-description"> 
		<div className="project-bold-div"><span className="bold">About Project: <br/> </span></div> 
		{description}</div>
		</a>
		{children}
		</div>

		
		);
};
export default Project;



