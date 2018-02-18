import React, { Component } from 'react';
import './App.css';

//Components
import Header from './components/main/header.js'
// import Counter from './components/main/counter.js'
import Action from './components/actions/action.js'
// import Option from './components/options/option.js'
import Options from './components/options/options.js'
import AddOption from './components/options/addoptions.js'
import OptionModal from './components/options/OptionModal.js'
// import VisibilityToggle from './components/main/visibilitytoggle.js'

class App extends Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist';
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if (options) {
        this.setState(() => ({ options }));
      }  
    } catch (e) {
      console.log('this error')
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      //saving data into localstorage every time changed
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="container">
        <Header />
        <div>
          <h5>Storage Items:</h5>
        {
          localStorage.getItem('options')
        }
        </div>
        <div>
          <Action 
            hasOptions={this.state.options.length > 0} 
            handlePick={this.handlePick}
          />
          <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption 
            handleAddOption={this.handleAddOption}
          />
          <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
        </div>
        {/* <Counter />
        <VisibilityToggle /> */}
      </div>
    );
  }
}


export default App;
