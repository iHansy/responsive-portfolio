import React, { useState } from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import './Contact.css';

export default function Contact(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
        <div className='contact-container' id="Contact">
            <Box>
                <div class="top-border"></div>
                <h1 class="divider">
                    <span></span>
                    <span class="text-span">
                        <div class="bracket">&#123;</div>
                        Contact
                        <div class="bracket">&#125;</div>
                    </span>
                    <span></span>
                </h1>
            </Box>
            <div class="bottom-border"></div>
        </div>
    );
};