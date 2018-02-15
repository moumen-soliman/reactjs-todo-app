import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Header from './components/main/header.js'
import Action from './components/actions/action.js'
import Options from './components/options/options.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Action />
        <Options />
      </div>
    );
  }
}


export default App;
