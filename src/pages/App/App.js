import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import Particles from 'react-particles-js';
import './App.css';
import { Navigation, Layout, Header, Drawer, Content } from 'react-mdl';
import AboutMe from '../../components/aboutme';
import Contact from '../../components/contact';
import Projects from '../../components/projects';
import Landing from '../../components/landing';

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <div style={{height: '100px'}}>
          <Layout>
              <Header transparent title="Fabrizio Lopez" style={{color: 'black'}} scroll>
                  <Navigation>
                    <NavLink style={{color: 'black'}} exact to="/">Home</NavLink>
                    <NavLink style={{color: 'black'}} exact to="/about">About Me</NavLink>
                    <NavLink style={{color: 'black'}} exact to="/projects">Projects</NavLink>
                    <NavLink style={{color: 'black'}} exact to="/contact">Contact</NavLink>
                  </Navigation>
              </Header>
              <Drawer title="Test">
                  <Navigation>
                    <NavLink style={{color: 'black'}} exact to="/">Home</NavLink>
                    <NavLink exact to="/about">About Me</NavLink>
                    <NavLink exact to="/projects">Projects</NavLink>
                    <NavLink exact to="/contact">Contact</NavLink>
                  </Navigation>
              </Drawer>
              <Content>
                <div className="page-content"/>
              </Content>
          </Layout>
        </div>
        <main>

        <Particles
          className="particles"
          params={{
            "particles": {
                "number": {
                    "value":50,
                },
                "move": {
                    "speed": 5,
                },
                "shape": {
                    "type": [
                        "image",
                        "circle"
                    ],
                },
                "color": {
                    "value": "#fff"
                },
                "size": {
                    "value": 10,
                }
            },
            "retina_detect": false
        }} />

          <Route exact path="/" render={( history ) => 
            <Landing/>
          } />
          <Route exact path="/about" render={( history ) => 
            <AboutMe/>
          } />
          <Route exact path="/projects" render={( history ) => 
            <Projects/>
          } />
          <Route exact path="/contact" render={( history ) => 
            <Contact/>
          } />
        </main>
      </div>
    );
  }
}