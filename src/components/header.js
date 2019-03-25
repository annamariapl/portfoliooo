import React from "react";
import Button from "./button";

const Header = ({ text }) => (
	<div className="header">
	<h1 className="accent-pink">{text}</h1>
{/*<div className="navigation"><Button>I am a button</Button></div>*/}
</div>
);

export default Header;