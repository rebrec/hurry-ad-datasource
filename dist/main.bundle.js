module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins-src/hurry-ad-datasource/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins-src/hurry-ad-datasource/datasource.definition.js":
/*!******************************************************************!*\
  !*** ./plugins-src/hurry-ad-datasource/datasource.definition.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  name: "ad-datasource",
  caption: "Active Directory",
  shell: "powershell",
  initCommands: [],
  // platform: ['win32', 'linux'],
  columns: [{
    columnName: 'Display Name',
    property: 'DisplayName'
  }, {
    columnName: 'Sam Account Name',
    property: 'SamAccountName'
  }, {
    columnName: 'Enabled',
    property: 'Enabled'
  }],
  mainColumnProperty: 'SamAccountName',
  searchFunc: function searchFunc(keyword) {
    return "Get-ADUser -Properties samAccountName, displayName, UserPrincipalName, Enabled -Filter \"samAccountName -like '*".concat(keyword, "*' -or displayName -like '*").concat(keyword, "*'\" | ConvertTo-Json -Compress");
  }
};

/***/ }),

/***/ "./plugins-src/hurry-ad-datasource/index.js":
/*!**************************************************!*\
  !*** ./plugins-src/hurry-ad-datasource/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginAdDatasource; });
/* harmony import */ var _src_core_Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/core/Plugin */ "./src/core/Plugin.js");
/* harmony import */ var _datasource_definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource.definition */ "./plugins-src/hurry-ad-datasource/datasource.definition.js");
/* harmony import */ var _datasource_definition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_datasource_definition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./plugins-src/hurry-ad-datasource/menu.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var PluginAdDatasource =
/*#__PURE__*/
function (_Plugin) {
  _inherits(PluginAdDatasource, _Plugin);

  function PluginAdDatasource(api, context) {
    var _this;

    _classCallCheck(this, PluginAdDatasource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PluginAdDatasource).call(this, api, context));
    api.store.datasourceManager.addDatasourceDefinition(_datasource_definition__WEBPACK_IMPORTED_MODULE_1___default.a, context.pluginDir);
    api.store.contextMenu.registerPlugin(_menu__WEBPACK_IMPORTED_MODULE_2__["default"], "ad-datasource");
    return _this;
  }

  _createClass(PluginAdDatasource, [{
    key: "getPluginsAvailable",
    value: function getPluginsAvailable() {}
  }, {
    key: "downloadPlugin",
    value: function downloadPlugin(pluginName) {}
  }, {
    key: "installPlugin",
    value: function installPlugin(tgzPath) {}
  }]);

  return PluginAdDatasource;
}(_src_core_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./plugins-src/hurry-ad-datasource/menu.js":
/*!*************************************************!*\
  !*** ./plugins-src/hurry-ad-datasource/menu.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "caption": "AD Users",
  "type": "CONTAINER",
  "children": [{
    "description": "Set temporary password to AAAA1111@",
    "caption": "Set temporary password to AAAA1111@",
    "shell": "powershell",
    "type": "COMMAND",
    "platform": "win32",
    "commands": ['Set-ADAccountPassword -Identity "#{DistinguishedName}" -Reset -NewPassword (ConvertTo-SecureString -AsPlainText "AAAA1111@" -Force)']
  }, {
    "description": "",
    "caption": "Disable AD User",
    "shell": "powershell",
    "type": "COMMAND",
    "platform": "win32",
    "commands": ['Disable-ADAccount -Identity "#{DistinguishedName}"']
  }, {
    "description": "",
    "caption": "Enable AD User",
    "shell": "powershell",
    "type": "COMMAND",
    "platform": "win32",
    "commands": ['Enable-ADAccount -Identity "#{DistinguishedName}"']
  }]
});

/***/ }),

/***/ "./src/core/Plugin.js":
/*!****************************!*\
  !*** ./src/core/Plugin.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plugin; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Plugin =
/*#__PURE__*/
function () {
  function Plugin(api) {
    _classCallCheck(this, Plugin);

    this._api = api;
  }

  _createClass(Plugin, [{
    key: "beginLoad",
    value: function beginLoad() {}
  }, {
    key: "onLoaded",
    value: function onLoaded() {}
  }, {
    key: "onReady",
    value: function onReady() {}
  }, {
    key: "onUnload",
    value: function onUnload() {}
  }]);

  return Plugin;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map