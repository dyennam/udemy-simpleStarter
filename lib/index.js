'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _apiKeys = require('../apiKeys');

var _apiKeys2 = _interopRequireDefault(_apiKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_KEY = _apiKeys2.default.youtube_API_KEY;
console.log('api key: ', API_KEY);

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        'Hello World test'
    );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('.container'));