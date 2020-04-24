import React, {Component} from 'react';
import resume from '../../downloads/resume.pdf';
import './App.css';

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Fabrizio Lopez</h1>
        <h2>Projects</h2>
        <a href="https://game-night-efm.herokuapp.com/accounts/signup/">Game Night</a><br/>
        <a href="https://convoh.herokuapp.com/">ConvOh</a><br/>
        <a href="https://fabo22.github.io/slot-machine-game/">Slot Machine Game</a>
        <h2>Resume</h2>
        <a href={resume} download>My Resume</a>
      </div>
    );
  }
}