import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { connect } from "react-redux";

import { updateText } from "../actions/textActions";

export class Controller extends Component {

  render() {
    return (
      <TextInput {...this.props}/>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    updateText: payload => {
      dispatch(updateText(payload));
    }
  };
};

export default connect(null, mapDispatchToProps)(TextInput);
