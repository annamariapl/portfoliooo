import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import About from "./components/About/about.jsx";
import Carouselpro from "./components/Projects/carouselpro.jsx";
import Contact from "./components/Contact/contact.jsx";
import Containergit from "./components/GitHub/containergit.jsx";
import Header from "./components/Header/header.jsx";
import Skills from "./components/Skills/skillsContainer.js";
import "./styles.css";

class Container extends Component {
  state = {
    username: "annamariapl",
    pushData: ""
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}/events`)
      .then(response => {
        let pushData = response.data.filter(data => data.type === "PushEvent");
        this.setState({
          pushData
        });
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <Header className="header-title" text="ANNA MARIA WOJTYGA" />
          <About />
          <Skills />
          <Carouselpro />
          <Containergit myCommits={this.state.pushData} />
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
