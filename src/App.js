import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InputForm from './components/InputForm';
import GraphImage from './components/GraphImage';
import FriendsTable from './components/FriendsTable';
import TargetDataCard from './components/TargetDataCard';
import Grid from '@material-ui/core/Grid';

class App extends Component {
	constructor(props) {
        super(props);
        this.state = { target: '', json: null, targetData: null, friendsList: [], graphData: { nodes: [], links: [] }, startEmpty: false, error: false, errorMessage: '' };
	}
	
    handleOnChange = event => {
		this.setState({ target: event.target.value, startEmpty: true }, this.fetchTarget);
	};

	updateFriendsList = () => {
		var newTargetData;
		newTargetData = { id: this.state.json.id, name: this.state.json.name, element: this.state.json.element };
		this.setState({ targetData: newTargetData });

		var newFriendsList = [];
		this.state.json.friends.forEach(friend => {
			if (friend.id !== this.state.json.id) {
				newFriendsList.push({ id: friend.id, name: friend.name, element: friend.element });
			}
		});
		newFriendsList.sort((a, b) => (a.id - b.id));
		newFriendsList = newFriendsList.filter((friends, index, self) =>
			index === self.findIndex((t) => (
				t.id === friends.id	// remove duplicate friends
			))
		);
		this.setState({ friendsList: newFriendsList });
	}

	updateGraphData = () => {
		var newGraphData;
		if (this.state.startEmpty === true) {
			newGraphData = { nodes: [], links: [] };
		} else {
			newGraphData = this.state.graphData;
		}
		var nodeSvg;
		switch (this.state.json.element) {
			case 'fire':
				nodeSvg = process.env.PUBLIC_URL + '/elements/fire-solid.svg';
				break;
			case 'water':
				nodeSvg = process.env.PUBLIC_URL + '/elements/water-solid.svg';
				break;
			case 'air':
				nodeSvg = process.env.PUBLIC_URL + '/elements/wind-solid.svg';
				break;
			case 'earth':
				nodeSvg = process.env.PUBLIC_URL + '/elements/leaf-solid.svg';
				break;
			default:
				nodeSvg = process.env.PUBLIC_URL + '/elements/fire-solid.svg';
		}
		const sourceId = this.state.json.id;
		newGraphData.nodes.push({ id: this.state.json.id, name: this.state.json.name, svg: nodeSvg });
		this.state.json.friends.forEach(friend => {
			switch (friend.element) {
				case 'fire':
					nodeSvg = process.env.PUBLIC_URL + '/elements/fire-solid.svg';
					break;
				case 'water':
					nodeSvg = process.env.PUBLIC_URL + '/elements/water-solid.svg';
					break;
				case 'air':
					nodeSvg = process.env.PUBLIC_URL + '/elements/wind-solid.svg';
					break;
				case 'earth':
					nodeSvg = process.env.PUBLIC_URL + '/elements/leaf-solid.svg';
					break;
				default:
					nodeSvg = process.env.PUBLIC_URL + '/elements/fire-solid.svg';
			}
			newGraphData.nodes.push({ id: friend.id, name: friend.name, svg: nodeSvg });
		});
		newGraphData.nodes = newGraphData.nodes.filter((nodes, index, self) =>
			index === self.findIndex((t) => (
				t.id === nodes.id	// remove duplicate nodes
			))
		);
		this.state.json.friends.forEach(friend => {
			newGraphData.links.push({ source: sourceId, target: friend.id });
		});
		newGraphData.links = newGraphData.links.filter((links, index, self) =>
			index === self.findIndex((t) => (
				(t.source === links.source && t.target === links.target)	// remove duplicate edges
				|| (links.source === links.target)	// remove self loop
			))
		);
		this.setState({ graphData: newGraphData });
	}
	
    fetchTarget = () => {
        fetch("https://avatar.labpro.dev/friends/" + this.state.target, {
            method: 'GET'
        })
        .then(function(response) {
            if (response.status === 200) return response.json();
            throw new Error(response.statusText);
        })
		.then(json => this.setState({ error: false, errorMessage: '', json: json.payload }))
		.then(this.updateFriendsList)
		.then(this.updateGraphData)
        .catch(_error => this.setState({error: true, errorMessage: _error.message}));
	}
	
	handleOnClickNode = nodeId => {
		this.setState({ target: nodeId, startEmpty: true }, this.fetchTarget);
	}

	handleOnDoubleClickNode = nodeId => {
		this.setState({ target: nodeId, startEmpty: false }, this.fetchTarget);
	}
	
	render() {
		return (
			<div>
				<NavBar nodeCount={ this.state.graphData.nodes.length } />
				<Grid container>
					<Grid item xs={12}>
						<InputForm target={ this.state.target } json={ this.state.json } onChange={ this.handleOnChange } error={ this.state.error } errorMessage={ this.state.errorMessage } />
					</Grid>
					<Grid item md={9}>
						<GraphImage target={ this.state.target } graphData={ this.state.graphData } onClickNode={ this.handleOnClickNode } onDoubleClickNode={ this.handleOnDoubleClickNode } />
					</Grid>
					<Grid item xs={12} md={3}>
						<TargetDataCard targetData={ this.state.targetData } />
						<FriendsTable friendsList={ this.state.friendsList } onClick={ this.handleOnClickNode } />
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default App;
