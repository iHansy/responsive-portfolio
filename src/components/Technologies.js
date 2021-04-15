import React, { useState } from 'react';
import './Technologies.css';
import { makeStyles, Grid, Card, CardContent, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
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
        ],
        iconNames: [
            'CSS3',
            'HTML',
            'Java',
            'Python',
            'Javascript',
            'React',
            'Vue',
            'Material UI',
            'Node.js',
            'npm',
            'postgreSQL',
            'Heroku',
            'Github',
        ]
    });

    return (
        <div className="technologies-container" id="Technologies">
            <Typography variant="h3">My Tech Stack</Typography>
            <Grid container className={classes.root} alignItems="center">
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {state.iconImages.map((icon, i) => (
                            <Grid item key={icon}>
                                <img src={icon} alt={icon} />
                                {state.iconNames.map((name, i) => {
                                    return (
                                        <Typography key={i}>
                                            {name}testing
                                        </Typography>

                                    )
                                })}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};