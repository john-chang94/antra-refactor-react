"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Main;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Main() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "main"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "entry-banner text-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    id: "hello"
  }, "Hello, I'm"), /*#__PURE__*/_react["default"].createElement("h1", {
    id: "name"
  }, "XXXX"), /*#__PURE__*/_react["default"].createElement("h1", {
    id: "person-description"
  }, "UI Developer. UX Desinger. Problem Solver."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-buttons"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "btn btn-default btn-border",
    href: "#about"
  }, "Info")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-sm-1 col-md-1"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "btn btn-default btn-border",
    href: "#projects"
  }, "Portfolio"))))));
}