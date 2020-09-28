webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\ESTUDIO2\\consumir-api-2\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Home() {
  _s();

  //states
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    valorCuenta: 600000,
    claveUsuario: 1234,
    edad: 0,
    fechaNacimiento: 0
  }),
      datosUsuario = _useState[0],
      guardarDatosUsuario = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    valorRetirar: 0,
    clave: 0
  }),
      datosTransaccion = _useState2[0],
      guardarDatosTransaccion = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    verificacionCampo1: false,
    verificacionCampo2: false
  }),
      verificacion = _useState3[0],
      guardarVerificacion = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    ejecutarAlerta: false,
    mensaje: ''
  }),
      alertas = _useState4[0],
      guardarAlertas = _useState4[1]; //funcion que guarda la edad del usuario


  var edadOnChage = function edadOnChage(e) {
    guardarDatosUsuario(_objectSpread(_objectSpread({}, datosUsuario), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, parseInt(e.target.value, 10))));
  }; //funcion que habilita el campo de ingresar valor a retirar


  var siguienteCampo2 = function siguienteCampo2(e) {
    e.preventDefault();

    if (datosUsuario.fechaNacimiento === 0) {
      guardarAlertas({
        ejecutarAlerta: true,
        mensaje: 'Por favor ingresa tu fecha de nacimiento'
      });
      return;
    } else {
      var añoActual = new Date().getFullYear();
      var añoNacimiento = datosUsuario.fechaNacimiento;
      var respuesta = añoActual - añoNacimiento;
      guardarDatosUsuario(_objectSpread(_objectSpread({}, datosUsuario), {}, {
        edad: respuesta
      }));
      guardarVerificacion(_objectSpread(_objectSpread({}, verificacion), {}, {
        verificacionCampo2: true
      }));
    }
  }; //funcion que guarda en el state el valor a retirar


  var valorRetiroOnChage = function valorRetiroOnChage(e) {
    guardarDatosTransaccion(_objectSpread(_objectSpread({}, datosTransaccion), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, parseInt(e.target.value, 10))));
  }; //funcion que habilita el campo de ingresar la clave


  var siguienteCampo1 = function siguienteCampo1(e) {
    e.preventDefault();

    if (datosTransaccion.valorRetirar === 0) {
      guardarAlertas({
        ejecutarAlerta: true,
        mensaje: 'El valor a retirar debe ser mayor a cero'
      });
      return;
    } else if (datosUsuario.valorCuenta >= datosTransaccion.valorRetirar) {
      guardarAlertas({
        ejecutarAlerta: false,
        mensaje: ''
      });
      guardarVerificacion(_objectSpread(_objectSpread({}, verificacion), {}, {
        verificacionCampo1: true
      }));
    } else {
      guardarAlertas({
        ejecutarAlerta: true,
        mensaje: 'Saldo insuficente'
      });
    }
  }; //funcion que guarda la clave en el state


  var valorClaveOnChange = function valorClaveOnChange(e) {
    guardarDatosTransaccion(_objectSpread(_objectSpread({}, datosTransaccion), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  }; //funcion que verifica que la clave sea correcta


  var formOnSubmit = function formOnSubmit(e) {
    e.preventDefault();

    if (datosUsuario.claveUsuario === datosTransaccion.clave) {
      guardarAlertas({
        ejecutarAlerta: true,
        mensaje: 'Transaccion exitosa retire su dinero'
      });
    } else {
      guardarAlertas({
        ejecutarAlerta: true,
        mensaje: 'clave incorrecta'
      });
      return;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
    integrity: "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",
    crossorigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "d-flex justify-content-center mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, "Bienvenida Profe"), __jsx("p", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, "Esta es una simulacion de una Transaccion en un cajero, en el cual se evaluan los campos de la edad, el valor que se quiera retirar y si la clave es correcta."), __jsx("h3", {
    className: "d-flex justify-content-center mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, "Tipo de verificaciones implementadas:"), __jsx("ul", {
    className: "d-flex flex-column bd-highlight mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, "Se verifica que edad tienes."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, "Se verifica si eres mayor o menor de edad"), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, "El valor a retirar no puede ser cero."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, "El valor que se quiera retirar no puede ser mayor al saldo."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "Si el valor que se quiera retirar es menor al saldo y mayor que cero te habilita el siguiente campo."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, "La clave debe ser la correcta.")), __jsx("h2", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, "Saldo actual ", datosUsuario.valorCuenta), __jsx("h2", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, "clave de la tarjeta es: 1234")), !verificacion.verificacionCampo2 ? __jsx("div", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, "Ingresa tu fecha de naciminento"), __jsx("input", {
    className: "form-control mb-3",
    type: "number",
    name: "fechaNacimiento",
    value: datosUsuario.fechaNacimiento,
    onChange: edadOnChage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    onClick: siguienteCampo2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, "siguiente"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    onSubmit: formOnSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, "Tu edad es: ", datosUsuario.edad), datosUsuario.edad >= 18 ? __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 44
    }
  }, "Eres mayor de edad") : __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 74
    }
  }, "Eres menor de edad"), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, "Ingrese el valor a retirar"), __jsx("input", {
    className: "form-control mb-3",
    type: "number",
    name: "valorRetirar",
    value: datosTransaccion.valorRetirar,
    onChange: valorRetiroOnChage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    onClick: siguienteCampo1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, "siguiente"), verificacion.verificacionCampo1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 23
    }
  }, "Ingrese la clave de la tarjeta"), __jsx("input", {
    type: "number",
    name: "clave",
    className: "form-control mb-3",
    value: datosTransaccion.clave,
    onChange: valorClaveOnChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 23
    }
  }), __jsx("input", {
    type: "submit",
    value: "verificar",
    className: "btn btn-primary ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 23
    }
  }))))))), alertas.ejecutarAlerta ? __jsx("h2", {
    className: "alert alert-light d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 35
    }
  }, alertas.mensaje) : null);
}

