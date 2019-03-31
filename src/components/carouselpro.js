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
import Carousel from 'react-bootstrap/Carousel';
/*END -- URLS-IMPORT*/

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

      <div>
      <Carousel>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={pic_kidaroo}
      alt="kidaroo.club"
      />
      <Carousel.Caption>
      <h3>Kidaroo</h3>
      <p>Rails App - Activities for Children </p>
      <p>find an activity for your child, pay with a credit-card<br/>
      check your bookings in your dashboard and chat with other users.<br/>
      Though the app was done just for practising purposes, it would be a good base for a fully functioning application.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={pic_clf}
      alt="clf festival"
      />

      <Carousel.Caption>
      <h3>Celebrate Life Festival</h3>
      <p>WordPress Project</p>
      <p>Buy tickets, Watch Media-stream,<br/>
      and get inforemd about the festival</p>
      <p>This project is real-life launched project</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={pic_airbnb}
      alt="AirBnb"
      />

      <Carousel.Caption>
      <h3>Airbnb for squirrels </h3>
      <p>Rails Fun Project</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>
      </Collapse>

      </div>
      );
  }
}

export default Carouselpro;
