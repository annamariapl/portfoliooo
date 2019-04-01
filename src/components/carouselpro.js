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
      <h3 className="section-title"> PROJECTS &#11206; </h3></div>
      <Collapse isOpen={openIndex === 1}>
      <Carousel>


      <Carousel.Item>
      <a target="_blank" href="http://kidaroo.club">
      <img
      className="d-block w-100"
      src={pic_kidaroo} 
      alt="kidaroo.club"
      />
      </a>

      <Carousel.Caption>
      <h3 className="carousel-title">Kidaroo</h3>
      <p className="carousel-title">Rails App - Activities for Children </p>
      </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <a target="_blank" href="http://kidaroo.club">
      <img
      className="d-block w-100"
      src={pic_clf}
      alt="clf festival"
      />
      </a>
      <Carousel.Caption>
      <h3 className="carousel-title">Celebrate Life Festival</h3>
      <p className="carousel-title">Launched WordPress Project</p>
      </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <a target="_blank" href="http://kidaroo.club">
      <img
      className="d-block w-100"
      src={pic_airbnb}
      alt="AirBnb"
      />
      </a>
      <Carousel.Caption>
      <h3 className="carousel-title">Airbnb for squirrels </h3>
      <p className="carousel-title">Rails Fun Project</p>
      </Carousel.Caption>
      </Carousel.Item>


      </Carousel>
      <CustomCards />
      </Collapse>

      </div>
      );
  }
}

export default Carouselpro;
