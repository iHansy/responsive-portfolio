import React, { useState } from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import './Projects.css';

export default function Projects(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
       <div className="projects-container" id="Projects">
            <Box>
                <h1 class="divider">
                    <span></span>
                    <span class="text-span">
                        <div class="bracket">&#123;</div>
                        Projects
                        <div class="bracket">&#125;</div>
                    </span>
                    <span></span>
                </h1>
            </Box>
       </div>
    );
};