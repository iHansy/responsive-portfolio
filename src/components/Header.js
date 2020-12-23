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
                    <li><Button className="btn-nav-link"><p className="header-nav-texts">About Me</p></Button></li>
                    <li><Button className="btn-nav-link"><p className="header-nav-texts">Projects</p></Button></li>
                    <li><Button className="btn-nav-link"><p className="header-nav-texts">Technologies</p></Button></li>
                    <li><Button className="btn-nav-link"><p className="header-nav-texts">Contact</p></Button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;