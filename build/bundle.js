/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(15);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _LoginPage = __webpack_require__(16);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _SignupPage = __webpack_require__(18);

var _SignupPage2 = _interopRequireDefault(_SignupPage);

var _MainPage = __webpack_require__(19);

var _MainPage2 = _interopRequireDefault(_MainPage);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _LoginPage2.default, {
    path: '/login'
  }), _extends({}, _SignupPage2.default, {
    path: '/signup'
  }), _extends({}, _MainPage2.default, {
    path: '/playing'
  }), _extends({}, _HomePage2.default, {
    path: '/'
  })]
})];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function (dispatch) {
    var res = { data: [{ name: 'yo' }] };
    dispatch({
      type: FETCH_USERS,
      payload: res
    });
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _dotenv = __webpack_require__(10);

var _dotenv2 = _interopRequireDefault(_dotenv);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Init environment
// use .env edit to dotenv.config()
// Module dependencies.
_dotenv2.default.config({ path: '.env.example' });

// Create Express server.
var app = (0, _express2.default)();

// Express configuration.
app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);
app.use(_express2.default.static('public'));

// Routes.
(0, _routes2.default)(app);

// Start Express server.
app.listen(app.get('port'), app.get('host'), function () {
  console.log('Server running at ' + app.get('host') + ':' + app.get('port'));
  console.log('Press CTRL-C to stop');
});

// Export app
exports.default = app;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderer = __webpack_require__(12);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(22);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(2);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = function router(app) {
  app.use('/api', function (req, res) {
    res.end('Welcome to NODE ES6');
  });

  app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);

    var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
      var route = _ref.route;

      return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(function () {
      res.send((0, _renderer2.default)(req, store));
    });
  });
};

exports.default = router;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(14);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    )
  ));

  return '<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <meta http-equiv="X-UA-Compatible" content="ie=edge">\n      <title>JS Full Stack</title>\n      <link rel=icon type=image/png href=/statics/img/favicon.png>\n      <link rel="stylesheet" href="/styles.css">\n    </head>\n    <body>\n      <div id="root">' + content + '</div>\n      <script>\n        window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n      </script>\n      <script src="bundle.js"></script>\n    </body>\n    </html>';
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(1);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
    }
  }]);

  return HomePage;
}(_react.Component);

var loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchUsers)());
};

var mapStateToProps = function mapStateToProps(_ref) {
  var users = _ref.users;
  return { users: users };
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps)(HomePage)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Header = __webpack_require__(17);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Component) {
  _inherits(LoginPage, _Component);

  function LoginPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.history.push('/playing');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoginPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'background', id: 'background' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-6 col-lg-4 mt-sm-10 mt-md-20' },
                _react2.default.createElement(
                  'div',
                  { className: 'loginContainer' },
                  _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                      'h2',
                      { className: 'mb-4 text-center' },
                      'Login to your account'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'username' },
                        'Username'
                      ),
                      _react2.default.createElement('input', {
                        className: 'transparent border-left-0 border-top-0 border-right-0',
                        type: 'text',
                        placeholder: 'e.g. yoprogrammer'
                      })
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'password' },
                        'Password'
                      ),
                      _react2.default.createElement('input', {
                        className: 'transparent border-left-0 border-top-0 border-right-0',
                        type: 'password',
                        placeholder: 'Your password'
                      })
                    ),
                    _react2.default.createElement(
                      'button',
                      {
                        type: 'button',
                        onClick: this.handleClick,
                        className: 'btn btn-lg btn-block btn-outline-light mt-5'
                      },
                      'Login'
                    ),
                    _react2.default.createElement(
                      'small',
                      { className: 'form-text text-muted text-center mt-3' },
                      'Don\'t have an accont yet?',
                      ' ',
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/signup' },
                        'Signup here.'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-6 col-lg-8 mt-5 mt-md-10 mt-lg-15 pl-lg-10' },
                _react2.default.createElement(
                  'div',
                  { className: 'loginText' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    'Get great music, right now'
                  ),
                  _react2.default.createElement(
                    'h2',
                    null,
                    'Listen to loads of songs for free'
                  ),
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      'Discover music you\'ll fall in love with'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Create your own playlists'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Follow artists to keep to date'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return LoginPage;
}(_react.Component);

exports.default = {
  component: LoginPage
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'nav',
      { className: 'navbar navbar-expand-lg navbar-inverse bg-inverse' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'navbar-brand inline', to: '/' },
          _react2.default.createElement(
            'div',
            { className: 'd-flex' },
            _react2.default.createElement(
              'div',
              { className: 'bg-warning px-2 text-dark rounded-left' },
              'JS'
            ),
            _react2.default.createElement(
              'div',
              { className: 'bg-light px-2 text-dark rounded-right' },
              'Full Stack'
            )
          )
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'navbar-toggler',
            type: 'button',
            'data-toggle': 'collapse',
            'data-target': '#navbarSupportedContent',
            'aria-controls': 'navbarSupportedContent',
            'aria-expanded': 'false',
            'aria-label': 'Toggle navigation'
          },
          _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'collapse navbar-collapse justify-content-end',
            id: 'navbarSupportedContent'
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/signup', className: 'btn btn-warning' },
            'Sign Up'
          )
        )
      )
    )
  );
};

