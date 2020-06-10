import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

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