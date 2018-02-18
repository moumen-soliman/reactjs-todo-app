import React from 'react';

const Option = (props) => {
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

export default Option;