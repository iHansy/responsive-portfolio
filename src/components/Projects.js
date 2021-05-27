import React, { useState } from 'react';
import { makeStyles, Grid, Box, Card, CardMedia, CardContent, Slide, Dialog, DialogTitle } from '@material-ui/core';
import './Projects.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyItems: 'end',
        paddingBottom: '50px'
    },
    projectBox: {
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '36px',
            marginRight: '36px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '48px',
            marginRight: '48px',
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '72px',
            marginRight: '72px',
        },

    },
    projectCard: {
        backgroundColor: theme.cardBackground,
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0px 10px 13px -6px rgb(0 0 0 / 30%), 0px 20px 31px 3px rgb(0 0 0 / 30%), 0px 8px 38px 7px rgb(0 0 0 / 30%)'
        }
    },
    media: {
        height: 0,
        paddingTop: '90.25%', // 16:9
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Projects(props) {

    const classes = useStyles();

    // Using hooks we're creating local state
    const [state, setState] = useState({
        projectDialog: false,
        dialogItem: {},
        fileList: [],
        projects: [
            { name: 'Portfolio', alias: 'portfolio', description: '', url: '', img1: '/images/projects/portfolio-1.png' },
            { name: 'Adventure Hub', alias: 'adventure-hub', description: '', url: '', img1: '/images/projects/adventure-hub-1.png' },
            { name: 'Friendly Wager', alias: 'friendly-wager', description: '', url: '', img1: '/images/projects/friendly-wager-1.png' },
            { name: 'Feedback Tracker', alias: 'feedback-tracker', description: '', url: '', img1: '/images/projects/feedback-tracker-1.png'},
            { name: 'Task Manager', alias: 'task-manager', description: '', url: '', img1: '/images/projects/task-manager-1.png' },
            { name: 'Simple Calculator', alias: 'simple-calculator', description: '', url: '', img1: '/images/projects/simple-calculator-1.png' }
        ]
    });

    function openProjectDialog(projectItem) {
        fetch('http://localhost:5000/api/file-reader')
        .then(res => res.text())
        .then(res => setState({ ...state, fileList: JSON.parse(res), projectDialog: true, dialogItem: projectItem }));
        
        let imgNumb = 1;
        for (let i = 0; i < state.fileList.length; i++) {
            if (state.fileList[i].includes(state.dialogItem.alias) && !state.fileList[i].includes('-1')) {
                imgNumb += 1;
                const imgProperty = 'img' + imgNumb;
                state.dialogItem[imgProperty] = state.fileList[i];
            }
        }
        console.log(state.dialogItem);
    };
    function closeProjectDialog() {
        setState({ ...state, projectDialog: false });
    };

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
            <Box px={3} py={5} display="flex" justifyContent="center" className={classes.projectBox}>
                <Grid container className={classes.root} xs={12} spacing={5}>
                    {state.projects.map((projectItem, i) => {
                        return (
                            <Grid item key={i} xs={12} md={6} >
                                <Card elevation={3} className={classes.projectCard} onClick={() => openProjectDialog(projectItem)}>
                                    <CardMedia
                                        component="img"
                                        image={projectItem.img1}
                                        title={projectItem.name}
                                    />
                                    <CardContent>
                                        <h3>{projectItem.name}</h3>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <Dialog
                open={state.projectDialog}
                TransitionComponent={Transition}
                keepMounted
                fullWidth='true'
                maxWidth='md'
                onClose={closeProjectDialog}
            >
                <DialogTitle style={{ fontFamily: 'Poppins' }}>{state.dialogItem.name}</DialogTitle>
            </Dialog>
        </div>
    );
};