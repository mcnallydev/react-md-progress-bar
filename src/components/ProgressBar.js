import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from './line';
import { Overlay } from './overlay';

class ProgressBar extends Component {
  /**
   * React Component constructor.
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      overlay: props.overlay || false,
      color: props.color
    }
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      overlay: nextProps.overlay || false,
      color: nextProps.color
    });
  }

  /**
   * Render div with class.
   * @returns {XML}
   */
  renderProgressBar() {
    if (this.state.show) {
      return (
        <Line color={this.state.color} />
      );
    } else {
      return (null);
    }
  }

  /**
   * Render overlay.
   * @returns {XML}
   */
  renderOverlay() {
    if (this.state.overlay) {
      return (
        <Overlay />
      );
    } else {
      return (null);
    }
  }

  /**
   * React render.
   * @returns {XML}
   */
  render() {
    return (
      <div>
        {this.renderProgressBar()}
        {this.renderOverlay()}
      </div>
    );
  }
}

/**
 * Component PropTypes
 * @type {{show: *, overlay: *}}
 */
ProgressBar.propTypes = {
  show: PropTypes.bool,
  overlay: PropTypes.bool,
  color: PropTypes.string
};

/**
 * Default props
 * @type {{color: string}}
 */
ProgressBar.defaultProps ={
  color: "#F2F2F2"
};

export default ProgressBar;
