import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
	root: {
		width: '100%',
		margin: '1% auto',
		display: 'flex',
		justifyContent: 'center',
	}
};

class InputForm extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<form className={classes.root} noValidate autoComplete="off">
				<TextField
					error={ this.props.error }
					id="filled-number"
					label="Enter id to search"
					type="number"
					InputLabelProps={{
						shrink: true,
					}}
					variant="filled"
					onChange={ this.props.onChange }
					helperText={ this.props.errorMessage }
				/>
			</form>
		);
	}
}

export default withStyles(styles)(InputForm);