import React, { Component } from "react";
import Picture from "./picture";
import Collapse from "@kunukn/react-collapse";
import url from "../assets/me.png";
import cvDe from "../assets/wojtyga-de.pdf";
import cvEn from "../assets/wojtyga-en.pdf";



class About extends Component {
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
      <h3 className="section-title" id="about"> ABOUT &#11206; </h3>
      
      <Collapse isOpen={openIndex === -1}>
      <div className="main about">
      <Picture
      src={url}
      alt="My profile"
      />
      <div className="about-description">
      <p> Civil engeenering bachelor with passion for coding. Skilled in
      Ruby in Rails and JavaScript. Experienced with WordPress. Currently learning React.</p>

      <p> <br></br>Besides my mother tongue Polish, I speak fluent English and German (C2 level).</p>
      

      <p> I am looking for a full-time position as a junior Front-End Developer where I can apply my experience and 
      develop myself further as a programmer. 
      Knowing Ruby in Rails, I am a good fit for a junior Full-Stack Developer too.</p>  
      <hr/>
      <p className="links">
      <a target="_blank" href={cvEn}>Cv in English</a><br/>
      <a target="_blank" href={cvDe}>Cv in German</a>
      </p>



      </div>
      </div>
      </Collapse>
      </div>
      </div>
      
      );
  }
}

export default About;
