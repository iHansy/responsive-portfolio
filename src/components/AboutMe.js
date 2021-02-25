import React, { useState } from 'react';

function AboutMe(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
        <div className="aboutme-container">
            <div className="aboutme-img-container">
                <img className="aboutme-img" src="headshot-4.jpg" alt="Headshot of Hans Accola"></img>
            </div>
            <div className="aboutme-description">
                <h1>WELCOME!</h1>
                <p>Hi there, I’m Hans Accola. Nice to meet you! I’m originally from Norway but moved to Minnesota when I was a child and have been here ever since. Here are a few of my favorite things to do outside of coding:</p>
                <ul>
                    <li>Going on hikes with my amazing fiancé, Marie</li>
                    <li>Playing basketball and going to the gym</li>
                    <li>Bringing my 95lb black lab to the doggo park</li>
                    <li>Taking typing speed tests on 10fastfingers.com, max WPM so far is 150+</li>
                </ul>
                <p>My professional experience started in 2017 as an inside medical sales rep. After that I worked in IT / IoT services testing indoor tracking devices (RTLS). Unfortunately, due to COVID I got laid off. But that opened a new door to pursue my dream of becoming a software engineer! With that spark I earned a certification in Full-Stack Software Engineering at Prime Digital Academy here in Minneapolis.</p>
            </div>
        </div>
    );
};

export default AboutMe;