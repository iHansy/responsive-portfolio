import React, { useState } from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import './Projects.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyItems: 'end',
        paddingBottom: '50px'
    },
}))

export default function Projects(props) {

    const classes = useStyles();

    // Using hooks we're creating local state
    const [state, setState] = useState({
        projects: [
            {title: 'Portfolio', img: '', description: ''},
            {title: 'Adventure Hub', img: '', description: ''},
            {title: 'Friendly Wager', img: '', description: ''},
            {title: 'Feedback Tracker', img: '', description: ''},
            {title: 'Task Manager', img: '', description: ''},
            {title: 'Simple Calculator', img: '', description: ''},
        ]
    });

    return (
       <div className="projects-container" id="Projects">
            <Box>
                <h1 class="divider">
                    <span></span>
                    <span class="text-span">
                        <div class="bracket left-bracket">&#123;</div>
                        Projects
                        <div class="bracket right-bracket">&#125;</div>
                    </span>
                    <span></span>
                </h1>
            </Box>
            <Box>
                <Grid container className={classes.root} xs={12}>

                </Grid>
            </Box>
       </div>
    );
};