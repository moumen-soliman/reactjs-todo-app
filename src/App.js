import React, { Component } from 'react';
import './App.css';

//Components
import Header from './components/main/header.js'
import Counter from './components/main/counter.js'
import Action from './components/actions/action.js'
// import Option from './components/options/option.js'
import Options from './components/options/options.js'
import AddOption from './components/options/addoptions.js'
import VisibilityToggle from './components/main/visibilitytoggle.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option)
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist';
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
        <Counter />
        <VisibilityToggle />
      </div>
    );
  }
}


export default App;
