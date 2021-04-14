import React, { useState } from 'react';

export default function ComponentTemplate(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
       <div>
           <h1>{state}</h1>
       </div>
    );
};