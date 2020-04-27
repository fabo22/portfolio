import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Fabrizio Lopez</h2>
                        <i
                        id="icon"
                        className="fa fa-address-book"
                        aria-hidden="true"
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Feel free to contact me if you have any questions. Here are my main forms of contact, cell and e-mail. You can also contact me via LinkedIn if you prefer.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Cutive'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (972) 567-8148
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Cutive'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        lopezfabrizio@ymail.com
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