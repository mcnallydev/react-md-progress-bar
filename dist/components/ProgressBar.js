'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _line = require('./line');

var _overlay = require('./overlay');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_Component) {
  _inherits(ProgressBar, _Component);

  /**
   * React Component constructor.
   * @param props
   */
  function ProgressBar(props) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props));

    _this.state = {
      show: props.show,
      overlay: props.overlay || false,
      color: props.color,
      backgroundColor: props.backgroundColor
    };
    return _this;
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */


  _createClass(ProgressBar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        show: nextProps.show,
        overlay: nextProps.overlay || false,
        color: nextProps.color,
        backgroundColor: nextProps.backgroundColor
      });
    }

    /**
     * Render div with class.
     * @returns {XML}
     */

  }, {
    key: 'renderProgressBar',
    value: function renderProgressBar() {
      if (this.state.show) {
        return _react2.default.createElement(_line.Line, { color: this.state.color, backgroundColor: this.state.backgroundColor });
      } else {
        return null;
      }
    }

    /**
     * Render overlay.
     * @returns {XML}
     */

  }, {
    key: 'renderOverlay',
    value: function renderOverlay() {
      if (this.state.overlay) {
        return _react2.default.createElement(_overlay.Overlay, null);
      } else {
        return null;
      }
    }

    /**
     * React render.
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderProgressBar(),
        this.renderOverlay()
      );
    }
  }]);

  return ProgressBar;
}(_react.Component);

/**
 * Component PropTypes
 * @type {{show: *, overlay: *}}
 */


ProgressBar.propTypes = {
  show: _propTypes2.default.bool,
  overlay: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  backgroundColor: _propTypes2.default.string
};

/**
 * Default props
 * @type {{color: string}}
 */
ProgressBar.defaultProps = {
  backgroundColor: "#F2F2F2",
  color: "#ff9800"
};

exports.default = ProgressBar;