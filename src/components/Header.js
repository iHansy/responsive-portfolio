import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Button, SwipeableDrawer, List, ListItem,
  ListItemIcon, ListItemText, Divider
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MailIcon from '@material-ui/icons/Mail';
import StarsIcon from '@material-ui/icons/Stars';
import ComputerIcon from '@material-ui/icons/Computer';
import SimCardIcon from '@material-ui/icons/SimCard';
import CloseIcon from '@material-ui/icons/Close';

//custom material ui styling
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  muiList: {
    padding: '0px',
  },
  fullList: {
    width: 'auto',
  },
  menuIcon: {
    height: '30px',
    width: '30px',
  },
  menuClose: {
    color: 'black',
    marginLeft: '22vh',
    height: '32px',
    width: '32px',
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

const ColorListItem = withStyles((theme) => ({
  root: {
    color: theme.palette.textPrimary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.textPrimary.second,
    },
    height: '65px',
  },
}))(ListItem);

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
      <List className={classes.muiList}>
        <ColorListItem button>
          <ListItemIcon><CloseIcon className={classes.menuClose} /></ListItemIcon>
        </ColorListItem>
        <Divider />
        <ColorListItem button>
          <ListItemIcon><StarsIcon /></ListItemIcon>
          <ListItemText primary='About Me' />
        </ColorListItem>
        <Divider />
        <ColorListItem button>
          <ListItemIcon><ComputerIcon /></ListItemIcon>
          <ListItemText primary='Technologies' />
        </ColorListItem>
        <Divider />
        <ColorListItem button>
          <ListItemIcon><SimCardIcon /></ListItemIcon>
          <ListItemText primary='Projects' />
        </ColorListItem>
        <Divider />
        <ColorListItem button>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary='Contact' />
        </ColorListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <header className="header-container">
      <div className="header-name-container">
        <h1 className="header-name"><span className="first-letter-color">H</span>ans <span className="first-letter-color">A</span>ccola</h1>
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
          <ColorButton onClick={toggleDrawer('right', true)}><MenuRoundedIcon className={classes.menuIcon} /></ColorButton>
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