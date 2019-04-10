import React from "react";
import {
	FaPhone,
	FaGithub,
	FaLinkedin,
	FaEnvelope
} from "react-icons/fa";
import styled from "styled-components";

const reasons = ["job_offer", "differnt"]

const Options = styled.select`
background: red;
color: yellow;
`;


class Contact extends React.Component {

	state = ''
	valid = ''

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit = event => {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	checkIfValid = () => {
		this.setState(({name, mail, message}) =>
			({
				valid: name && mail && message,
				validationError: {
					name: name ? null : "Please tell me what your Name is",
					mail: mail ? null : "Please tell me what your E-Mail is",
					name: message ? null : "Message missing. Please tell me somthing more."
				}
			}))
	}


	render() {
		console.log(this.state)
		return (
			<div className="main contact">
			<h3 id="contact" className="section-title"> 
			CONTACT:</h3> <br/>

			<p> {<FaPhone />} {this.props.phoneNumber} </p> 
			<a target="_blank" className="link-contact links" href="mailto:anna@wojtyga.pl" > <p> {<FaEnvelope />} email: {this.props.email} </p> </a>
			<a target="_blank" className="link-contact" href="https://github.com/annamariapl" > <p> {<FaGithub />} github </p> </a>
			<a target="_blank" className="link-contact" href="https://www.linkedin.com/in/anna-wojtyga/" > <p> {<FaLinkedin />} linkedin </p> </a>
			<div>
			<form className="contact-form" onSubmit={this.handleSubmit}>
			<input 
			value={this.state.name}
			name = "name"
			placeholder="Name"
			onChange={event => this.handleChange(event)}
			/>
			<input 
			value={this.state.mail}
			name = "mail"
			placeholder="E-Mail"
			onChange={event => this.handleChange(event)}
			/>
			<textarea 
			className="contact-message"
			value={this.state.message}
			name = "message"
			placeholder="Message"
			onChange={event => this.handleChange(event)}
			/>
			<Options>
			{reasons.map(reason => ( <option key={reason} value={reason}>{reason}</option> ))}
			</Options>
			<input type="submit" value="Send" onBlur={this.checkIfValid} />
			</form>

			</div>
			</div>
			);
	}
}

export default Contact;
