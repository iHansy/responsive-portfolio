import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//custom material ui styling
const useStyles = makeStyles((theme) => ({
    navBtn: {
        '&:hover': {
          backgroundColor: 'rgb(190, 200, 210)',
          borderColor: '#0062cc',
          boxShadow: 'none',
        },
    }
}));

function Header(props) {

    //for styles
    const classes = useStyles();

    // Example hook to create local state
    const [state, setState] = useState('Starter state');

    return (
        <header className="header-container">
            <div className="header-name-container">
                <h1 className="header-name">Hans Accola</h1>
            </div>
            <nav className="header-nav-container">
                <ul className="header-nav-links">
                    <li><Button className={classes.navBtn}><p className="header-nav-texts">About Me</p></Button></li>
                    <li><Button className={classes.navBtn}><p className="header-nav-texts">Projects</p></Button></li>
                    <li><Button className={classes.navBtn}><p className="header-nav-texts">Technologies</p></Button></li>
                    <li><Button className={classes.navBtn}><p className="header-nav-texts">Contact</p></Button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;