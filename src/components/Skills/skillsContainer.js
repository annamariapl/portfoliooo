import React, { Component } from "react";
import Skill from "./skill.jsx";
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

const SkillsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;
`;

class SkillsContainer extends Component {
  state = {
    openIndex: 1
  };

  handleAClick = index => {
    const { openIndex } = this.state;
    this.setState({
      openIndex: openIndex === index ? -1 : index
    });
  };

  render() {
    const { openIndex } = this.state;
    return (
      <div className="main skills">
        <div onClick={() => this.handleAClick(1)}>
          <h3 id="skills" className="section-title">
            SKILLS &#10504;
          </h3>
          <Collapse isOpen={openIndex === -1}>
            <SkillsList>
              <Skill name="HTML" icon={<FaHtml5 />} level="advanced" />
              <Skill name="React" icon={<FaReact />} level="newbie" />
              <Skill name="Git" icon={<FaGit />} level="newbie" />
              <Skill
                name="Ruby on Rails"
                icon={<FaCode />}
                level="intermediate"
              />
              <Skill name="Python" icon={<FaPython />} level="newbie" />
              <Skill
                name="PHP&WordPress"
                icon={<FaPhp />}
                level="intermediate"
              />
              <Skill name="CSS" icon={<FaCss3Alt />} level="advanced" />
              <Skill name="Javascript" icon={<FaJs />} level="intermediate" />
            </SkillsList>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default SkillsContainer;