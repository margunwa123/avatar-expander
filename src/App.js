import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InputForm from './components/InputForm';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<InputForm />
			</div>
		)
	}
}

export default App;
