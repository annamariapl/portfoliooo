import ReactDOM from "react-dom";
import Container from "./index";
import "./styles.css";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			Hila
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
