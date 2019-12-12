import Collapse from "@kunukn/react-collapse";
import React, { Component } from "react";
import Links from "../ReusableComponens/links.jsx";
import TitleWithHorizontalLine from "../ReusableComponens/TitleWithHorizontalLine.jsx";
import SectionHeader from "../ReusableComponens/SectionHeader.jsx";
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
          <SectionHeader id="projects" text="PROJECTS" className="projetcs" />
        </div>
        <Collapse isOpen={openIndex === 1}>
          <div className="projectsContainerAll">
            {projects.map(project => (
              <ProjectElement project={project} />
            ))}
          </div>
          <TitleWithHorizontalLine text="Wordpress pages:" />
          <Links links={wordpressLinks} />
        </Collapse>
      </div>
    );
  }
}

export default Projects;
