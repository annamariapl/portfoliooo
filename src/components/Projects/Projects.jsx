import Collapse from "@kunukn/react-collapse";
import React, { Component } from "react";
import Links from "../ReusableComponens/links.jsx";
import TitleWithHorizontalLine from "../ReusableComponens/TitleWithHorizontalLine.jsx";
import SectionHeader from "../ReusableComponens/SectionHeader.jsx";
import { projects, wordpressLinks } from "./dataFile";
import ProjectElement from "./ProjectElement.jsx";
import Infobox from "../ReusableComponents/Infobox.jsx";

export const standardPadding = 50;

class Projects extends Component {
  state = { openIndex: 1 };

  handleAClick = index => {
    const { openIndex } = this.state;
    this.setState({ openIndex: openIndex === index ? 1 : index });
  };

  render() {
    const { openIndex } = this.state;
    return (
      <div className="main projects">
        <div onClick={() => this.handleAClick(-1)} className="projetcs">
          <SectionHeader id="projects" text="PROJECTS" className="projetcs" />
          <Infobox text="With the exprience I have gained during my internship at Small Improvements Software GmbH (2019) I would approach many of my older projects differently." />
        </div>
        <Collapse isOpen={openIndex === 1}>
          <div className="projectsContainerAll">
            {projects.map(project => (
              <ProjectElement key={project.title} project={project} />
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
