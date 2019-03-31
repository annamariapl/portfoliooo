import React, { Component } from "react";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skillsContainer";
import Contact from "./components/contact";
import Collapse from "@kunukn/react-collapse";
import Projects from "./components/projects";
import ReactDOM from "react-dom";
import GitHub from "./components/GitHub/GitHub";
import axios from "axios";
import Portfoliocard from "./components/portfoliocard";

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Carouselpro from "./components/carouselpro";
import "./styles.css";
import Groupcards from "./components/groupcards";



class Container extends Component {
  state = {
    aboutIsVisable: true,
    username: "annamariapl"
  };

  componentDidMount() {
    console.log("hello from index.js");
    axios.get(`https//api.github.com/users/${this.state.username}/events`)
    .then(response => {
      console.log(response.data);
    })
  }

  render() {
    // console.log("she");
    const { aboutIsVisable } = this.state;
    return (
      <div>
      <div className="container">
      {/* <Button
        onClick={() => this.setState({ aboutIsVisable: !aboutIsVisable })}
        >
        Toggle About
      </Button>*/}

      <Header className="header-title" text="ANNA MARIA WOJTYGA" />
      <About />
      <Skills />
      <Groupcards />
    {/*<Carouselpro />*/}
    <GitHub />
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
