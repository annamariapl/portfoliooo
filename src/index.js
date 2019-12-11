import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import About from "./components/About/about.jsx";
import Contact from "./components/Contact/contact.jsx";
import GitContainer from "./components/GitHub/GitContainer.jsx";
import Header from "./components/Header/header.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/skillsContainer.js";
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
      <Header className="header-title" text="ANNA MARIA WOJTYGA" />
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
