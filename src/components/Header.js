import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

//custom material ui styling
const useStyles = makeStyles((theme) => ({
  //not currently being used
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.textPrimary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.textPrimary.second,
      },
    },
  }))(Button);

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
            <nav className="header-nav-links-container">
                <ul className="header-nav-links">
                    <li><ColorButton>About Me</ColorButton></li>
                    <li><ColorButton>Technologies</ColorButton></li>
                    <li><ColorButton>Projects</ColorButton></li>
                    <li><ColorButton>Contact</ColorButton></li>
                </ul>
            </nav>
            <nav className="header-nav-menu-container">
              <div>
                <MenuRoundedIcon />
              </div>
            </nav>
        </header>
    );
};

export default Header;