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
            '/images/css.png',
            '/images/html.png',
            '/images/java.png',
            '/images/python.png',
            '/images/javascript.png',
            '/images/react.png',
            '/images/vue.png',
            '/images/mui.png',
            '/images/node.png',
            '/images/npm.png',
            '/images/postgresql.png',
            '/images/heroku.png',
            '/images/github.png'
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
                                    <img src={techItem} alt={techItem} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};