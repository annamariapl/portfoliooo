import React, { Component } from "react";
import"../styles.css";
import styled from "styled-components";
import Collapse from "@kunukn/react-collapse";
import CardGroup from 'react-bootstrap/CardGroup';
import CustomCard from "./customcard";
/*URLS IMPORT*/
import pic_kidaroo from "../assets/kidaroo.png";
import pic_clf from "../assets/clf.png";
import pic_airbnb from "../assets/airbnb.png";
import Links from "./links";


/*END -- URLS-IMPORT*/



export const standardPadding = 50;

const ProjectsList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
padding: ${standardPadding}px;
`;





class CustomCards extends Component {
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
      <div className="projects">
      <div onClick={() => this.handleAClick(1)} className="projetcs">
      <h3 className="section-title"> ABOUT PROJECTS &#11206; </h3></div>
      <Collapse isOpen={openIndex === -1 }>
      <div>
      <CardGroup>

      <CustomCard
      title="Kidaroo"
      url_site="http://www.kidaroo.club"
      src={pic_kidaroo}

      text1="Rails App - Activities for Children"
      text2="Find free-time activities for your child, pay with a credit card, log-in, check your dashboard and chat with other users."
      text3="The project came to life in just 10 days. It was an effect of a good teamwork and was a byproduct of a coding bootcamp. Though the app was done just for practising purposes, it would be a good base for a fully functioning application."
      
      />

      <CustomCard 
      title="Celebrate Life Festival"
      url_site="https://celebrate-life.info/2019/"
      src={pic_clf}

      text1="WordPress - Celebrate Life Festival"
      text2="A launched project."
      text3="Buy tickets via Event-Brite, watch media stream library and get informed about the Festival. The website is bilingual. "
      />

      <CustomCard
      title="Airbnb for squirrels"
      url_site="https://lovelytreebnb.herokuapp.com"
      src={pic_airbnb}

      text1="Rails App - a fun project"
      text2="It doesn't mean that it doesn't work. Offer a tree a host or rent a tree. No need to log-in for testing."
      text3=""
      />
      </CardGroup>

      <h4><br></br>More projects:</h4>
      <div><Links/></div>
      </div>
      </Collapse>

      </div>
      );
  }
}

export default CustomCards;
