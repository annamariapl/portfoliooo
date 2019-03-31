import React, { Component } from "react";
import Picture from "./picture";
import Collapse from "@kunukn/react-collapse";
import url from "../assets/me.png";

class About extends Component {
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

      <div className="main">
      <div onClick={() => this.handleAClick(1)}>
      <h3 className="section-title"> ABOUT &#11206; </h3>
      <Collapse isOpen={openIndex === 1}>
      <div className="main about">
      <Picture
      src={url}
      alt="My profile"
      />
      <div className="about-description">
      Civil engeenering bachelor with passion for coding. Skilled in
      Ruby in Rails and JavaScript. Experienced with WordPress. Currently learning React and this that is why this Portfolio was created with React.
      <p> <br></br>Besides my mother tongue polish, I speak fluent english and german (C2 level).</p>
      </div>
      </div>
      </Collapse>
      </div>
      </div>
      
      );
  }
}

export default About;
