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
	state = {
		links: [
		{text: "barefoot-yoga.de", link: "http://barefoot-yoga.de" },
		{text: "space-in-between.de", link: "http://space-in-between.de"},
		{text: "ai-and-law.com", link: "http://ai-and-law.com"},
		{text: "geheimnisschutz.eu", link: "http://geheimnisschutz.eu"},
		{text: "marke-und-domain.de", link: "http://marke-und-domain.de"}
		]
	};

	render() {
		const { openIndex } = this.state;
		return (
			<div className="links">
			{this.state.links && this.state.links.map(item => (
				<div> 
				<a href={item.link}>{item.text}</a>
				</div>
				))}
			</div>
			);
	}
}
export default Links;
