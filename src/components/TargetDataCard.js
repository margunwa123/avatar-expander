import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const styles = {
    root: {
		width: '80%',
		margin: '2% auto',
    },
    title: {
      	padding: '1.5%',
    },
    data: {
      	padding: '1.5%',
    }
};

class TargetDataCard extends React.Component {
	renderElement(element) {
		switch (element) {
			case 'fire':
				return <FontAwesomeIcon icon={faCircle} color='red' />;
			case 'water':
				return <FontAwesomeIcon icon={faCircle} color='blue' />;
			case 'air':
				return <FontAwesomeIcon icon={faCircle} color='#79edfe' />;
			case 'earth':
				return <FontAwesomeIcon icon={faCircle} color='brown' />;
			default:
				return <FontAwesomeIcon icon={faCircle} color='black' />;
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.root} elevation={5}>
				{ this.props.targetData !== null &&
				<CardContent>
					<Typography className={classes.title} variant="h6">
						Suspect Profile
					</Typography>
					<Typography className={classes.data}>
						ID - { this.props.targetData.id}<br/>
						Name - { this.props.targetData.name }<br/>
						Element - { this.renderElement(this.props.targetData.element) } { this.props.targetData.element }
					</Typography>
				</CardContent>
				}
			</Card>
		);
	}
}
  
  export default withStyles(styles)(TargetDataCard);