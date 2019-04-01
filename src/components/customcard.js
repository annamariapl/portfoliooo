import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const CustomCard = props => {
	const {title, src, text1, text2, text3, children, url_site} = props;

	return (
		<Card style={{ width: '15rem', padding: '5px'}}>
		<Card.Img variant="top" src={src} />
		<Card.Body>
		<Card.Title>{title}</Card.Title>
		<Card.Text>
		<p>{text1}<br></br></p>
		<p>{text2}<br></br></p>
		<p>{text3}<br></br></p>
		<p>{children}</p>
		</Card.Text> 
		<Button target="_blank" href={url_site} variant="outline-info">Go to this project</Button>
		</Card.Body>
		</Card>

		);
};
export default CustomCard;

