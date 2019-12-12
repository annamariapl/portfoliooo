import React from "react";
import Subtitle from "../ReusableComponents/Subtitle";
import Title from "../ReusableComponents/Title";
import "./project.css";
import { LinksWithLine } from "../ReusableComponens/links.jsx";

const ProjectElement = ({ project }) => {
  return (
    <>
      <div className="containerProject">
        <img className="projectImg" src={project.url} />
        <Title title={project.title} />
        <Subtitle subtitle={project.subtitle} />

        <div className="subtitle">
          {project.technologies.map(t => t + " | ")}
        </div>
        <div>{project.description}</div>
        {project.features &&
          Object.entries(project.features).map(feat => (
            <>
              <div className="highlight">{feat[0]}</div>
              <div>{feat[1]}</div>
            </>
          ))}
        <br />
        <p>Project created: {project.date}</p>
        <LinksWithLine classes="project-links" links={project.links} />
      </div>
    </>
  );
};

export default ProjectElement;
