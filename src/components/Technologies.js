import React, { useState, useEffect } from 'react';
import './Technologies.css';
import { makeStyles, Grid, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyItems: 'end',
        paddingBottom: '50px'
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
    techSkill1: {
        height: '15px',
        width: '15px',
        backgroundColor: '#ff0000',
        borderRadius: '50%',
        display: 'inline-block',
        border: '2px solid black'
    },
    techSkill2: {
        height: '15px',
        width: '15px',
        backgroundColor: '#ff7504',
        borderRadius: '50%',
        display: 'inline-block',
        border: '2px solid black'
    },
    techSkill3: {
        height: '15px',
        width: '15px',
        backgroundColor: '#ffc400',
        borderRadius: '50%',
        display: 'inline-block',
        border: '2px solid black'
    },
    techSkill4: {
        height: '15px',
        width: '15px',
        backgroundColor: '#d9ff00',
        borderRadius: '50%',
        display: 'inline-block',
        border: '2px solid black'
    },
    techSkill5: {
        height: '15px',
        width: '15px',
        backgroundColor: '#00ff00',
        borderRadius: '50%',
        display: 'inline-block',
        border: '2px solid black'
    },
    techSkillEmpty: {
        height: '15px',
        width: '15px',
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
            { img: '/images/technologies/javascript.png', name: 'JavaScript', skillLevel: 5 },
            { img: '/images/technologies/react.png', name: 'React.js', skillLevel: 5 },
            { img: '/images/technologies/vue.png', name: 'Vue.js', skillLevel: 5 },
            { img: '/images/technologies/node.png', name: 'Node.js', skillLevel: 3 },
            { img: '/images/technologies/java.png', name: 'Java', skillLevel: 2 },
            { img: '/images/technologies/python.png', name: 'Python', skillLevel: 1 },
            { img: '/images/technologies/postgresql.png', name: 'postgreSQL', skillLevel: 4 },
            { img: '/images/technologies/html.png', name: 'HTML5', skillLevel: 5 },
            { img: '/images/technologies/css.png', name: 'CSS3', skillLevel: 5 },
            { img: '/images/technologies/sass.png', name: 'SASS', skillLevel: 4 },
            { img: '/images/technologies/mui.png', name: 'Material UI', skillLevel: 4 },
            { img: '/images/technologies/npm.png', name: 'NPM', skillLevel: 3 },
            { img: '/images/technologies/git.png', name: 'Git', skillLevel: 4 },
            { img: '/images/technologies/github.png', name: 'Github', skillLevel: 4 },
            { img: '/images/technologies/heroku.png', name: 'Heroku', skillLevel: 3 }
        ]
    });
    let [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(function () {
        updateWindowWidth();
        window.addEventListener("resize", updateWindowWidth);

        return function cleanup() {
            window.removeEventListener("resize", updateWindowWidth);
        }
    }, []);

    function updateWindowWidth() {
        setWindowWidth(window.innerWidth);
    }

    return (
        <div className="technologies-container" id="Technologies">
            <Box>
                <div class="top-border"></div>
                <h1 class="divider">
                    <span></span>
                    <span class="text-span">
                        <div class="bracket">&#123;</div>
                        {windowWidth <= 850 ? `Tech Stack` : `Technology Stack`}
                        <div class="bracket">&#125;</div>
                    </span>
                    <span></span>
                </h1>
            </Box>
            <Box>
                <Grid container className={classes.root} xs={12}>
                    {state.technologies.map((techItem, i) => {
                        return (
                            <Grid item key={i} xs={6} sm={4} md={3} lg={3} className={classes.techGridItem}>
                                <img className={classes.techImg} src={techItem.img} alt={techItem.name} />
                                <h2 class="tech-item-text"> {techItem.name} </h2>
                                <div className={classes.SSContainer}>
                                    <div className={classes.SSParent}>
                                        <span className={techItem.skillLevel === 1 ? classes.techSkill1 : techItem.skillLevel === 2 ? classes.techSkill2 : techItem.skillLevel === 3 ? classes.techSkill3 : techItem.skillLevel === 4 ? classes.techSkill4 : techItem.skillLevel === 5 ? classes.techSkill5 : null}></span>
                                        <span className={techItem.skillLevel === 2 ? classes.techSkill2 : techItem.skillLevel === 3 ? classes.techSkill3 : techItem.skillLevel === 4 ? classes.techSkill4 : techItem.skillLevel === 5 ? classes.techSkill5 : classes.techSkillEmpty}></span>
                                        <span className={techItem.skillLevel === 3 ? classes.techSkill3 : techItem.skillLevel === 4 ? classes.techSkill4 : techItem.skillLevel === 5 ? classes.techSkill5 : classes.techSkillEmpty}></span>
                                        <span className={techItem.skillLevel === 4 ? classes.techSkill4 : techItem.skillLevel === 5 ? classes.techSkill5 : classes.techSkillEmpty}></span>
                                        <span className={techItem.skillLevel === 5 ? classes.techSkill5 : classes.techSkillEmpty}></span>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <div class="bottom-border"></div>
        </div>
    );
};