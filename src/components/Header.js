import React, { useState } from 'react';
import clsx from 'clsx';
import { Button, SwipeableDrawer, List, ListItem, 
        ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MailIcon from '@material-ui/icons/Mail';
import StarsIcon from '@material-ui/icons/Stars';
import ComputerIcon from '@material-ui/icons/Computer';
import SimCardIcon from '@material-ui/icons/SimCard';

//custom material ui styling
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
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

  //hook to set state according to drawer direction
  const [state, setState] = React.useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon><StarsIcon /></ListItemIcon>
          <ListItemText primary='About Me' />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon><ComputerIcon /></ListItemIcon>
          <ListItemText primary='Technologies' />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon><SimCardIcon /></ListItemIcon>
          <ListItemText primary='Projects' />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>
      </List>
    </div>
  );

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
          <ColorButton onClick={toggleDrawer('right', true)}><MenuRoundedIcon /></ColorButton>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </div>
      </nav>
    </header>
  );
};

export default Header;