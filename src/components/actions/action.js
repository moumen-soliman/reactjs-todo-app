import React, {Component} from 'react';

class Action extends Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
      return (
        <div>
          <button 
            onClick={this.handlePick}
            disabled={!this.props.hasOptions} >
            What Should I do?
          </button>
        </div>
      );
    }
}

export default Action;