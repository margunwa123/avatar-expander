import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFire, faWater, faWind, faLeaf } from '@fortawesome/free-solid-svg-icons';

const styles = {
	root: {
		margin: '3% 5%',
		width: '90%',
	},
	title: {
		padding: '1.5%',
	},
	head: {
		background: 'black',
	},
	headText: {
		color: 'white',
	}
};

class FriendsTable extends React.Component {
	renderElement(element) {
		switch (element) {
			case 'fire':
				return <FontAwesomeIcon icon={faFire} color='red' />;
			case 'water':
				return <FontAwesomeIcon icon={faWater} color='blue' />;
			case 'air':
				return <FontAwesomeIcon icon={faWind} color='#79edfe' />;
			case 'earth':
				return <FontAwesomeIcon icon={faLeaf} color='green' />;
			default:
				return <FontAwesomeIcon icon={faCircle} color='black' />;
		}
	}

	render() {
		const { classes } = this.props;
		return (
		<TableContainer className={classes.root} component={Paper} elevation={5}>
			{this.props.friendsList.length > 0 &&
			<Typography className={classes.title} variant="h6">Friends</Typography>
			}
			{this.props.friendsList.length > 0 &&
			<Table aria-label="friends table">
				<TableHead className={classes.head}>
				<TableRow>
					<TableCell className={classes.headText}>ID</TableCell>
					<TableCell className={classes.headText}>Name</TableCell>
					<TableCell align="center" className={classes.headText}>Element</TableCell>
				</TableRow>
				</TableHead>
				<TableBody>
				{this.props.friendsList.map((friends) => (
					<TableRow onClick={() => this.props.onClick(friends.id)} key={friends.id}>
						<TableCell>{friends.id}</TableCell>
						<TableCell>{friends.name}</TableCell>
						<TableCell align="center">
							{this.renderElement(friends.element)}
						</TableCell>
					</TableRow>
				))}
				</TableBody>
			</Table>
			}
		</TableContainer>
		);
	}
}

export default withStyles(styles)(FriendsTable);