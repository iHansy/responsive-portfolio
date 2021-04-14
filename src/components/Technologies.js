import React, { useState } from 'react';
import './Technologies.css';
import { makeStyles, Grid, Card, CardContent} from '@material-ui/core';

export default function Technologies(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState({
        iconImages: [
            '/images/css.png',
            '/images/html.png',
            '/images/java.png',
            '/images/python.png',
            '/images/javascript.png',
            '/images/react.png',
            '/images/vue.png',
            '/images/mui.png',
            '/images/node.png',
            '/images/npm.png',
            '/images/postgresql.png',
            '/images/heroku.png',
            '/images/github.png'
        ]
    });

    return (
        <div className="technologies-container" id="Technologies">
            <h1>Technologies go here</h1>
            <ul>
                {state.iconImages.map((icon, i) => {
                    return (
                        <img key={i} src={icon} alt={icon}/>
                    )
                })}
            </ul>
        </div>
    );
};