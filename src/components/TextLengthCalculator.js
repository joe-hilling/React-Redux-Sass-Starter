import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "../containers/TextInput";

 class TextLengthCalculator extends Component {
  render() {

    const { text_length } = this.props;

    return (
      <div className="counter">
        <div>The length of your text is: <strong>BROKEN</strong> characters</div>
        <TextInput />
      </div>
    );
  }
}

TextLengthCalculator.propTypes = {
  text_length: PropTypes.number
};


export default TextLengthCalculator;
