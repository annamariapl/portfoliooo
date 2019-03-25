import React, { Component } from "react";
import Header from "./header";
import About from "./about";
import Skills from "./skillsContainer";
import Contact from "./contact";
/*import Button from "./button";*/
import Collapse from "@kunukn/react-collapse";
import Projects from "./projects";
import Bootstrap from "./bootstrap";

class Container extends Component {
  state = {
    aboutIsVisable: true
  };

  render() {
    const { aboutIsVisable } = this.state;
    return (
      <div>
      <div className="container">
      <div> test </test>
          {/* <Button
            onClick={() => this.setState({ aboutIsVisable: !aboutIsVisable })}
          >
            Toggle About
          </Button>*/}

          <Header text="Portfolio" />
          <About />
          <Skills />
          <Projects />
          <Contact phoneNumber="+49 157 5335 2997" email="anna@wojtyga.pl" />
          <Bootstrap />
          </div>
          </div>
          );
  }
}

export default Container;
