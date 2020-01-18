import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import About from "./components/About/about";
import Contact from "./components/Contact/Contact";
import GitContainer from "./components/GitHub/GitContainer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/SkillsContainer";
import "./styles.css";

const Container = () => {
  const username = "annamariapl";
  let [pushData, setPushData] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/events`)
      .then(response => {
        let updatePushData = response.data.filter(
          data => data.type === "PushEvent"
        );
        setPushData(updatePushData);
      });
  }, []);

  return (
    <div className="container">
      <Navbar className="header-title" text="ANNA MARIA WOJTYGA" />
      <About />
      <Skills />
      <Projects />
      <GitContainer myCommits={pushData} />
      <Contact phoneNumber="+49 157 5335 2997" email="anna@wojtyga.pl" />
    </div>
  );
};

function App() {
  return <Container />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default Container;
