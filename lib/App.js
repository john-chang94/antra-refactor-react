"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

require("./style.css");

var _react = _interopRequireDefault(require("react"));

var _Main = _interopRequireDefault(require("./components/Main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Main["default"], null));
}