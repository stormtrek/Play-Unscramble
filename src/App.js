import React, { Component } from 'react';
import logo from './logo.svg';
import Unscramble from './Unscramble';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Play Unscramble</h1>
        </header>
        <p className="App-intro">
          Unscramble the word scramble
        </p>
        <Unscramble />
        < footer className="App-footer">Developed by Andy Chan</footer>
      </div>
    );
  }
}

export default App;
