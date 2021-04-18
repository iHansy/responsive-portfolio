import React, { useState } from 'react';
import './Technologies.css';
import { makeStyles, Grid, Card, CardContent, Typography, Paper, Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Technologies(props) {

    const classes = useStyles();
    const [spacing, setSpacing] = useState(6);
    const [state, setState] = useState({
        technologyUrl: [
            '/images/CSS.png',
            '/images/HTML.png',
            '/images/Java.png',
            '/images/Python.png',
            '/images/JavaScript.png',
            '/images/React.js.png',
            '/images/Vue.js.png',
            '/images/MUI.png',
            '/images/Node.js.png',
            '/images/NPM.png',
            '/images/postgreSQL.png',
            '/images/Heroku.png',
            '/images/Github.png'
        ]
    });

    return (
        <div className="technologies-container" id="Technologies">
            <Typography variant="h3">My Tech Stack</Typography>
            <Grid container className={classes.root} alignItems="center">
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {state.technologyUrl.map((url, i) => {
                            const technologyName = url.split('/')[2].split('.png')[0]
                            return (
                                <Grid item key={i}>
                                    <img src={url} alt={technologyName} />
                                    <Box sx={{ fontWeight: 'bold' }}>
                                        <Typography variant="h5">
                                            {technologyName}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};