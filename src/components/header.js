import React from "react";
import Button from "./button";

const Header = ({ text }) => (
	<div className="header">
	<h2 className="accent-color header-text">{text}</h2>
{/*<div className="navigation"><Button>I am a button</Button></div>*/}
</div>
);

export default Header;