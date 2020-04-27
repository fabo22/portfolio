import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import { Navigation, Layout, Header, Drawer, Content } from 'react-mdl';
import AboutMe from '../../components/aboutme';
import Contact from '../../components/contact';
import Projects from '../../components/projects';
import Resume from '../../components/resume';
import Landing from '../../components/landing';

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <div style={{height: '300px', position: 'relative'}}>
          <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
              <Header transparent title="Fabrizio Lopez" style={{color: 'white'}}>
                  <Navigation>
                    <NavLink exact to="/about">About Me</NavLink>
                    <NavLink exact to="/projects">Projects</NavLink>
                    <NavLink exact to="/resume">Resume</NavLink>
                    <NavLink exact to="/contact">Contact</NavLink>
                  </Navigation>
              </Header>
              <Drawer title="Test">
                  <Navigation>
                    <NavLink exact to="/about">About Me</NavLink>
                    <NavLink exact to="/projects">Projects</NavLink>
                    <NavLink exact to="/resume">Resume</NavLink>
                    <NavLink exact to="/contact">Contact</NavLink>
                  </Navigation>
              </Drawer>
              <Content />
          </Layout>
        </div>
        <main>
          <Route exact path="/" render={( history ) => 
            <Landing/>
          } />
          <Route exact path="/about" render={( history ) => 
            <AboutMe/>
          } />
          <Route exact path="/projects" render={( history ) => 
            <Projects/>
          } />
          <Route exact path="/resume" render={( history ) => 
            <Resume/>
          } />
          <Route exact path="/contact" render={( history ) => 
            <Contact/>
          } />
        </main>
      </div>
    );
  }
}