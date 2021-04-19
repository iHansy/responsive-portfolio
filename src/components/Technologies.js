import React, { useState } from 'react';
import './Technologies.css';
import { makeStyles, Grid, Card, CardContent, Typography, Paper, Box, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Technologies(props) {

    const classes = useStyles();
    const [spacing, setSpacing] = useState(6);
    const [state, setState] = useState({
        technologies: [
            { url: '/images/javascript.png', name: 'JavaScript' },
            { url: '/images/react.png', name: 'React.js' },
            { url: '/images/vue.png', name: 'Vue.js' },
            { url: '/images/node.png', name: 'Node.js' },
            { url: '/images/java.png', name: 'Java' },
            { url: '/images/python.png', name: 'Python' },
            { url: '/images/postgresql.png', name: 'postgreSQL' },
            { url: '/images/html.png', name: 'HTML5' },
            { url: '/images/css.png', name: 'CSS3' },
            { url: '/images/sass.png', name: 'SASS' },
            { url: '/images/mui.png', name: 'Material UI' },
            { url: '/images/npm.png', name: 'NPM' },
            { url: '/images/git.png', name: 'Git' },
            { url: '/images/github.png', name: 'Github' },
            { url: '/images/heroku.png', name: 'Heroku' }
        ]
    });

    return (
        <div className="technologies-container" id="Technologies">
            <Typography variant="h3">My Tech Stack</Typography>
            <Grid container className={classes.root} alignItems="center">
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {state.technologies.map((techItem, i) => {
                            // was using this at first, but images weren't appearing in production. Very cool learning the
                            // Built in split method though.
                            // const technologyName = techItem.split('/')[2].split('.png')[0]
                            return (
                                <Grid item key={i}>
                                    <img height="144" width="144" src={techItem.url} alt={techItem.name} />
                                    <Typography variant="h5"> {techItem.name} </Typography>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};