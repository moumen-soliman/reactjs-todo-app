import React, {Component} from 'react';

class Option extends Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

export default Option;