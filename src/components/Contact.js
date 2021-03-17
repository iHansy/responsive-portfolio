import React, { useState } from 'react';

function Contact(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
       <div>
           <h1>Contact form goes here</h1>
       </div>
    );
};

export default Contact;