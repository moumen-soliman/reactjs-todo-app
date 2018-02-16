import React, {Component} from 'react';

class Option extends Component {
    render() {
        return (
            <div>
                {this.props.optionText}
                <button 
                    onClick={(e) => {
                        this.props.handleDeleteOption(this.props.optionText);
                    }}
                >
                    remove
                </button>
            </div>
        );
    }
}

export default Option;