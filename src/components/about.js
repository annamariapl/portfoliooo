import React, { Component } from "react";
import Picture from "./picture";
import Collapse from "@kunukn/react-collapse";
import url from "../assets/bw_me_s.png";

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
      <div className="container">
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
      Civil engeenering graduee with passion for coding. Skilled in
      Ruby in Rails and JavaScript. Currently learning React and this that is why this Portfolio was created with React. {" "}
      </div>
      </div>
      </Collapse>
      </div>
      </div>
      </div>
      );
  }
}

export default About;
