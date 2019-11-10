import React, { Component } from "react";
import GitHub from "./GitHub.jsx";
import Collapse from "@kunukn/react-collapse";
import { FaGithub } from "react-icons/fa";

class Containergit extends Component {
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="link-contact links"
          href="https://github.com/annamariapl"
        >
          <p>
            {<FaGithub className="bigger-font-standard" />}
            How do I refactor my Portfolio; - ) and all the other commits.
          </p>
        </a>
        <hr />
        <div onClick={() => this.handleAClick(1)}>
          <h3 className="section-title" id="github">
            GIT COMMITS &#10504;
          </h3>
        </div>
        <Collapse isOpen={openIndex === -1}>
          <GitHub myCommits={this.props.myCommits} />
        </Collapse>
      </div>
    );
  }
}

export default Containergit;
