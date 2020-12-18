import React, { useState } from 'react';

function Header(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
        <header className="header-container">
            <div className="header-name-container">
                <h1 className="header-name">Hans Accola</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li className="nav-link"><a href="#">About</a></li>
                    <li className="nav-link"><a href="#">Projects</a></li>
                    <li className="nav-link"><a href="#">Technologies</a></li>
                    <li className="nav-link"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;