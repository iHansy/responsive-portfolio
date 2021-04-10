import React, { useState } from 'react';
import './Technologies.css';
import IconAmazonwebservices from 'react-devicon/amazonwebservices/original'

function Technologies(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState({
        icons: [
            'css', 
            'html', 
            'java', 
            'python', 
            'javascript', 
            'react', 
            'vue', 
            'mui', 
            'node', 
            'npm', 
            'postgresql', 
            'heroku', 
            'github'
        ]
    });

    return (
        <div className="technologies-container" id="Technologies">
            <h1>Technologies go here</h1>
            {state.icons.map((icon, i) => {
                <p>{icon}</p>
            })}
        </div>
    );
};

export default Technologies;