_s(Home, "Wm3YtIB3pTbCSWXT6eaFUguaLz8=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmFsb3JDdWVudGEiLCJjbGF2ZVVzdWFyaW8iLCJlZGFkIiwiZmVjaGFOYWNpbWllbnRvIiwiZGF0b3NVc3VhcmlvIiwiZ3VhcmRhckRhdG9zVXN1YXJpbyIsInZhbG9yUmV0aXJhciIsImNsYXZlIiwiZGF0b3NUcmFuc2FjY2lvbiIsImd1YXJkYXJEYXRvc1RyYW5zYWNjaW9uIiwidmVyaWZpY2FjaW9uQ2FtcG8xIiwidmVyaWZpY2FjaW9uQ2FtcG8yIiwidmVyaWZpY2FjaW9uIiwiZ3VhcmRhclZlcmlmaWNhY2lvbiIsImVqZWN1dGFyQWxlcnRhIiwibWVuc2FqZSIsImFsZXJ0YXMiLCJndWFyZGFyQWxlcnRhcyIsImVkYWRPbkNoYWdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJwYXJzZUludCIsInZhbHVlIiwic2lndWllbnRlQ2FtcG8yIiwicHJldmVudERlZmF1bHQiLCJhw7FvQWN0dWFsIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYcOxb05hY2ltaWVudG8iLCJyZXNwdWVzdGEiLCJ2YWxvclJldGlyb09uQ2hhZ2UiLCJzaWd1aWVudGVDYW1wbzEiLCJ2YWxvckNsYXZlT25DaGFuZ2UiLCJmb3JtT25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFHN0I7QUFINkIsa0JBSWVDLHNEQUFRLENBQUM7QUFDbkRDLGVBQVcsRUFBRSxNQURzQztBQUVuREMsZ0JBQVksRUFBRSxJQUZxQztBQUduREMsUUFBSSxFQUFFLENBSDZDO0FBSW5EQyxtQkFBZSxFQUFFO0FBSmtDLEdBQUQsQ0FKdkI7QUFBQSxNQUl0QkMsWUFKc0I7QUFBQSxNQUlSQyxtQkFKUTs7QUFBQSxtQkFXdUJOLHNEQUFRLENBQUM7QUFDM0RPLGdCQUFZLEVBQUUsQ0FENkM7QUFFM0RDLFNBQUssRUFBRTtBQUZvRCxHQUFELENBWC9CO0FBQUEsTUFXdEJDLGdCQVhzQjtBQUFBLE1BV0pDLHVCQVhJOztBQUFBLG1CQWdCZVYsc0RBQVEsQ0FBQztBQUNuRFcsc0JBQWtCLEVBQUUsS0FEK0I7QUFFbkRDLHNCQUFrQixFQUFFO0FBRitCLEdBQUQsQ0FoQnZCO0FBQUEsTUFnQnRCQyxZQWhCc0I7QUFBQSxNQWdCUkMsbUJBaEJROztBQUFBLG1CQXNCS2Qsc0RBQVEsQ0FBQztBQUN6Q2Usa0JBQWMsRUFBRSxLQUR5QjtBQUV6Q0MsV0FBTyxFQUFFO0FBRmdDLEdBQUQsQ0F0QmI7QUFBQSxNQXNCdEJDLE9BdEJzQjtBQUFBLE1Bc0JiQyxjQXRCYSxrQkE0QjdCOzs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxDQUFDLEVBQUk7QUFFdkJkLHVCQUFtQixpQ0FDZEQsWUFEYyxxR0FFaEJlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUZPLEVBRUFDLFFBQVEsQ0FBQ0gsQ0FBQyxDQUFDQyxNQUFGLENBQVNHLEtBQVYsRUFBaUIsRUFBakIsQ0FGUixHQUFuQjtBQUlELEdBTkQsQ0E3QjZCLENBcUM3Qjs7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBTCxDQUFDLEVBQUk7QUFDM0JBLEtBQUMsQ0FBQ00sY0FBRjs7QUFFQSxRQUFJckIsWUFBWSxDQUFDRCxlQUFiLEtBQWlDLENBQXJDLEVBQXdDO0FBQ3RDYyxvQkFBYyxDQUFDO0FBQ2JILHNCQUFjLEVBQUUsSUFESDtBQUViQyxlQUFPLEVBQUU7QUFGSSxPQUFELENBQWQ7QUFLQTtBQUNELEtBUEQsTUFPTztBQUNMLFVBQU1XLFNBQVMsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBbEI7QUFDQSxVQUFNQyxhQUFhLEdBQUd6QixZQUFZLENBQUNELGVBQW5DO0FBQ0EsVUFBTTJCLFNBQVMsR0FBR0osU0FBUyxHQUFHRyxhQUE5QjtBQUVBeEIseUJBQW1CLGlDQUNkRCxZQURjO0FBRWpCRixZQUFJLEVBQUU0QjtBQUZXLFNBQW5CO0FBS0FqQix5QkFBbUIsaUNBQ2RELFlBRGM7QUFFakJELDBCQUFrQixFQUFFO0FBRkgsU0FBbkI7QUFJRDtBQUVGLEdBMUJELENBdEM2QixDQWtFN0I7OztBQUNBLE1BQU1vQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFaLENBQUMsRUFBSTtBQUM5QlYsMkJBQXVCLGlDQUNsQkQsZ0JBRGtCLHFHQUVwQlcsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBRlcsRUFFSkMsUUFBUSxDQUFDSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0csS0FBVixFQUFpQixFQUFqQixDQUZKLEdBQXZCO0FBTUQsR0FQRCxDQW5FNkIsQ0E2RTdCOzs7QUFDQSxNQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFiLENBQUMsRUFBSTtBQUMzQkEsS0FBQyxDQUFDTSxjQUFGOztBQUVBLFFBQUlqQixnQkFBZ0IsQ0FBQ0YsWUFBakIsS0FBa0MsQ0FBdEMsRUFBeUM7QUFFdkNXLG9CQUFjLENBQUM7QUFDYkgsc0JBQWMsRUFBRSxJQURIO0FBRWJDLGVBQU8sRUFBRTtBQUZJLE9BQUQsQ0FBZDtBQUtBO0FBRUQsS0FURCxNQVNPLElBQUlYLFlBQVksQ0FBQ0osV0FBYixJQUE0QlEsZ0JBQWdCLENBQUNGLFlBQWpELEVBQStEO0FBRXBFVyxvQkFBYyxDQUFDO0FBQ2JILHNCQUFjLEVBQUUsS0FESDtBQUViQyxlQUFPLEVBQUU7QUFGSSxPQUFELENBQWQ7QUFLQUYseUJBQW1CLGlDQUNkRCxZQURjO0FBRWpCRiwwQkFBa0IsRUFBRTtBQUZILFNBQW5CO0FBTUQsS0FiTSxNQWFBO0FBRUxPLG9CQUFjLENBQUM7QUFDYkgsc0JBQWMsRUFBRSxJQURIO0FBRWJDLGVBQU8sRUFBRTtBQUZJLE9BQUQsQ0FBZDtBQUlEO0FBRUYsR0FqQ0QsQ0E5RTZCLENBa0g3Qjs7O0FBQ0EsTUFBTWtCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQWQsQ0FBQyxFQUFJO0FBRTlCViwyQkFBdUIsaUNBQ2xCRCxnQkFEa0IscUdBRXBCVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFGVyxFQUVKRixDQUFDLENBQUNDLE1BQUYsQ0FBU0csS0FGTCxHQUF2QjtBQUtELEdBUEQsQ0FuSDZCLENBNEg3Qjs7O0FBQ0EsTUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQWYsQ0FBQyxFQUFJO0FBQ3hCQSxLQUFDLENBQUNNLGNBQUY7O0FBRUEsUUFBSXJCLFlBQVksQ0FBQ0gsWUFBYixLQUE4Qk8sZ0JBQWdCLENBQUNELEtBQW5ELEVBQTBEO0FBRXhEVSxvQkFBYyxDQUFDO0FBQ2JILHNCQUFjLEVBQUUsSUFESDtBQUViQyxlQUFPLEVBQUU7QUFGSSxPQUFELENBQWQ7QUFLRCxLQVBELE1BT087QUFDTEUsb0JBQWMsQ0FBQztBQUNiSCxzQkFBYyxFQUFFLElBREg7QUFFYkMsZUFBTyxFQUFFO0FBRkksT0FBRCxDQUFkO0FBS0E7QUFDRDtBQUNGLEdBbEJEOztBQW9CQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLDBFQUE1QjtBQUF1RyxhQUFTLEVBQUMseUVBQWpIO0FBQTJMLGVBQVcsRUFBQyxXQUF2TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLG9DQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFHRTtBQUFHLGFBQVMsRUFBQywrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNLQUhGLEVBSUU7QUFBSSxhQUFTLEVBQUMsb0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FKRixFQUtFO0FBQUksYUFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxvQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsb0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFGRixFQUdFO0FBQUksYUFBUyxFQUFDLG9DQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBSEYsRUFJRTtBQUFJLGFBQVMsRUFBQyxvQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQUpGLEVBS0U7QUFBSSxhQUFTLEVBQUMsb0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0R0FMRixFQU1FO0FBQUksYUFBUyxFQUFDLG9DQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBTkYsQ0FMRixFQWFFO0FBQUksYUFBUyxFQUFDLCtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQTREWCxZQUFZLENBQUNKLFdBQXpFLENBYkYsRUFjRTtBQUFJLGFBQVMsRUFBQywrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQWRGLENBTEYsRUFzQkcsQ0FBQ1ksWUFBWSxDQUFDRCxrQkFBZCxHQUNDO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FERixFQUVFO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFJLEVBQUMsaUJBSFA7QUFJRSxTQUFLLEVBQUVQLFlBQVksQ0FBQ0QsZUFKdEI7QUFLRSxZQUFRLEVBQUVlLFdBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBU0U7QUFDRSxhQUFTLEVBQUMsaUJBRFo7QUFFRSxXQUFPLEVBQUVNLGVBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixDQURGLENBREQsR0FpQkcsbUVBQ0E7QUFDRSxZQUFRLEVBQUVVLFlBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFpQjlCLFlBQVksQ0FBQ0YsSUFBOUIsQ0FERixFQUVHRSxZQUFZLENBQUNGLElBQWIsSUFBcUIsRUFBckIsR0FBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBMUIsR0FBd0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGM0QsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUhGLEVBSUU7QUFDRSxhQUFTLEVBQUMsbUJBRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFFBQUksRUFBQyxjQUhQO0FBSUUsU0FBSyxFQUFFTSxnQkFBZ0IsQ0FBQ0YsWUFKMUI7QUFLRSxZQUFRLEVBQUV5QixrQkFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFZRTtBQUNFLGFBQVMsRUFBQyxpQkFEWjtBQUVFLFdBQU8sRUFBRUMsZUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLEVBbUJHcEIsWUFBWSxDQUFDRixrQkFBYixJQUVDLG1FQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxhQUFTLEVBQUMsbUJBSFo7QUFJRSxTQUFLLEVBQUVGLGdCQUFnQixDQUFDRCxLQUoxQjtBQUtFLFlBQVEsRUFBRTBCLGtCQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVVFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFLLEVBQUMsV0FGUjtBQUdFLGFBQVMsRUFBQyxrQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERixDQXJCSixDQURGLENBSEYsQ0FEQSxDQXZDTixFQXlGS2pCLE9BQU8sQ0FBQ0YsY0FBUixHQUF5QjtBQUFJLGFBQVMsRUFBQyxpREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlFRSxPQUFPLENBQUNELE9BQXpFLENBQXpCLEdBQWtILElBekZ2SCxDQURGO0FBNkZEOztHQTlPdUJqQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYyZDk5NDFlM2I5Yzk2YWVkMTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cbiAgLy9zdGF0ZXNcbiAgY29uc3QgW2RhdG9zVXN1YXJpbywgZ3VhcmRhckRhdG9zVXN1YXJpb10gPSB1c2VTdGF0ZSh7XG4gICAgdmFsb3JDdWVudGE6IDYwMDAwMCxcbiAgICBjbGF2ZVVzdWFyaW86IDEyMzQsXG4gICAgZWRhZDogMCxcbiAgICBmZWNoYU5hY2ltaWVudG86IDBcbiAgfSlcblxuICBjb25zdCBbZGF0b3NUcmFuc2FjY2lvbiwgZ3VhcmRhckRhdG9zVHJhbnNhY2Npb25dID0gdXNlU3RhdGUoe1xuICAgIHZhbG9yUmV0aXJhcjogMCxcbiAgICBjbGF2ZTogMFxuICB9KTtcblxuICBjb25zdCBbdmVyaWZpY2FjaW9uLCBndWFyZGFyVmVyaWZpY2FjaW9uXSA9IHVzZVN0YXRlKHtcbiAgICB2ZXJpZmljYWNpb25DYW1wbzE6IGZhbHNlLFxuICAgIHZlcmlmaWNhY2lvbkNhbXBvMjogZmFsc2VcblxuICB9KVxuXG4gIGNvbnN0IFthbGVydGFzLCBndWFyZGFyQWxlcnRhc10gPSB1c2VTdGF0ZSh7XG4gICAgZWplY3V0YXJBbGVydGE6IGZhbHNlLFxuICAgIG1lbnNhamU6ICcnXG4gIH0pXG5cblxuICAvL2Z1bmNpb24gcXVlIGd1YXJkYSBsYSBlZGFkIGRlbCB1c3VhcmlvXG4gIGNvbnN0IGVkYWRPbkNoYWdlID0gZSA9PiB7XG5cbiAgICBndWFyZGFyRGF0b3NVc3VhcmlvKHtcbiAgICAgIC4uLmRhdG9zVXN1YXJpbyxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKVxuICAgIH0pXG4gIH1cblxuICAvL2Z1bmNpb24gcXVlIGhhYmlsaXRhIGVsIGNhbXBvIGRlIGluZ3Jlc2FyIHZhbG9yIGEgcmV0aXJhclxuICBjb25zdCBzaWd1aWVudGVDYW1wbzIgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChkYXRvc1VzdWFyaW8uZmVjaGFOYWNpbWllbnRvID09PSAwKSB7XG4gICAgICBndWFyZGFyQWxlcnRhcyh7XG4gICAgICAgIGVqZWN1dGFyQWxlcnRhOiB0cnVlLFxuICAgICAgICBtZW5zYWplOiAnUG9yIGZhdm9yIGluZ3Jlc2EgdHUgZmVjaGEgZGUgbmFjaW1pZW50bydcbiAgICAgIH0pXG5cbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhw7FvQWN0dWFsID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgICBjb25zdCBhw7FvTmFjaW1pZW50byA9IGRhdG9zVXN1YXJpby5mZWNoYU5hY2ltaWVudG9cbiAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGHDsW9BY3R1YWwgLSBhw7FvTmFjaW1pZW50b1xuXG4gICAgICBndWFyZGFyRGF0b3NVc3VhcmlvKHtcbiAgICAgICAgLi4uZGF0b3NVc3VhcmlvLFxuICAgICAgICBlZGFkOiByZXNwdWVzdGFcbiAgICAgIH0pXG5cbiAgICAgIGd1YXJkYXJWZXJpZmljYWNpb24oe1xuICAgICAgICAuLi52ZXJpZmljYWNpb24sXG4gICAgICAgIHZlcmlmaWNhY2lvbkNhbXBvMjogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4gIC8vZnVuY2lvbiBxdWUgZ3VhcmRhIGVuIGVsIHN0YXRlIGVsIHZhbG9yIGEgcmV0aXJhclxuICBjb25zdCB2YWxvclJldGlyb09uQ2hhZ2UgPSBlID0+IHtcbiAgICBndWFyZGFyRGF0b3NUcmFuc2FjY2lvbih7XG4gICAgICAuLi5kYXRvc1RyYW5zYWNjaW9uLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApIFxuICAgIH1cbiAgICApXG5cbiAgfVxuXG5cbiAgLy9mdW5jaW9uIHF1ZSBoYWJpbGl0YSBlbCBjYW1wbyBkZSBpbmdyZXNhciBsYSBjbGF2ZVxuICBjb25zdCBzaWd1aWVudGVDYW1wbzEgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChkYXRvc1RyYW5zYWNjaW9uLnZhbG9yUmV0aXJhciA9PT0gMCkge1xuXG4gICAgICBndWFyZGFyQWxlcnRhcyh7XG4gICAgICAgIGVqZWN1dGFyQWxlcnRhOiB0cnVlLFxuICAgICAgICBtZW5zYWplOiAnRWwgdmFsb3IgYSByZXRpcmFyIGRlYmUgc2VyIG1heW9yIGEgY2VybydcbiAgICAgIH0pXG5cbiAgICAgIHJldHVyblxuXG4gICAgfSBlbHNlIGlmIChkYXRvc1VzdWFyaW8udmFsb3JDdWVudGEgPj0gZGF0b3NUcmFuc2FjY2lvbi52YWxvclJldGlyYXIpIHtcblxuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogZmFsc2UsXG4gICAgICAgIG1lbnNhamU6ICcnXG4gICAgICB9KVxuXG4gICAgICBndWFyZGFyVmVyaWZpY2FjaW9uKHtcbiAgICAgICAgLi4udmVyaWZpY2FjaW9uLFxuICAgICAgICB2ZXJpZmljYWNpb25DYW1wbzE6IHRydWVcbiAgICAgIH0pXG5cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGd1YXJkYXJBbGVydGFzKHtcbiAgICAgICAgZWplY3V0YXJBbGVydGE6IHRydWUsXG4gICAgICAgIG1lbnNhamU6ICdTYWxkbyBpbnN1ZmljZW50ZSdcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8vZnVuY2lvbiBxdWUgZ3VhcmRhIGxhIGNsYXZlIGVuIGVsIHN0YXRlXG4gIGNvbnN0IHZhbG9yQ2xhdmVPbkNoYW5nZSA9IGUgPT4ge1xuXG4gICAgZ3VhcmRhckRhdG9zVHJhbnNhY2Npb24oe1xuICAgICAgLi4uZGF0b3NUcmFuc2FjY2lvbixcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9XG4gICAgKVxuICB9XG5cbiAgLy9mdW5jaW9uIHF1ZSB2ZXJpZmljYSBxdWUgbGEgY2xhdmUgc2VhIGNvcnJlY3RhXG4gIGNvbnN0IGZvcm1PblN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKGRhdG9zVXN1YXJpby5jbGF2ZVVzdWFyaW8gPT09IGRhdG9zVHJhbnNhY2Npb24uY2xhdmUpIHtcblxuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogdHJ1ZSxcbiAgICAgICAgbWVuc2FqZTogJ1RyYW5zYWNjaW9uIGV4aXRvc2EgcmV0aXJlIHN1IGRpbmVybydcbiAgICAgIH0pXG5cbiAgICB9IGVsc2Uge1xuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogdHJ1ZSxcbiAgICAgICAgbWVuc2FqZTogJ2NsYXZlIGluY29ycmVjdGEnXG4gICAgICB9KVxuXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtSmNLYjhxM2lxSjYxZ05WOUtHYjh0aFNzTmpwU0wwbjhQQVJuOUh1Wk9uSXhOMGhvUCtWbW1ER01ONXQ5VUowWlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01XCI+QmllbnZlbmlkYSBQcm9mZTwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5Fc3RhIGVzIHVuYSBzaW11bGFjaW9uIGRlIHVuYSBUcmFuc2FjY2lvbiBlbiB1biBjYWplcm8sIGVuIGVsIGN1YWwgc2UgZXZhbHVhbiBsb3MgY2FtcG9zIGRlIGxhIGVkYWQsIGVsIHZhbG9yIHF1ZSBzZSBxdWllcmEgcmV0aXJhciB5IHNpIGxhIGNsYXZlIGVzIGNvcnJlY3RhLjwvcD5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTVcIj5UaXBvIGRlIHZlcmlmaWNhY2lvbmVzIGltcGxlbWVudGFkYXM6PC9oMz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBiZC1oaWdobGlnaHQgbWItM1wiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0xXCI+U2UgdmVyaWZpY2EgcXVlIGVkYWQgdGllbmVzLjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTFcIj5TZSB2ZXJpZmljYSBzaSBlcmVzIG1heW9yIG8gbWVub3IgZGUgZWRhZDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTFcIj5FbCB2YWxvciBhIHJldGlyYXIgbm8gcHVlZGUgc2VyIGNlcm8uPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMVwiPkVsIHZhbG9yIHF1ZSBzZSBxdWllcmEgcmV0aXJhciBubyBwdWVkZSBzZXIgbWF5b3IgYWwgc2FsZG8uPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMVwiPlNpIGVsIHZhbG9yIHF1ZSBzZSBxdWllcmEgcmV0aXJhciBlcyBtZW5vciBhbCBzYWxkbyB5IG1heW9yIHF1ZSBjZXJvIHRlIGhhYmlsaXRhIGVsIHNpZ3VpZW50ZSBjYW1wby48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0xXCI+TGEgY2xhdmUgZGViZSBzZXIgbGEgY29ycmVjdGEuPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+U2FsZG8gYWN0dWFsIHtkYXRvc1VzdWFyaW8udmFsb3JDdWVudGF9PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+Y2xhdmUgZGUgbGEgdGFyamV0YSBlczogMTIzNDwvaDI+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgeyF2ZXJpZmljYWNpb24udmVyaWZpY2FjaW9uQ2FtcG8yID9cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbD5JbmdyZXNhIHR1IGZlY2hhIGRlIG5hY2ltaW5lbnRvPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBuYW1lPSdmZWNoYU5hY2ltaWVudG8nXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRvc1VzdWFyaW8uZmVjaGFOYWNpbWllbnRvfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZWRhZE9uQ2hhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtzaWd1aWVudGVDYW1wbzJ9XG4gICAgICAgICAgICA+c2lndWllbnRlPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgOiA8PlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17Zm9ybU9uU3VibWl0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGgzPlR1IGVkYWQgZXM6IHtkYXRvc1VzdWFyaW8uZWRhZH08L2gzPlxuICAgICAgICAgICAgICAgIHtkYXRvc1VzdWFyaW8uZWRhZCA+PSAxOCA/IDxoMz5FcmVzIG1heW9yIGRlIGVkYWQ8L2gzPiA6IDxoMz5FcmVzIG1lbm9yIGRlIGVkYWQ8L2gzPn1cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5ncmVzZSBlbCB2YWxvciBhIHJldGlyYXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBuYW1lPSd2YWxvclJldGlyYXInXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0b3NUcmFuc2FjY2lvbi52YWxvclJldGlyYXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsb3JSZXRpcm9PbkNoYWdlfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2lndWllbnRlQ2FtcG8xfVxuICAgICAgICAgICAgICAgID5zaWd1aWVudGU8L2J1dHRvbj5cblxuXG5cbiAgICAgICAgICAgICAgICB7dmVyaWZpY2FjaW9uLnZlcmlmaWNhY2lvbkNhbXBvMVxuICAgICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JbmdyZXNlIGxhIGNsYXZlIGRlIGxhIHRhcmpldGE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdjbGF2ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRvc1RyYW5zYWNjaW9uLmNsYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbG9yQ2xhdmVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwidmVyaWZpY2FyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Lz59XG4gICAgICAgIHthbGVydGFzLmVqZWN1dGFyQWxlcnRhID8gPGgyIGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWxpZ2h0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+e2FsZXJ0YXMubWVuc2FqZX08L2gyPiA6IG51bGx9XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=