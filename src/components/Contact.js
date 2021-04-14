import React, { useState } from 'react';
import './Contact.css';

export default function Contact(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
       <div className='contact-container' id="Contact">
           <h1>Contact form goes here</h1>
       </div>
    );
};