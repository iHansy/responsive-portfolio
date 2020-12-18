import React, { useState } from 'react';

function AboutMe(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
        <div>
            <div>
                <img src="headshot-4.jpg" alt="Girl in a jacket" width="300" height="300"></img>
            </div>
            <div>
                <p>About me description goes here!</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default AboutMe;