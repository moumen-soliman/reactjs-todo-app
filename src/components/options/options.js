import React, {Component} from 'react';
import Option from './option.js'

class Options extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
        // alert('handleRemoveAll');
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