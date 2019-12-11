import Collapse from "@kunukn/react-collapse";
import React, { Component } from "react";
import Links from "../links.jsx";
import { projects, wordpressLinks } from "./dataFile";
import ProjectElement from "./ProjectElement.jsx";

export const standardPadding = 50;

class Projects extends Component {
  state = { openIndex: 1 };

  handleAClick = index => {
    const { openIndex } = this.state;
    this.setState({ openIndex: openIndex === index ? -1 : index });
  };

  render() {
    const { openIndex } = this.state;
    return (
      <div className="main projects">
        <div onClick={() => this.handleAClick(1)} className="projetcs">
          <h3 id="projects" className="section-title">
            PROJECTS &#10504;
          </h3>
        </div>
        <Collapse isOpen={openIndex === -1}>
          <div className="projectsContainerAll">
            {projects.reverse().map(project => (
              <ProjectElement project={project} />
            ))}
          </div>

          <hr />
          <h4>
            <br />
            Wordpress pages:
          </h4>
          <Links links={wordpressLinks} />
        </Collapse>
      </div>
    );
  }
}

export default Projects;
