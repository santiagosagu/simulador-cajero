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
    guardarDatosTransaccion(_objectSpread(_objectSpread({}, datosTransaccion), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, parseInt(e.target.value, 10))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmFsb3JDdWVudGEiLCJjbGF2ZVVzdWFyaW8iLCJlZGFkIiwiZmVjaGFOYWNpbWllbnRvIiwiZGF0b3NVc3VhcmlvIiwiZ3VhcmRhckRhdG9zVXN1YXJpbyIsInZhbG9yUmV0aXJhciIsImNsYXZlIiwiZGF0b3NUcmFuc2FjY2lvbiIsImd1YXJkYXJEYXRvc1RyYW5zYWNjaW9uIiwidmVyaWZpY2FjaW9uQ2FtcG8xIiwidmVyaWZpY2FjaW9uQ2FtcG8yIiwidmVyaWZpY2FjaW9uIiwiZ3VhcmRhclZlcmlmaWNhY2lvbiIsImVqZWN1dGFyQWxlcnRhIiwibWVuc2FqZSIsImFsZXJ0YXMiLCJndWFyZGFyQWxlcnRhcyIsImVkYWRPbkNoYWdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJwYXJzZUludCIsInZhbHVlIiwic2lndWllbnRlQ2FtcG8yIiwicHJldmVudERlZmF1bHQiLCJhw7FvQWN0dWFsIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYcOxb05hY2ltaWVudG8iLCJyZXNwdWVzdGEiLCJ2YWxvclJldGlyb09uQ2hhZ2UiLCJzaWd1aWVudGVDYW1wbzEiLCJ2YWxvckNsYXZlT25DaGFuZ2UiLCJmb3JtT25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFHN0I7QUFINkIsa0JBSWVDLHNEQUFRLENBQUM7QUFDbkRDLGVBQVcsRUFBRSxNQURzQztBQUVuREMsZ0JBQVksRUFBRSxJQUZxQztBQUduREMsUUFBSSxFQUFFLENBSDZDO0FBSW5EQyxtQkFBZSxFQUFFO0FBSmtDLEdBQUQsQ0FKdkI7QUFBQSxNQUl0QkMsWUFKc0I7QUFBQSxNQUlSQyxtQkFKUTs7QUFBQSxtQkFXdUJOLHNEQUFRLENBQUM7QUFDM0RPLGdCQUFZLEVBQUUsQ0FE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R3BCLFlBQVksQ0FBQ0Ysa0JBQWIsSUFFQyxtRUFDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsYUFBUyxFQUFDLG1CQUhaO0FBSUUsU0FBSyxFQUFFRixnQkFBZ0IsQ0FBQ0QsS0FKMUI7QUFLRSxZQUFRLEVBQUUwQixrQkFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFVRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsU0FBSyxFQUFDLFdBRlI7QUFHRSxhQUFTLEVBQUMsa0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREYsQ0FyQkosQ0FERixDQUhGLENBREEsQ0F2Q04sRUF5RktqQixPQUFPLENBQUNGLGNBQVIsR0FBeUI7QUFBSSxhQUFTLEVBQUMsaURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpRUUsT0FBTyxDQUFDRCxPQUF6RSxDQUF6QixHQUFrSCxJQXpGdkgsQ0FERjtBQTZGRDs7R0E5T3VCakIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYTdiYzMzYzE3YzI4ZDMzZjZmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuXG4gIC8vc3RhdGVzXG4gIGNvbnN0IFtkYXRvc1VzdWFyaW8sIGd1YXJkYXJEYXRvc1VzdWFyaW9dID0gdXNlU3RhdGUoe1xuICAgIHZhbG9yQ3VlbnRhOiA2MDAwMDAsXG4gICAgY2xhdmVVc3VhcmlvOiAxMjM0LFxuICAgIGVkYWQ6IDAsXG4gICAgZmVjaGFOYWNpbWllbnRvOiAwXG4gIH0pXG5cbiAgY29uc3QgW2RhdG9zVHJhbnNhY2Npb24sIGd1YXJkYXJEYXRvc1RyYW5zYWNjaW9uXSA9IHVzZVN0YXRlKHtcbiAgICB2YWxvclJldGlyYXI6IDAsXG4gICAgY2xhdmU6IDBcbiAgfSk7XG5cbiAgY29uc3QgW3ZlcmlmaWNhY2lvbiwgZ3VhcmRhclZlcmlmaWNhY2lvbl0gPSB1c2VTdGF0ZSh7XG4gICAgdmVyaWZpY2FjaW9uQ2FtcG8xOiBmYWxzZSxcbiAgICB2ZXJpZmljYWNpb25DYW1wbzI6IGZhbHNlXG5cbiAgfSlcblxuICBjb25zdCBbYWxlcnRhcywgZ3VhcmRhckFsZXJ0YXNdID0gdXNlU3RhdGUoe1xuICAgIGVqZWN1dGFyQWxlcnRhOiBmYWxzZSxcbiAgICBtZW5zYWplOiAnJ1xuICB9KVxuXG5cbiAgLy9mdW5jaW9uIHF1ZSBndWFyZGEgbGEgZWRhZCBkZWwgdXN1YXJpb1xuICBjb25zdCBlZGFkT25DaGFnZSA9IGUgPT4ge1xuXG4gICAgZ3VhcmRhckRhdG9zVXN1YXJpbyh7XG4gICAgICAuLi5kYXRvc1VzdWFyaW8sXG4gICAgICBbZS50YXJnZXQubmFtZV06IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMClcbiAgICB9KVxuICB9XG5cbiAgLy9mdW5jaW9uIHF1ZSBoYWJpbGl0YSBlbCBjYW1wbyBkZSBpbmdyZXNhciB2YWxvciBhIHJldGlyYXJcbiAgY29uc3Qgc2lndWllbnRlQ2FtcG8yID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoZGF0b3NVc3VhcmlvLmZlY2hhTmFjaW1pZW50byA9PT0gMCkge1xuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogdHJ1ZSxcbiAgICAgICAgbWVuc2FqZTogJ1BvciBmYXZvciBpbmdyZXNhIHR1IGZlY2hhIGRlIG5hY2ltaWVudG8nXG4gICAgICB9KVxuXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYcOxb0FjdHVhbCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgICAgY29uc3QgYcOxb05hY2ltaWVudG8gPSBkYXRvc1VzdWFyaW8uZmVjaGFOYWNpbWllbnRvXG4gICAgICBjb25zdCByZXNwdWVzdGEgPSBhw7FvQWN0dWFsIC0gYcOxb05hY2ltaWVudG9cblxuICAgICAgZ3VhcmRhckRhdG9zVXN1YXJpbyh7XG4gICAgICAgIC4uLmRhdG9zVXN1YXJpbyxcbiAgICAgICAgZWRhZDogcmVzcHVlc3RhXG4gICAgICB9KVxuXG4gICAgICBndWFyZGFyVmVyaWZpY2FjaW9uKHtcbiAgICAgICAgLi4udmVyaWZpY2FjaW9uLFxuICAgICAgICB2ZXJpZmljYWNpb25DYW1wbzI6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICAvL2Z1bmNpb24gcXVlIGd1YXJkYSBlbiBlbCBzdGF0ZSBlbCB2YWxvciBhIHJldGlyYXJcbiAgY29uc3QgdmFsb3JSZXRpcm9PbkNoYWdlID0gZSA9PiB7XG4gICAgZ3VhcmRhckRhdG9zVHJhbnNhY2Npb24oe1xuICAgICAgLi4uZGF0b3NUcmFuc2FjY2lvbixcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSBcbiAgICB9XG4gICAgKVxuXG4gIH1cblxuXG4gIC8vZnVuY2lvbiBxdWUgaGFiaWxpdGEgZWwgY2FtcG8gZGUgaW5ncmVzYXIgbGEgY2xhdmVcbiAgY29uc3Qgc2lndWllbnRlQ2FtcG8xID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoZGF0b3NUcmFuc2FjY2lvbi52YWxvclJldGlyYXIgPT09IDApIHtcblxuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogdHJ1ZSxcbiAgICAgICAgbWVuc2FqZTogJ0VsIHZhbG9yIGEgcmV0aXJhciBkZWJlIHNlciBtYXlvciBhIGNlcm8nXG4gICAgICB9KVxuXG4gICAgICByZXR1cm5cblxuICAgIH0gZWxzZSBpZiAoZGF0b3NVc3VhcmlvLnZhbG9yQ3VlbnRhID49IGRhdG9zVHJhbnNhY2Npb24udmFsb3JSZXRpcmFyKSB7XG5cbiAgICAgIGd1YXJkYXJBbGVydGFzKHtcbiAgICAgICAgZWplY3V0YXJBbGVydGE6IGZhbHNlLFxuICAgICAgICBtZW5zYWplOiAnJ1xuICAgICAgfSlcblxuICAgICAgZ3VhcmRhclZlcmlmaWNhY2lvbih7XG4gICAgICAgIC4uLnZlcmlmaWNhY2lvbixcbiAgICAgICAgdmVyaWZpY2FjaW9uQ2FtcG8xOiB0cnVlXG4gICAgICB9KVxuXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBndWFyZGFyQWxlcnRhcyh7XG4gICAgICAgIGVqZWN1dGFyQWxlcnRhOiB0cnVlLFxuICAgICAgICBtZW5zYWplOiAnU2FsZG8gaW5zdWZpY2VudGUnXG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvL2Z1bmNpb24gcXVlIGd1YXJkYSBsYSBjbGF2ZSBlbiBlbCBzdGF0ZVxuICBjb25zdCB2YWxvckNsYXZlT25DaGFuZ2UgPSBlID0+IHtcblxuICAgIGd1YXJkYXJEYXRvc1RyYW5zYWNjaW9uKHtcbiAgICAgIC4uLmRhdG9zVHJhbnNhY2Npb24sXG4gICAgICBbZS50YXJnZXQubmFtZV06IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkgXG4gICAgfVxuICAgIClcbiAgfVxuXG4gIC8vZnVuY2lvbiBxdWUgdmVyaWZpY2EgcXVlIGxhIGNsYXZlIHNlYSBjb3JyZWN0YVxuICBjb25zdCBmb3JtT25TdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChkYXRvc1VzdWFyaW8uY2xhdmVVc3VhcmlvID09PSBkYXRvc1RyYW5zYWNjaW9uLmNsYXZlKSB7XG5cbiAgICAgIGd1YXJkYXJBbGVydGFzKHtcbiAgICAgICAgZWplY3V0YXJBbGVydGE6IHRydWUsXG4gICAgICAgIG1lbnNhamU6ICdUcmFuc2FjY2lvbiBleGl0b3NhIHJldGlyZSBzdSBkaW5lcm8nXG4gICAgICB9KVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGd1YXJkYXJBbGVydGFzKHtcbiAgICAgICAgZWplY3V0YXJBbGVydGE6IHRydWUsXG4gICAgICAgIG1lbnNhamU6ICdjbGF2ZSBpbmNvcnJlY3RhJ1xuICAgICAgfSlcblxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUpjS2I4cTNpcUo2MWdOVjlLR2I4dGhTc05qcFNMMG44UEFSbjlIdVpPbkl4TjBob1ArVm1tREdNTjV0OVVKMFpcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNVwiPkJpZW52ZW5pZGEgUHJvZmU8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+RXN0YSBlcyB1bmEgc2ltdWxhY2lvbiBkZSB1bmEgVHJhbnNhY2Npb24gZW4gdW4gY2FqZXJvLCBlbiBlbCBjdWFsIHNlIGV2YWx1YW4gbG9zIGNhbXBvcyBkZSBsYSBlZGFkLCBlbCB2YWxvciBxdWUgc2UgcXVpZXJhIHJldGlyYXIgeSBzaSBsYSBjbGF2ZSBlcyBjb3JyZWN0YS48L3A+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01XCI+VGlwbyBkZSB2ZXJpZmljYWNpb25lcyBpbXBsZW1lbnRhZGFzOjwvaDM+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYmQtaGlnaGxpZ2h0IG1iLTNcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMVwiPlNlIHZlcmlmaWNhIHF1ZSBlZGFkIHRpZW5lcy48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0xXCI+U2UgdmVyaWZpY2Egc2kgZXJlcyBtYXlvciBvIG1lbm9yIGRlIGVkYWQ8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0xXCI+RWwgdmFsb3IgYSByZXRpcmFyIG5vIHB1ZWRlIHNlciBjZXJvLjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTFcIj5FbCB2YWxvciBxdWUgc2UgcXVpZXJhIHJldGlyYXIgbm8gcHVlZGUgc2VyIG1heW9yIGFsIHNhbGRvLjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTFcIj5TaSBlbCB2YWxvciBxdWUgc2UgcXVpZXJhIHJldGlyYXIgZXMgbWVub3IgYWwgc2FsZG8geSBtYXlvciBxdWUgY2VybyB0ZSBoYWJpbGl0YSBlbCBzaWd1aWVudGUgY2FtcG8uPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMVwiPkxhIGNsYXZlIGRlYmUgc2VyIGxhIGNvcnJlY3RhLjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlNhbGRvIGFjdHVhbCB7ZGF0b3NVc3VhcmlvLnZhbG9yQ3VlbnRhfTwvaDI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPmNsYXZlIGRlIGxhIHRhcmpldGEgZXM6IDEyMzQ8L2gyPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIHshdmVyaWZpY2FjaW9uLnZlcmlmaWNhY2lvbkNhbXBvMiA/XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWw+SW5ncmVzYSB0dSBmZWNoYSBkZSBuYWNpbWluZW50bzwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbmFtZT0nZmVjaGFOYWNpbWllbnRvJ1xuICAgICAgICAgICAgICB2YWx1ZT17ZGF0b3NVc3VhcmlvLmZlY2hhTmFjaW1pZW50b31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2VkYWRPbkNoYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17c2lndWllbnRlQ2FtcG8yfVxuICAgICAgICAgICAgPnNpZ3VpZW50ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDogPD5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1PblN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMz5UdSBlZGFkIGVzOiB7ZGF0b3NVc3VhcmlvLmVkYWR9PC9oMz5cbiAgICAgICAgICAgICAgICB7ZGF0b3NVc3VhcmlvLmVkYWQgPj0gMTggPyA8aDM+RXJlcyBtYXlvciBkZSBlZGFkPC9oMz4gOiA8aDM+RXJlcyBtZW5vciBkZSBlZGFkPC9oMz59XG4gICAgICAgICAgICAgICAgPGxhYmVsPkluZ3Jlc2UgZWwgdmFsb3IgYSByZXRpcmFyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT0ndmFsb3JSZXRpcmFyJ1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdG9zVHJhbnNhY2Npb24udmFsb3JSZXRpcmFyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbG9yUmV0aXJvT25DaGFnZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ3VpZW50ZUNhbXBvMX1cbiAgICAgICAgICAgICAgICA+c2lndWllbnRlPC9idXR0b24+XG5cblxuXG4gICAgICAgICAgICAgICAge3ZlcmlmaWNhY2lvbi52ZXJpZmljYWNpb25DYW1wbzFcbiAgICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW5ncmVzZSBsYSBjbGF2ZSBkZSBsYSB0YXJqZXRhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nY2xhdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0b3NUcmFuc2FjY2lvbi5jbGF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWxvckNsYXZlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInZlcmlmaWNhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC8+fVxuICAgICAgICB7YWxlcnRhcy5lamVjdXRhckFsZXJ0YSA/IDxoMiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1saWdodCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPnthbGVydGFzLm1lbnNhamV9PC9oMj4gOiBudWxsfVxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9