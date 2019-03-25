import React, { Component } from "react";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skillsContainer";
import Contact from "./components/contact";
import Collapse from "@kunukn/react-collapse";
import Projects from "./components/projects";
import ReactDOM from "react-dom";
import "./styles.css";


class Container extends Component {
  state = {
    aboutIsVisable: true
  };

  render() {
    const { aboutIsVisable } = this.state;
    return (
      <div>
      <div className="container">
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
          </div>
          </div>


          );
  }
}


function App() {
  return <Container />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



export default Container;
