import Collapse from "@kunukn/react-collapse";
import React, { Component } from "react";
import Picture from "./picture.jsx";
import url from "./me.png";
import cvEn from "./wojtyga-en.pdf";

class About extends Component {
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
      <div className="main">
        <div onClick={() => this.handleAClick(1)}>
          <h3 className="section-title" id="about">
            ABOUT &#10504;
          </h3>
          <Collapse isOpen={openIndex === -1}>
            <div className="about">
              <div className="flex-about">
                <Picture src={url} alt="My profile" />
                <div className="about-description">
                  <p>
                    Junior frontend developer skilled in React.js and
                    Typescript.
                  </p>
                  <p>
                    In my free time I am teaching coding fundamentals in a Woman
                    Digital Program, at ReDI School.
                  </p>
                  <p>
                    I am looking for a full-time position where I can bring real
                    value to the customers and master my skills.
                  </p>
                  <hr />
                  <ul>
                    <li>English - full professional proficiency (C2)</li>
                    <li>German - full professional proficiency (C2)</li>
                    <li>Polish - native speaker</li>
                  </ul>
                  <hr />
                  <p className="links">
                    <a target="_blank" rel="noopener noreferrer" href={cvEn}>
                      Cv in English
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default About;
