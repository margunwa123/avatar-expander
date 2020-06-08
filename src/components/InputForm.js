import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Graph from './Graph';

const styles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buffer: '', reply: null };
    }

    handleOnChange = event => {
        console.log(event.target.value);
        const userInput = event.target.value;
        this.setState(
            {
                buffer: userInput
            }
        );
    };

    onSubmit = event => {
        fetch("https://avatar.labpro.dev/friends/" + this.state.buffer, {
            method: 'GET'
        })
        .then(function(response) {
            if (response.status === 200) return response.json();
            throw new Error(response.statusText);
        })
        .then(json => this.setState({ reply: json.payload }))
        .catch(error => console.log(error));

        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        const { buffer, reply } = this.state;
        console.log("Buffer: " + buffer);
        console.log("Reply: " + JSON.stringify(reply));
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="filled-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="filled"
                    onChange={this.handleOnChange}
                />
                <br />
                <Button onClick={this.onSubmit}>
                    Draw!
                </Button>
                <Graph reply={ this.state.reply } />
            </form>
        );
    }
}

export default withStyles(styles)(InputForm);