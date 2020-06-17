import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleProjects() {
        if(this.state.activeTab === 0) {
            return(

                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://github.com/fabo22/postgame/raw/master/public/homepage.png) center / cover'}}>PostGame</CardTitle>
                        <CardText>
                            PostGame is a MERN Stack social media application for gamers to talk about the games they're playing and to find others to play with!
                        </CardText>
                        <CardActions border>
                            <Button style={{color:'black'}} href="https://github.com/fabo22/postgame" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
                            <Button style={{color:'black'}} href="https://postgame-app.herokuapp.com/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>

            )
        } else if(this.state.activeTab === 1) {
            return(

                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://github.com/fabo22/convoh-app/raw/master/public/images/home-page.png) center / cover'}}>ConvOh</CardTitle>
                        <CardText>
                            A social media application where you can start a conversation with others! Converse about news, memes, sports, videogames, and more!
                        </CardText>
                        <CardActions border>
                            <Button style={{color:'black'}} href="https://github.com/fabo22/convoh-app" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
                            <Button style={{color:'black'}} href="https://convoh.herokuapp.com/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>

            )
        } else if(this.state.activeTab === 2) {
            return(

                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://camo.githubusercontent.com/b7bd152b49fa59815b65ec264a6b9c74f519022a/68747470733a2f2f692e696d6775722e636f6d2f4778726c774c652e706e67) center / cover'}}>Game Night</CardTitle>
                        <CardText>
                            Game Night is a social networking site that allows users to connect with groups and attend events based off a shared enthusiasm for board or video games.
                        </CardText>
                        <CardActions border>
                            <Button style={{color:'black'}} href="https://github.com/fabo22/game-night" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
                            <Button style={{color:'black'}} href="https://game-night-efm.herokuapp.com/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>

            )
        } else if(this.state.activeTab === 3) {
            return(
                
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'gold', height: '176px', background: 'url(https://github.com/fabo22/slot-machine-game/raw/master/images/game-screenshot.jpg) center / cover'}}>Slot Machine Game</CardTitle>
                        <CardText>
                        Win tokens by matching 3 symbols in a horizontal line. To win more, you can bet more and multiply your tokens by 2 or 3 times. Made entirely in vanilla JavaScript.
                        </CardText>
                        <CardActions border>
                            <Button style={{color:'black'}} href="https://github.com/fabo22/slot-machine-game" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
                            <Button style={{color:'black'}} href="https://fabo22.github.io/slot-machine-game/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>

            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{color: 'white'}}>React Projects</Tab>
                    <Tab style={{color: 'white'}}>Express Projects</Tab>
                    <Tab style={{color: 'white'}}>Django Projects</Tab>
                    <Tab style={{color: 'white'}}>Other Projects</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleProjects()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}