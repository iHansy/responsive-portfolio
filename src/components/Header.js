import React, { useState } from 'react';
import { List, Button } from '@material-ui/core';

function Header(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
        <header className="header-container">
            <div className="header-name-container">
                <h1 className="header-name">Hans Accola</h1>
            </div>
            <nav className="header-nav-container">
                <ul className="header-nav-links">
                    <li><Button><a className="header-nav-link" href="#">About</a></Button></li>
                    <li><Button><a className="header-nav-link" href="#">Projects</a></Button></li>
                    <li><Button><a className="header-nav-link" href="#">Technologies</a></Button></li>
                    <li><Button><a className="header-nav-link" href="#">Contact</a></Button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;