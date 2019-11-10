import React, { Component } from "react";
import Project from "./project";
import { FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import "./skills.css";
import styled from "styled-components";
import Collapse from "@kunukn/react-collapse";
import Image from "react-bootstrap/Image";
import Picture from "./picture";
/*URLS IMPORT*/
import pic_kidaroo from "../assets/kidaroo.png";
import pic_clf from "../assets/clf.png";
import pic_airbnb from "../assets/airbnb.png";
import pic_dataprotec from "../assets/dataprotec.png";
/*END -- URLS-IMPORT*/

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
    this.setState({
      openIndex: openIndex === index ? -1 : index
    });
  };

  render() {
    const { openIndex } = this.state;
    return (
      <div className="main projects">
        <div onClick={() => this.handleAClick(1)} className="projetcs">
          <h3 className="section-title"> PROJECTS & #11206; </h3>
        </div>

        <Collapse isOpen={openIndex === 1}>
          <ProjectsList>
            <Project
              name="Data Protection Form"
              projectUrl="https://github.com/annamariapl/data-protection-form"
              thumbnail={
                <Picture src={pic_airbnb} alt="Data Protection Form" />
              }
              description="App that is collectiing information from user in order to help with TOM (technical and organizational measures) estimation. 
      The Data from a YML file lands in a database via seed.rb.Next the data populates a formular(Simple_From) with checkboxes and text fields.After clicking a button 'Click - check...'
      is displayed a percentage of security(real logic not implemented, 'placeholder logic').

      The collected Data Choices are being saved into a.docx(word document - setup with Caracal Gem).The Data can be manipulated directly in agreeements_controller.rb.The structure of the.docx document is of course not real and definitly not final - due to know - how protecting.The doc is being send to an E - Mail(configured with Postfix).A safety copy of the document is being stored to a folder as well.

      Next steps: 1) exchange yml
    for csv to make it excel compatable.,
      2) Changing structure of the Form(add text - field with prefilled text that can be changed.)
  It might be cool to use React(easy following changes) - so I am learning React now and will come back to this project very soon(hopefully).
  "
            >
              {" "}
            </Project>

            <Project
              name="Kidaroo"
              projectUrl="http://www.kidaroo.club"
              projectInfo="Ruby in Rails"
              description="Kidaroo Kidaroo - Rails App - Best activities for Children & Families Kidaroo - Rails App - Best activities for Children & Families Kidaroo - Rails App - Best activities for Children & Families"
              thumbnail={
                <Picture
                  src={pic_kidaroo}
                  alt="Kidaroo - Rails App - Best activities for Children & Families"
                />
              }
            ></Project>

            <Project
              name="Celebrate Life Festival"
              projectUrl="https://celebrate-life.info/2019/"
              projectInfo="WordPress"
              description="Projeckt Type: My freelancing project. Website for a spiritual Fesitval in Germany. 
  Selling tickets System: Event Brite API
  Live - Stream Mediathek: After buying a live - stream ticket you one can login in a watch live - streaming from the festival.
  Front - end: It was important that CLF - Team can make changes on their own, so we used
  for this purpose WordPress(Divi). >> MORE WORDPRESS PROJECTS "
              thumbnail={<Picture src={pic_clf} alt="CLF" />}
            ></Project>

            <Project
              name="Tree airbnb"
              projectUrl="https://lovelytreebnb.herokuapp.com"
              thumbnail={
                <Picture src={pic_airbnb} alt="Airbnb for Squirrels" />
              }
              description="Any idea is good enough to learn coding. Tree-airbnb is an app that helps squirrels find the perfect accomodation. 
  You can easy pay in acorns
  for your stay, manage your stay in your dashboard after log - in .And be an awesome squirrel that posts cool photos on social media; - )
you can give it a
try even íf you are not a squirrel.
"
            >
              {" "}
            </Project>

            <Project
              name="Bewertung - project in progress"
              thumbnail={<Picture src="#www#" alt="Airbnb for Squirrels" />}
              description="App created with Rails. For now it can upload data from CSV, do some /Bewertung/ magic and send me an email with doc file with data from exel file (csv)"
            ></Project>
          </ProjectsList>{" "}
        </Collapse>
      </div>
    );
  }
}

export default Projetcs;
