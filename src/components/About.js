import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function AlertDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
		<IconButton color="inherit" aria-label="help" component="span" onClick={handleClickOpen}>
			<FontAwesomeIcon icon={faExclamationCircle} color='white' />
		</IconButton>
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{"About AE"}</DialogTitle>
			<DialogContent>
			<DialogContentText id="alert-dialog-description">
				<p>Avatar Expander v1.0</p>
				<p>A simple graph visualization app.</p>
				<p>Made by Morgen Sudyanto - 13518093</p>
			</DialogContentText>
			</DialogContent>
			<DialogActions>
			<Button onClick={handleClose} color="primary" autoFocus>
				Noice
			</Button>
			</DialogActions>
		</Dialog>
		</div>
	);
}