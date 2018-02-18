import React, {Component} from 'react';

const Action = (props) => {
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

export default Action;