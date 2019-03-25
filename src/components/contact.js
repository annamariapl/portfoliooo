import React from "react";

const Contact = props => (
	<div className="main contact">
	<span className="accent-pink"> 
	Contact:</span> <p> {props.phoneNumber} </p> email: {props.email}
	</div>
	);

export default Contact;
