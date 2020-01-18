import React from "react";
import Subtitle from "../ReusableComponents/Subtitle";
import Title from "../ReusableComponents/Title";
import "./project.css";
import { LinksWithLine } from "../ReusableComponents/Links/links.jsx";

const ProjectElement = ({ project }) => {
  return (
    <>
      <div className="containerProject">
        <a href={project.linkToProject}>
          <img
            className="projectImg"
            alt={project.pictureUrl}
            src={project.pictureUrl}
          />
        </a>
        <Title title={project.title} />
        <Subtitle subtitle={project.subtitle} />

        <div>
          {project.technologies.map(t => {
            return (
              <span key={t} className="projectLabel">
                {t}
              </span>
            );
          })}
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
        <span className="projectLabel"> {project.date}</span>
        <LinksWithLine
          classes="project-links"
          links={project.additionalLinks}
        />
      </div>
    </>
  );
};

export default ProjectElement;
