import React, { useState } from 'react';
import './AboutMe.css';

export default function AboutMe(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state'); // not being used

    return (
        <div className="aboutme-container" id="About-Me">
            <div className="aboutme-img-container">
                <img className="aboutme-img" src="/images/headshot-4.jpg" alt="Headshot of Hans Accola"></img>
            </div>
            <div className="aboutme-description">
                <h1 className="aboutme-welcome">Welcome!</h1>
                <p className="aboutme-p1">Hi there, I’m Hans Accola, a full-stack software developer. Nice to meet you! I’m originally from Norway but moved to Minnesota when I was a child and have lived here ever since. Here are a few of my favorite things to do outside of coding:</p>
                <ul className="aboutme-list">
                    <li class="aboutme-li">Going on hikes with my amazing fiancé, Marie</li>
                    <li class="aboutme-li">Playing basketball and working out at the gym</li>
                    <li class="aboutme-li">Bringing my 95lb black lab to the doggo park</li>
                    <li class="aboutme-li">Taking typing speed tests on 10fastfingers.com, max so far is 150+ WPM</li>
                </ul>
                <p className="aboutme-p2">My professional experience started in 2017 as an inside medical sales rep. After that I worked in IT / IoT services, testing and configuring indoor tracking devices (RTLS). Unfortunately, due to COVID I got laid off. But that opened a new door to pursue my dream of becoming a software engineer! With that spark I earned a certification in Full-Stack Software Engineering at Prime Digital Academy, here in Minneapolis.</p>
                <a className="resume-link" href="/images/hans-accola-resume.pdf" target="_blank">Click here to check out my resume!</a>
            </div>
        </div>
    );
};