exports.default = Header;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Header = __webpack_require__(17);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignupPage = function SignupPage() {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'background', id: 'background' },
      _react2.default.createElement(
        'div',
        { className: 'container mt-10 mb-5 mb-sm-1' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6 col-lg-5' },
            _react2.default.createElement(
              'div',
              { className: 'signupContainer' },
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(
                  'h2',
                  { className: 'mb-4 text-center' },
                  'Create your free account'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'username' },
                    'Username'
                  ),
                  _react2.default.createElement('input', {
                    className: 'transparent border-left-0 border-top-0 border-right-0',
                    type: 'text',
                    placeholder: 'e.g. yoprogrammer',
                    required: true
                  })
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'username' },
                    'First name'
                  ),
                  _react2.default.createElement('input', {
                    className: 'transparent border-left-0 border-top-0 border-right-0',
                    type: 'text',
                    placeholder: 'e.g. Yuttasak',
                    required: true
                  })
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'username' },
                    'Last name'
                  ),
                  _react2.default.createElement('input', {
                    className: 'transparent border-left-0 border-top-0 border-right-0',
                    type: 'text',
                    placeholder: 'e.g. Pannawat',
                    required: true
                  })
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'username' },
                    'Email'
                  ),
                  _react2.default.createElement('input', {
                    className: 'transparent border-left-0 border-top-0 border-right-0',
                    type: 'email',
                    placeholder: 'e.g. test@example.com',
                    required: true
                  })
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'username' },
                    'Confirm email'
                  ),
                  _react2.default.createElement('input', {
                    className: 'transparent border-left-0 border-top-0 border-right-0',
                    type: 'email',
                    placeholder: 'e.g. test@example.com',
                    required: true
                  })
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'username' },
                    'Password'
                  ),
                  _react2.default.createElement('input', {
                    className: 'transparent border-left-0 border-top-0 border-right-0',
                    type: 'password',
                    placeholder: 'Your password',
                    required: true
                  })
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'password' },
                    'Confirm assword'
                  ),
                  _react2.default.createElement('input', {
                    className: 'transparent border-left-0 border-top-0 border-right-0',
                    type: 'password',
                    placeholder: 'Your password',
                    required: true
                  })
                ),
                _react2.default.createElement(
                  'button',
                  {
                    type: 'submit',
                    className: 'btn btn-lg btn-block btn-outline-light mt-5'
                  },
                  'Sign Up'
                ),
                _react2.default.createElement(
                  'small',
                  { className: 'form-text text-muted text-center mt-3' },
                  'Already have an account? ',
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/login' },
                    'Login here.'
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

exports.default = {
  component: SignupPage
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _PlayingBar = __webpack_require__(20);

var _PlayingBar2 = _interopRequireDefault(_PlayingBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainPage = function MainPage() {
  return _react2.default.createElement(
    'div',
    { className: 'mainContainer' },
    _react2.default.createElement(
      'div',
      { className: 'topContainer' },
      _react2.default.createElement(
        'div',
        { className: 'navBarContainer' },
        _react2.default.createElement(
          'nav',
          { className: 'navBar d-flex d-flex-column' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'logo' },
            _react2.default.createElement('img', { src: '/statics/img/icons/logo.png', alt: 'Logo' })
          )
        )
      )
    ),
    _react2.default.createElement(_PlayingBar2.default, null)
  );
};

exports.default = {
  component: MainPage
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayingBar = function PlayingBar() {
  return _react2.default.createElement(
    "div",
    { className: "playingContainer bg-dark" },
    _react2.default.createElement(
      "div",
      { className: "d-flex playing" },
      _react2.default.createElement(
        "div",
        { className: "playing-left" },
        _react2.default.createElement(
          "div",
          { className: "content" },
          _react2.default.createElement(
            "span",
            { className: "albumLink" },
            _react2.default.createElement("img", {
              className: "albumArtwork",
              src: "/statics/img/square.jpg",
              alt: "Square Image"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "trackInfo" },
            _react2.default.createElement(
              "span",
              { className: "trackName" },
              _react2.default.createElement(
                "span",
                null,
                "Happy Birthday"
              )
            ),
            _react2.default.createElement(
              "span",
              { className: "artistName" },
              _react2.default.createElement(
                "span",
                null,
                "Yo Programmer"
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "playing-center d-flex d-flex-column align-items-center" },
        _react2.default.createElement(
          "div",
          { className: "content playerControls" },
          _react2.default.createElement(
            "div",
            { className: "buttons" },
            _react2.default.createElement(
              "button",
              { className: "controlButton shuffle", title: "Shuffle button" },
              _react2.default.createElement("img", { src: "/statics/img/icons/shuffle.png", alt: "Shuffle" })
            ),
            _react2.default.createElement(
              "button",
              { className: "controlButton previous", title: "Previous button" },
              _react2.default.createElement("img", { src: "/statics/img/icons/previous.png", alt: "Previous" })
            ),
            _react2.default.createElement(
              "button",
              { className: "controlButton play", title: "Play button" },
              _react2.default.createElement("img", { src: "/statics/img/icons/play.png", alt: "Play" })
            ),
            _react2.default.createElement(
              "button",
              { className: "controlButton pause", title: "Pause button" },
              _react2.default.createElement("img", { src: "/statics/img/icons/pause.png", alt: "Pause" })
            ),
            _react2.default.createElement(
              "button",
              { className: "controlButton next", title: "Next button" },
              _react2.default.createElement("img", { src: "/statics/img/icons/next.png", alt: "Next" })
            ),
            _react2.default.createElement(
              "button",
              { className: "controlButton repeat", title: "Repeat button" },
              _react2.default.createElement("img", { src: "/statics/img/icons/repeat.png", alt: "Repeat" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "playbackBar d-flex" },
            _react2.default.createElement(
              "span",
              { className: "progressTime current" },
              "0.00"
            ),
            _react2.default.createElement(
              "div",
              { className: "progressBar" },
              _react2.default.createElement(
                "div",
                { className: "progressBarBg" },
                _react2.default.createElement("div", { className: "prog" })
              )
            ),
            _react2.default.createElement(
              "span",
              { className: "progressTime memaining" },
              "0.00"
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "playing-right" },
        _react2.default.createElement(
          "div",
          { className: "volumeBar" },
          _react2.default.createElement(
            "button",
            { className: "controlButton volume", title: "Volume button" },
            _react2.default.createElement("img", { src: "/statics/img/icons/volume.png", alt: "Volume" })
          ),
          _react2.default.createElement(
            "div",
            { className: "progressBar" },
            _react2.default.createElement(
              "div",
              { className: "progressBarBg" },
              _react2.default.createElement("div", { className: "prog" })
            )
          )
        )
      )
    )
  );
};

exports.default = PlayingBar;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    'div',
    null,
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(23);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(24);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

  return store;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _userReducer = __webpack_require__(25);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _userReducer2.default
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map