import React from "react";
import {
	FaPhone,
	FaGithub,
	FaLinkedin,
	FaEnvelope
} from "react-icons/fa";


class Contact extends React.Component {
	state = ''

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit = event => {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		console.log(this.state)
		return (
			<div className="main contact">
			<h3 id="contact" className="section-title"> 
			CONTACT:</h3> <br/>

			<p> {<FaPhone />} {this.props.phoneNumber} </p> 
			<a target="_blank" className="link-contact links" href="mailto:anna@wojtyga.pl" > <p> {<FaEnvelope />} email: {this.props.email} </p> </a>
			<a target="_blank" className="link-contact" href="https://github.com/annamariapl" > <p> {<FaGithub />} github</p> </a>
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
			<input type="submit" value="Send" />
			</form>

			</div>
			</div>
			);
	}
}

export default Contact;
