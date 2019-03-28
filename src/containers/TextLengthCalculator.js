import React, { Component } from "react";
import TextLengthCalculator from "../components/TextLengthCalculator";
import { connect } from "react-redux";

export class Controller extends Component {

  render() {
    return (
      <TextLengthCalculator {...this.props}/>
    );
  }
};

export const mapStateToProps = store => ({
    // deleted
})

export default connect(mapStateToProps, null)(TextLengthCalculator);
