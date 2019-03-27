import React, { Component } from "react";
import Skill from "./skill";
import {
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaCode,
  FaGit,
  FaPython,
  FaPhp
} from "react-icons/fa";
import "./skills.css";

import styled from "styled-components";
import Collapse from "@kunukn/react-collapse";
/* const SkillsList = props => (
  <div className={props.className}>{props.children}</div>
  ); */

  export const standardPadding = 50;

  const SkillsList = styled.div`
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

class SkillsContainer extends Component {
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
      <div className="main skills">
      <div onClick={() => this.handleAClick(1)}> <h3 className="section-title"> SKILLS  &#11206; </h3>


      <Collapse isOpen={openIndex === 1}>
      <SkillsList>
    {/* a comment */}
    <Skill name="HTML" icon={<FaHtml5 />}>expert</Skill>
    <Skill name="React" icon={<FaReact />}>newbie</Skill>
    <Skill name="Git" icon={<FaGit />}> newbie</Skill>
    <Skill name="Ruby on Rails" icon={<FaCode />}>intermediate</Skill>
    <Skill name="Python" icon={<FaPython />}>newbie</Skill>
    <Skill name="PHP&WordPress" icon={<FaPhp />}>intermediate</Skill>
    <Skill name="CSS" icon={<FaCss3Alt />}>expert
  {/*[1, 2, 3].map(e => e) cool, I can write code here*/}</Skill>
  <Skill name="Javascript" icon={<FaJs />} children="intermediate" />
  </SkillsList>
  </Collapse>
  </div>
  </div>
  );
  }
}

export default SkillsContainer;
