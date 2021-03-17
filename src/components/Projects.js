import React, { useState } from 'react';
import './Projects.css';

function Projects(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
       <div className="projects-container">
           <h1>Projects go here</h1>
       </div>
    );
};

export default Projects;