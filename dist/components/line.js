'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Line = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n'], ['\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  display: flex;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  height: 4px;\n  width: 100%;\n  margin: 0;\n\n  &:before {\n    height: 4px;\n    width: 100%;\n    margin: 0;\n    background-color: #ff9800;\n    content: \'\';\n    animation: ', ' 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n'], ['\n  background-color: ', ';\n  display: flex;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  height: 4px;\n  width: 100%;\n  margin: 0;\n\n  &:before {\n    height: 4px;\n    width: 100%;\n    margin: 0;\n    background-color: #ff9800;\n    content: \'\';\n    animation: ', ' 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var runningProgressBar = (0, _styledComponents.keyframes)(_templateObject);

var Line = exports.Line = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.color;
}, runningProgressBar);