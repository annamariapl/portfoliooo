import React, { Component } from "react";
import Project from "./project";
import { FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import "./skills.css";
import styled from "styled-components";
import Collapse from "@kunukn/react-collapse";
import Image from "react-bootstrap/Image";
import Picture from "./picture"

/* const SkillsList = props => (
  <div className={props.className}>{props.children}</div>
  ); */

  export const standardPadding = 50;

  const ProjectsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: ${standardPadding}px;
  `;

// class SkillsList extends React.Component {
//   render() {
//     const { className, children } = this.props;
//     return <div className={className}>{children}</div>;
//   }
// }

class Projetcs extends Component {
  state = {
    openIndex: 1
  };

  handleAClick = index => {
    const { openIndex } = this.state;
    this.setState({ openIndex: openIndex === index ? -1 : index });
  };

  render() {
    const { openIndex } = this.state;
    return (
      <div className="main projects">
      <div onClick={() => this.handleAClick(1)} className="projetcs">
      {" "}
      Projetcs &#11206;
      </div>

      <Collapse isOpen={openIndex === 1}>
      <ProjectsList>

      <Project 
      name="Kidaroo" 
      description="App description -- if longer if will take space... is it beaucse flex 1 1 grow or th like that" 
      thumbnail={<Picture src="#www#" alt="Kidaroo - Rails App - Best activities for Children & Families"/>}>
      </Project>

      <Project 
      name="Celebrate Life Festival" 
      description="Projeckt Type: My freelancing project. Website for a spiritual Fesitval in Germany. 
      Selling tickets System: Event Brite API
      Live-Stream Mediathek: After buying a live-stream ticket you one can login in a watch live-streaming from the festival.
      Front-end: It was important that CLF-Team can make changes on their own, so we used for this purpose WordPress (Divi). >> MORE WORDPRESS PROJECTS" 
      thumbnail={<Picture src="#www#" alt="CLF"/>}>


      </Project>


      <Project
      name="Tree airbnb" 
      thumbnail={<Picture src="#www#" alt="Airbnb for Squirrels"/>}
      description="First App created with Rails. Our clients were delighted but these days nowadays not enough squirrels have access to internet, therefore we do not 
      keep this project really alive - feel free to take a look though!">
      </Project>


      <Project
      name="Bewertung - project in progress"
      thumbnail={<Picture src="#www#" alt="Airbnb for Squirrels"/>}
      description="App created with Rails. For now it can upload data from CSV, do some /Bewertung/ magic and send me an email with doc file with data from exel file (csv)">
      </Project>

      </ProjectsList>
      </Collapse>
      </div>
      );
  }
}

export default Projetcs;
