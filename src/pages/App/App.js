import React, {Component} from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import resume from '../../downloads/resume.pdf';
import Particles from 'react-particles-js';
import './App.css';
import { Navigation, Layout, Header, Drawer } from 'react-mdl';
import { AnimatedRoute } from 'react-router-transition';
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
              <Header transparent title="My Portfolio" style={{color: 'white'}} scroll>
                  <Navigation>
                    <NavLink style={{color: 'white'}} exact to="/">Home</NavLink>
                    <NavLink style={{color: 'white'}} exact to="/about">About Me</NavLink>
                    <NavLink style={{color: 'white'}} exact to="/projects">Projects</NavLink>
                    <NavLink style={{color: 'white'}} exact to="/contact">Contact</NavLink>
                  </Navigation>
              </Header>
              <Drawer style={{textDecoration: 'none', color: 'black'}} title="Navigation">
                  <Navigation>
                    <NavLink style={{color: 'black'}} exact to="/">Home</NavLink>
                    <NavLink style={{color: 'black'}} exact to="/about">About Me</NavLink>
                    <NavLink style={{color: 'black'}} exact to="/projects">Projects</NavLink>
                    <a style={{color: 'black'}} href={resume} rel="noopener noreferrer" target="_blank">Resume</a>
                    <NavLink style={{color: 'black'}} exact to="/contact">Contact</NavLink>
                  </Navigation>
              </Drawer>
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
              <AnimatedRoute
                path="/about"
                component={AboutMe}
                atEnter={{ offset: -100 }}
                atLeave={{ offset: -100 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                  transform: `translateX(${styles.offset}%)`,
                })}
          />
              <AnimatedRoute
                path="/contact"
                component={Contact}
                atEnter={{ offset: -100 }}
                atLeave={{ offset: -100 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                  transform: `translateX(${styles.offset}%)`,
                })}
          />
          <Route exact path="/" render={( history ) => 
            <Landing/>
          } />
          <Route exact path="/projects" render={( history ) => 
            <Projects/>
          } />
        </main>
      </div>
    );
  }
}