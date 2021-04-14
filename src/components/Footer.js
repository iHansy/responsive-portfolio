import React, { useState } from 'react';
import './Footer.css';

export default function Footer(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
       <div className="footer-container">
           <h1>Footer goes here</h1>
       </div>
    );
};