import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import resume from '../downloads/resume.pdf';

export default class AboutMe extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Fabrizio Lopez</h2>
                        <img
                        src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0="
                        alt="avatar"
                        style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi, I'm Fabrizio Lopez. I'm a recent graduate of the Software Engineering Bootcamp at General Assembly. While at the bootcamp, I created many full-stack applications using Javascript technologies such as React, Express, NodeJs, and Python technologies such as Django. I have also worked with mongoDB and Postgresql as databases. I am a passionate Software Engineer, and I am excited to continue to grow as one!</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Skills and Interests</h2>
                        <hr />
                        <br/>
                        <p style={{fontSize: '20px'}}>Some of the things I'm interested in and have a knack for:</p>
                        <div className="about-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Cutive'}}>
                                    <i className="fa fa-angle-right" aria-hidden="true"/>
                                        Full-Stack Web Development
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Cutive'}}>
                                    <i className="fa fa-angle-right" aria-hidden="true"/>
                                        Software Engineering
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Cutive'}}>
                                    <i className="fa fa-angle-right" aria-hidden="true"/>
                                        Pianist
                                    </ListItemContent>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Cutive'}}>
                                    <i className="fa fa-angle-right" aria-hidden="true"/>
                                        Gamer
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}