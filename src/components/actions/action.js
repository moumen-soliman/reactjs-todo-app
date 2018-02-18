import React from 'react';

const Action = (props) => (
  <div>
    <button 
      onClick={this.handlePick}
      disabled={!this.props.hasOptions} >
      What Should I do?
    </button>
  </div>
)

export default Action;