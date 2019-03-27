import ReactDOM from "react-dom";
import Container from "./index";
import "./styles.css";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {

	state = {
		username: "annamariapl"
	}

	componentDidMount() {
		console.log("hello from app.js");
		axios.get(`https//api.github.com/users/${this.state.username}/events`)
		.then(response => {
			console.log(response.data);
		})
	}

	render() {
		return (
			<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			Anna Maria first ReactApp :-) 
		</p>
		<a
		className="App-link"
		href="https://reactjs.org"
		target="_blank"
		rel="noopener noreferrer"
		>
		Learn React
		</a>
		</header>
		</div>
		);
}
}

export default App;
