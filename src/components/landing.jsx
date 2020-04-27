import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Contact extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <h1 className="big-name">Fabrizio Lopez</h1>

                        <div className="banner-text">
                            <h1>Full-Stack Web Developer | Software Engineer</h1>

                            <hr/>

                            <p>HTML/CSS | Materialize | JavaScript | React | NodeJS | Express | mongoDB | Python | Django</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/fabrizio-lopez-91ba50195/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/fabo22/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/fabriziolopez/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                                
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}