import React, {Component} from "react";
import GitHub from "./GitHub/GitHub";
import Collapse from "@kunukn/react-collapse";

class Containergit extends Component {
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
      <h3 className="section-title" id="github"> GIT COMMITS &#11206; </h3>
      <Collapse isOpen={openIndex === -1}>
      <GitHub myCommits={this.props.myCommits} />

      </Collapse>
      </div>
      </div>



      );
  }
}

export default Containergit;
