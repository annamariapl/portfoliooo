import React from "react";

const Contact = props => (
	<div className="main contact">
	<h3 className="section-title"> 
	CONTACT:</h3> <br/>
	<p> {props.phoneNumber} </p> email: {props.email}
	</div>
	);

export default Contact;
