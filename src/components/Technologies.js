import React, { useState } from 'react';
import './Technologies.css';
import { makeStyles, Grid, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    card: {
        height: 150,
        width: 175,
        margin: 'auto'
    }
}));

export default function Technologies(props) {

    const classes = useStyles();
    const [spacing, setSpacing] = useState(6);
    const [state, setState] = useState({
        iconImages: [
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
            <Typography variant="h3">Technologies go here</Typography>
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {state.iconImages.map((icon, i) => (
                            <Grid item key={icon}>
                                    <img src={icon} alt={icon} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};