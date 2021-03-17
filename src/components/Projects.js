import React, { useState } from 'react';

function Projects(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
       <div>
           <h1>Projects go here</h1>
       </div>
    );
};

export default Projects;