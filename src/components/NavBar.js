import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Guide from './Guide';
import About from './About';
import { Grid } from '@material-ui/core';

class NavBar extends React.Component {
    render() {
        return (
            <AppBar position="sticky">
                <Toolbar>
                    <Grid container alignItems="flex-start" justify="flex-start" direction="row" >
                        <Typography variant="h6" color="inherit">
                            Avatar Expander
                        </Typography>
                    </Grid>
                    <Grid container alignItems="flex-start" justify="center" direction="row" >
                        <Typography variant="subtitle" color="inherit">
                            Nodes expanded: {this.props.nodeCount}
                        </Typography>
                    </Grid>
                    <Grid container alignItems="flex-start" justify="flex-end" direction="row" >
                        <Guide />
                        <About />
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}
export default NavBar;