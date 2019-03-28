import React, { Component } from "react";
import PropTypes from "prop-types";

 class Controls extends Component {

  render() {
    const { resetLabel, incrementLabel, decrementLabel, increment, decrement, resetCount } = this.props;

    return (
      <div className="controls">
        <button onClick={() => {increment();}}>
          <span>{incrementLabel}</span>
        </button>
        <button onClick={() => {resetCount(0);}}>
          <span>{resetLabel}</span>
        </button>
        <button onClick={() => {decrement();}}>
          <span>{decrementLabel}</span>
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  resetCount: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
};

Controls.defaultProps = {
  resetLabel: "RESET",
  incrementLabel: "+",
  decrementLabel: "-"
};

export default Controls;
