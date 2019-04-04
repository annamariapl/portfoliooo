import React, { Component } from "react";
import"../styles.css";
import styled from "styled-components";
import Collapse from "@kunukn/react-collapse";
/*URLS IMPORT*/
import pic_kidaroo from "../assets/kidaroo.png";
import pic_clf from "../assets/clf.png";
import pic_airbnb from "../assets/airbnb.png";
/*END -- URLS-IMPORT*/
import {
	FaPhone,
	FaGithub,
	FaLinkedin,
	FaEnvelope
} from "react-icons/fa";


class Links extends Component {

	render() {
		console.log(this.props.links);
		return (

			<div className={`links ${this.props.classes}`}>
			{this.props.links && this.props.links.map((item, index) => (
				<div className="sinlge-link-header" key={index}> 

				<a href={item.link}>{item.text}</a>

				</div>
				))}
			</div>
			);
	}
}
export default Links;
