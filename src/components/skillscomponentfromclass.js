import React from "react";
import Skill from "./skill";
import { FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import "./skills.css";
import styled from "styled-components";

export const standardPadding = 50;

const SkillsList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
padding: ${standardPadding}px;
`;

const MoreInfo = styled.button`
background: pink;
`;

const MoreInfoParagraph = styled.div``;

class SkillsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreInfoHTML: false
    };
    this.toggleShowMoreInfo = this.toggleShowMoreInfo.bind(this);
  }

  toggleShowMoreInfo() {
    this.setState({
      showMoreInfoHTML: !this.state.showMoreInfoHTML
    });
  }

  handleChange(e) {
    console.log(e.target);
    this.setState({
      inputState: e.target.value
    });
  }

  render() {
    const { icon, name, children } = this.props;
    return (
      <div className="main skills">
      Skills:
      <SkillsList>
      Timer:
    {/* a comment */}
    <Skill name="HTML" icon={<FaHtml5 />}>
    expert
    <MoreInfo
    name="html!"
    id="blabaaaa"
    onClick={() => {
      this.toggleShowMoreInfo();
    }}
    >
    More...
    </MoreInfo>
    {this.state.showMoreInfoHTML ? (
      <MoreInfoParagraph>
      I love learning Html and event handlers!
      </MoreInfoParagraph>
      ) : (
      <div> better ... </div>
      )}
      </Skill>
      <Skill name="CSS" icon={<FaCss3Alt />}>
      newbie
      {[1, 2, 3].map(e => e)}
      </Skill>
      <input
      name="myInput"
      placeholder="text"
      onChange={e => {
        this.handleChange(e);
      }}
      />
      {this.state.inputState}
      <Skill name="Javascript" icon={<FaJs />} children="intermediate" />
      </SkillsList>
      </div>
      );
  }
}
const SkillsContainerFunc = () => (
  <div className="main skills">
  Skills:
  <SkillsList>
{/* a comment */}
<Skill name="HTML" icon={<FaHtml5 />}>
expert
<MoreInfo>test</MoreInfo>
</Skill>
<Skill name="CSS" icon={<FaCss3Alt />}>
newbie
{[1, 2, 3].map(e => e)}
</Skill>
<Skill name="Javascript" icon={<FaJs />} children="intermediate" />
</SkillsList>
</div>
);

export default SkillsContainer;
