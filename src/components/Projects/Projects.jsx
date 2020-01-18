import Collapse from "@kunukn/react-collapse";
import React, { Component } from "react";
import Links from "../ReusableComponents/Links/links.jsx";
import { TitleWithHorizontalLine } from "../ReusableComponents/Title.jsx";
import SectionHeader from "../ReusableComponents/SectionHeader.jsx";
import { projects, wordpressLinks } from "./dataFile";
import ProjectElement from "./ProjectElement.jsx";
import Infobox from "../ReusableComponents/Infobox/Infobox.jsx";

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
          <Infobox text="With the exprience gained during my internship ( Aug - Dec 2019) I would approach my older projects differently." />
        </div>
        <Collapse isOpen={openIndex === 1}>
          <div className="projectsContainerAll">
            {projects.map(project => (
              <ProjectElement key={project.title} project={project} />
            ))}
          </div>
          <TitleWithHorizontalLine title="WORDPRESS PAGES" />
          <Links classes="spread-elements" links={wordpressLinks} />
        </Collapse>
      </div>
    );
  }
}

export default Projects;
