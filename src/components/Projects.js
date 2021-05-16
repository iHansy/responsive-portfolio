import React, { useState } from 'react';
import { makeStyles, Grid, Box, Card, CardMedia } from '@material-ui/core';
import './Projects.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyItems: 'end',
        paddingBottom: '50px'
    },
    projectCard: {
        maxHeight: '500px',
        maxWidth: '550px',
        margin: 'auto',
        display: 'flex'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
}))

export default function Projects(props) {

    const classes = useStyles();

    // Using hooks we're creating local state
    const [state, setState] = useState({
        projects: [
            { name: 'Portfolio', description: '', url: '', img1: '/images/projects/portfolio-1.png' },
            { name: 'Adventure Hub', description: '', url: '', img1: '/images/projects/adventure-hub-1.png' },
            { name: 'Friendly Wager', description: '', url: '', img1: '/images/projects/friendly-wager-1.png' },
            { name: 'Feedback Tracker', description: '', url: '', img1: '/images/projects/feedback-tracker-1.png' },
            { name: 'Task Manager', description: '', url: '', img1: '/images/projects/task-manager.png' },
            { name: 'Simple Calculator', description: '', url: '', img1: '/images/projects/simple-calculator.png' },
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
            <Box mx={10} py={5} display="flex" justifyContent="center">
                <Grid container className={classes.root} xs={12} spacing={5}>
                    {state.projects.map((projectItem, i) => {
                        return (
                            <Grid item key={i} xs={12} md={6} className={classes.gridItem} >
                                <Card>
                                    <div class="project-img-div">
                                        {/* <img class="projects-img" src={projectItem.img1} alt={projectItem.name} /> */}
                                        {/* <CardMedia
                                            className={classes.media}
                                            image="/static/images/cards/paella.jpg"
                                            title="Paella dish"
                                        /> */}
                                        <CardMedia
                                            className={classes.media}
                                            image={projectItem.img1}
                                            title={projectItem.name}
                                        />
                                    </div>
                                    <h3 class="projects-name">{projectItem.name}</h3>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    );
};