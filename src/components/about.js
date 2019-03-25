import React, { Component } from "react";
import Picture from "./picture";
import Collapse from "@kunukn/react-collapse";

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
      <div onClick={() => this.handleAClick(1)} className="about-text">
      About &#11206;
      <Collapse isOpen={openIndex === 1}>
      <div className="main about">
      <Picture
      src="https://static1.squarespace.com/static/5970a896414fb5d8ec28a9a2/t/59e8f9201f318dd01d019327/1503108869286/MYSLEF.jpg?format=300w"
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
      );
  }
}

export default About;
