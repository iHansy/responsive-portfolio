import React, { useState } from 'react';
import './Technologies.css';
import { makeStyles, Grid, Card, CardContent, Typography, Paper, Box, Button } from '@material-ui/core';
import { border } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyItems: 'end'
    },
    techImg: {
        [theme.breakpoints.up('xs')]: {
            width: '80px',
            height: '80px'
        },
        [theme.breakpoints.up('sm')]: {
            width: '110px',
            height: '110px'
        },
        [theme.breakpoints.up('md')]: {
            width: '150px',
            height: '150px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '180px',
            height: '180px'
        },
    },
    techGridItem: {
        marginBottom: '2rem'
    },
    techSkillSet: {
        height: '15px',
        width: '15px',
        backgroundColor: 'rgb(56, 255, 56)',
        borderRadius: '50%',
        display: 'inline-block',
        border: '2px solid black'
    },
    SSParent: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    SSContainer: {
        width: '60%',
        margin: 'auto',
        marginTop: '10px',
        [theme.breakpoints.up('xs')]: {
            width: '65%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '55%',
        },
        [theme.breakpoints.up('md')]: {
            width: '60%',
        },
        [theme.breakpoints.up('md')]: {
            width: '45',
        }
    }
}));

export default function Technologies(props) {

    const classes = useStyles();
    // not using spacing, messes with grid items being centered
    // const [spacing, setSpacing] = useState(0);
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
            <Box my={6}>
                <Typography variant="h3" mb={10}>Tech I'm Familiar With</Typography>
            </Box>
            <Box>
                <Grid container className={classes.root} xs={12}>
                    {state.technologies.map((techItem, i) => {
                        // was using this at first, but images weren't appearing in production. Very cool learning the
                        // Built in split function though.
                        // const technologyName = techItem.split('/')[2].split('.png')[0]
                        return (
                            <Grid item key={i} xs={6} sm={4} md={3} lg={3} className={classes.techGridItem}>
                                <img className={classes.techImg} src={techItem.url} alt={techItem.name} />
                                <Typography variant="h5"> {techItem.name} </Typography>
                                <div className={classes.SSContainer}>
                                    <div className={classes.SSParent}>
                                        <span className={classes.techSkillSet}></span>
                                        <span className={classes.techSkillSet}></span>
                                        <span className={classes.techSkillSet}></span>
                                        <span className={classes.techSkillSet}></span>
                                        <span className={classes.techSkillSet}></span>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    );
};