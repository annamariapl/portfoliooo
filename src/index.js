import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import About from "./components/about";
import Carouselpro from "./components/carouselpro";
import Contact from "./components/contact";
import Containergit from "./components/containergit";
import Header from "./components/header";
import Skills from "./components/skillsContainer";
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
