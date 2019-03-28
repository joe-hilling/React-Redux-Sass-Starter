import React, { Component } from "react";
import PropTypes from "prop-types";

class Controls extends Component {

    render() {
        const { updateText } = this.props;

        return (
            <div className="text-input">
                <input type='text' onChange={e => updateText(e.target.value) } />
            </div>
        );
    }
}

Controls.propTypes = {
    updateText: PropTypes.func
    
};

Controls.defaultProps = {};

export default Controls;
