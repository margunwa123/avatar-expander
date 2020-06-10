import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

class TargetDataCard extends React.Component {
    render() {
      const { classes } = this.props;
      return (
        <Card className={classes.root}>
          { this.props.targetData !== null &&
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Current Target
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              { this.props.targetData.id} - { this.props.targetData.name }
              </Typography>
              <Typography variant="body2" component="p">
                { this.props.targetData.element }
              </Typography>
            </CardContent>
          }
        </Card>
      );
    }
  }
  
  export default withStyles(styles)(TargetDataCard);