import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const styles = makeStyles({
    table: {
      minWidth: 650,
    },
});

class FriendsTable extends React.Component {
  renderElement(element) {
    switch (element) {
      case 'fire':
        return <FontAwesomeIcon icon={faCircle} color='red' />;
      case 'water':
        return <FontAwesomeIcon icon={faCircle} color='blue' />;
      case 'air':
        return <FontAwesomeIcon icon={faCircle} color='green' />;
      case 'earth':
        return <FontAwesomeIcon icon={faCircle} color='yellow' />;
      default:
        return <FontAwesomeIcon icon={faCircle} color='black' />;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <TableContainer component={Paper}>
        {this.props.friendsList.length > 0 &&
          <Typography variant="h5">Friends</Typography>
        }
        {this.props.friendsList.length > 0 &&
          <Table className={classes.table} aria-label="friends table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Element</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.friendsList.map((friends) => (
                <TableRow onClick={() => this.props.onClick(friends.id) }>
                  <TableCell>{friends.id}</TableCell>
                  <TableCell>{friends.name}</TableCell>
                  <TableCell>
                    {this.renderElement(friends.element)}
                    &nbsp;
                    {friends.element}
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