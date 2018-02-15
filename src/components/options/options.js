import React, {Component} from 'react';
import Option from '../options/option.js'

class Options extends Component {
    handleRemoveAll() {
        alert('handleRemoveAll');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.option.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

export default Options;