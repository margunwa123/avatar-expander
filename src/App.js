import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InputForm from './components/InputForm';
import GraphImage from './components/GraphImage';

class App extends Component {
	constructor(props) {
        super(props);
        this.state = { target: '', json: null, graphData: { nodes: [], links: [] }, startEmpty: false };
	}
	
    handleOnChange = event => {
		this.setState({ target: event.target.value, startEmpty: true }, this.fetchTarget);
	};

	updateGraphData = () => {
		var newGraphData;
		if (this.state.startEmpty === true) {
			newGraphData = { nodes: [], links: [] };
		} else {
			newGraphData = this.state.graphData;
		}
		var nodeColor;
		switch (this.state.json.element) {
			case 'fire':
				nodeColor = 'red';
				break;
			case 'water':
				nodeColor = 'blue';
				break;
			case 'air':
				nodeColor = 'green';
				break;
			case 'earth':
				nodeColor = 'yellow';
				break;
			default:
				nodeColor = 'black';
		}
		const sourceId = this.state.json.id;
		newGraphData.nodes.push({ id: this.state.json.id, name: this.state.json.name, color: nodeColor });
		this.state.json.friends.forEach(friend => {
			switch (friend.element) {
				case 'fire':
					nodeColor = 'red';
					break;
				case 'water':
					nodeColor = 'blue';
					break;
				case 'air':
					nodeColor = 'green';
					break;
				case 'earth':
					nodeColor = 'yellow';
					break;
				default:
					nodeColor = 'black';
			}
			newGraphData.nodes.push({ id: friend.id, name: friend.name, color: nodeColor });
		});
		newGraphData.nodes = newGraphData.nodes.filter((nodes, index, self) =>
			index === self.findIndex((t) => (
				t.id === nodes.id
			))
		);
		this.state.json.friends.forEach(friend => {
			newGraphData.links.push({ source: sourceId, target: friend.id });
		});
		newGraphData.links = newGraphData.links.filter((links, index, self) =>
			index === self.findIndex((t) => (
				t.source === links.source && t.target === links.target
			))
		);
		console.log(newGraphData);
		this.setState({ graphData: newGraphData });
	}
	
    fetchTarget = () => {
		console.log(this.state.target);
        fetch("https://avatar.labpro.dev/friends/" + this.state.target, {
            method: 'GET'
        })
        .then(function(response) {
            if (response.status === 200) return response.json();
            throw new Error(response.statusText);
        })
		.then(json => this.setState({ json: json.payload }))
		.then(this.updateGraphData)
        .catch(error => console.log(error));
	}
	
	handleOnNodeClick = nodeId => {
		this.setState({ target: nodeId, startEmpty: false }, this.fetchTarget);
	}
	
	render() {
		return (
			<div>
				<NavBar />
				<InputForm target={ this.state.target } json={ this.state.json } onChange={ this.handleOnChange } />
                <GraphImage target={ this.state.target } graphData={ this.state.graphData } onClickNode={ this.handleOnNodeClick } />
			</div>
		)
	}
}

export default App;
