import React, { Component } from "react";
import Skill from "./skill.jsx";
import {
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaRails,
  FaGit,
  FaPython,
  FaPhp,
  FaLess
} from "react-icons/fa";
import "./skills.css";
import styled from "styled-components";
import Collapse from "@kunukn/react-collapse";
import ts from "./assets/ts.png";
import rails from "./assets/rails.png";

const SkillsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class SkillsContainer extends Component {
  state = {
    openIndex: -1
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
              <Skill
                name="Typescript"
                icon={<img className="customIconSkills" src={ts} />}
              />
              <Skill name="Javascript ES6" icon={<FaJs />} />
              <Skill name="React.js" icon={<FaReact />} />
              <Skill name="HTML" icon={<FaHtml5 />} />
              <Skill name="CSS" icon={<FaCss3Alt />} />
              <Skill name="LESS" icon={<FaLess />} />
              <Skill name="Git" icon={<FaGit />} />
              <Skill name="Python" icon={<FaPython />} />
              <Skill
                name="Ruby on Rails"
                icon={<img className="customIconSkills" src={rails} />}
              />
              <Skill name="PHP&WordPress" icon={<FaPhp />} />
            </SkillsList>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default SkillsContainer;
