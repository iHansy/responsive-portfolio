import React, { useState } from 'react';

function Header(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
        <header>
            <div className="header-name">
                <h1 className="">Hans Accola</h1>
            </div>
        </header>
    );
};

export default Header;