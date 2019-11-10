import React, { Component } from "react";
import "../styles.css";

class Links extends Component {
  render() {
    return (
      <div className={`links ${this.props.classes}`}>
        {this.props.links &&
          this.props.links.map((item, index) => (
            <div className="sinlge-link-header" key={index}>
              <a href={item.link}>{item.text}</a>
            </div>
          ))}
      </div>
    );
  }
}
export default Links;
