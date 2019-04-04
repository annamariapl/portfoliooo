import React, { Component } from "react";
import Project from "./project";
import { FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import "./skills.css";
import"../styles.css";
import styled from "styled-components";
import Collapse from "@kunukn/react-collapse";
import Image from "react-bootstrap/Image";
import Picture from "./picture"
/*URLS IMPORT*/
import pic_kidaroo from "../assets/kidaroo.png";
import pic_clf from "../assets/clf.png";
import pic_airbnb from "../assets/airbnb.png";
/*END -- URLS-IMPORT*/
import Carousel from 'react-bootstrap/Carousel';
import CustomCards from "./customcards";
import Links from "./links";

export const standardPadding = 50;

const ProjectsList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
padding: ${standardPadding}px;
`;


class Carouselpro extends Component {
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
      <div className="main projects">
      <div onClick={() => this.handleAClick(1)} className="projetcs">
      <h3 id="projects" className="section-title"> PROJECTS &#11206; </h3></div>
      <Collapse isOpen={openIndex === -1}>
      <Carousel>


      <Carousel.Item>
      <a target="_blank" href="http://kidaroo.club">
      <img
      className="d-block w-100"
      src={pic_kidaroo} 
      alt="kidaroo.club"
      />
      </a>
      <div>  
      
      <h3 className="carousel-title">Kidaroo</h3>
      <p className="carousel-title">Rails App - Activities for Children </p>
      
      <h4>Rails App - Activities for Children </h4>
      <p>Find free-time activities for your child, pay with a credit card, log-in, check your dashboard and chat with other users.</p>
      <p>The project came to life in just 10 days. It was an effect of a good teamwork and was a byproduct of a coding bootcamp. Though the app was done just for practising purposes, it would be a good base for a fully functioning application.</p>
      </div>
      </Carousel.Item>


      <Carousel.Item>
      <a target="_blank" href="https://celebrate-life.info/2019/">
      <img
      className="d-block w-100"
      src={pic_clf}
      alt="clf festival"
      />
      </a>
      <div>  
      <h3 className="carousel-title">Celebrate Life Festival</h3>
      <p className="carousel-title">Launched WordPress Project</p>
      <h4>Celebrate Life Festival </h4>
      <p>Buy tickets via Event-Brite, watch media stream library and get informed about the Festival. The website is bilingual.</p>
      <p>This is a launched project.</p>
      </div>
      </Carousel.Item>


      <Carousel.Item>
      <a target="_blank" href="https://lovelytreebnb.herokuapp.com">
      <img
      className="d-block w-100"
      src={pic_airbnb}
      alt="AirBnb"
      />
      </a>

      <div>
      <h3 className="carousel-title">Airbnb for squirrels </h3>
      <p className="carousel-title">Rails Fun Project</p>
      <p>Rails App - a fun project</p>
      <p>It doesn't mean that it doesn't work. Offer a tree a host or rent a tree. No need to log-in for testing.</p>
      </div>
      </Carousel.Item>


      </Carousel>
    {/*      <CustomCards />*/}

    <hr/>
    <h4><br/>More projects:</h4>
    <div><Links links= { [
      {text: "barefoot-yoga.de", link: "http://barefoot-yoga.de" },
      {text: "space-in-between.de", link: "http://space-in-between.de"},
      {text: "ai-and-law.com", link: "http://ai-and-law.com"},
      {text: "geheimnisschutz.eu", link: "http://geheimnisschutz.eu"},
      {text: "marke-und-domain.de", link: "http://marke-und-domain.de"}
      ]
    }/></div>
    </Collapse>

    </div>
    );
  }
}

export default Carouselpro;
