import React, { Component } from 'react';
import resume from '../downloads/resume.pdf';

export default class Resume extends Component {
    render() {
        return(
            <div>
                <h1>Resume Page</h1>
                <a href={resume} download>My Resume</a>
            </div>
        );
    }
}