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
    claveUsuario: '1234',
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
    guardarDatosUsuario(_objectSpread(_objectSpread({}, datosUsuario), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
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
    guardarDatosTransaccion(_objectSpread(_objectSpread({}, datosTransaccion), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
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
    type: "text",
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
    type: "text",
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
    type: "text",
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

_s(Home, "xKMZxj4LddqyXMwVAXRQRNBOlyA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmFsb3JDdWVudGEiLCJjbGF2ZVVzdWFyaW8iLCJlZGFkIiwiZmVjaGFOYWNpbWllbnRvIiwiZGF0b3NVc3VhcmlvIiwiZ3VhcmRhckRhdG9zVXN1YXJpbyIsInZhbG9yUmV0aXJhciIsImNsYXZlIiwiZGF0b3NUcmFuc2FjY2lvbiIsImd1YXJkYXJEYXRvc1RyYW5zYWNjaW9uIiwidmVyaWZpY2FjaW9uQ2FtcG8xIiwidmVyaWZpY2FjaW9uQ2FtcG8yIiwidmVyaWZpY2FjaW9uIiwiZ3VhcmRhclZlcmlmaWNhY2lvbiIsImVqZWN1dGFyQWxlcnRhIiwibWVuc2FqZSIsImFsZXJ0YXMiLCJndWFyZGFyQWxlcnRhcyIsImVkYWRPbkNoYWdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNpZ3VpZW50ZUNhbXBvMiIsInByZXZlbnREZWZhdWx0IiwiYcOxb0FjdHVhbCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImHDsW9OYWNpbWllbnRvIiwicmVzcHVlc3RhIiwidmFsb3JSZXRpcm9PbkNoYWdlIiwic2lndWllbnRlQ2FtcG8xIiwidmFsb3JDbGF2ZU9uQ2hhbmdlIiwiZm9ybU9uU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRzdCO0FBSDZCLGtCQUllQyxzREFBUSxDQUFDO0FBQ25EQyxlQUFXLEVBQUUsTUFEc0M7QUFFbkRDLGdCQUFZLEVBQUUsTUFGcUM7QUFHbkRDLFFBQUksRUFBRSxDQUg2QztBQUluREMsbUJBQWUsRUFBRTtBQUprQyxHQUFELENBSnZCO0FBQUEsTUFJdEJDLFlBSnNCO0FBQUEsTUFJUkMsbUJBSlE7O0FBQUEsbUJBV3VCTixzREFBUSxDQUFDO0FBQzNETyxnQkFBWSxFQUFFLENBRDZDO0FBRTNEQyxT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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixFQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLGFBQVMsRUFBQyxtQkFIWjtBQUlFLFNBQUssRUFBRUYsZ0JBQWdCLENBQUNELEtBSjFCO0FBS0UsWUFBUSxFQUFFeUIsa0JBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBVUU7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFNBQUssRUFBQyxXQUZSO0FBR0UsYUFBUyxFQUFDLGtCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQURGLENBckJKLENBREYsQ0FIRixDQURBLENBdkNOLEVBeUZLaEIsT0FBTyxDQUFDRixjQUFSLEdBQXlCO0FBQUksYUFBUyxFQUFDLGlEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUVFLE9BQU8sQ0FBQ0QsT0FBekUsQ0FBekIsR0FBa0gsSUF6RnZILENBREY7QUE2RkQ7O0dBOU91QmpCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDVmNTg3NjBlNWVmZTE2OGUwZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cblxuICAvL3N0YXRlc1xuICBjb25zdCBbZGF0b3NVc3VhcmlvLCBndWFyZGFyRGF0b3NVc3VhcmlvXSA9IHVzZVN0YXRlKHtcbiAgICB2YWxvckN1ZW50YTogNjAwMDAwLFxuICAgIGNsYXZlVXN1YXJpbzogJzEyMzQnLFxuICAgIGVkYWQ6IDAsXG4gICAgZmVjaGFOYWNpbWllbnRvOiAwXG4gIH0pXG5cbiAgY29uc3QgW2RhdG9zVHJhbnNhY2Npb24sIGd1YXJkYXJEYXRvc1RyYW5zYWNjaW9uXSA9IHVzZVN0YXRlKHtcbiAgICB2YWxvclJldGlyYXI6IDAsXG4gICAgY2xhdmU6IDBcbiAgfSk7XG5cbiAgY29uc3QgW3ZlcmlmaWNhY2lvbiwgZ3VhcmRhclZlcmlmaWNhY2lvbl0gPSB1c2VTdGF0ZSh7XG4gICAgdmVyaWZpY2FjaW9uQ2FtcG8xOiBmYWxzZSxcbiAgICB2ZXJpZmljYWNpb25DYW1wbzI6IGZhbHNlXG5cbiAgfSlcblxuICBjb25zdCBbYWxlcnRhcywgZ3VhcmRhckFsZXJ0YXNdID0gdXNlU3RhdGUoe1xuICAgIGVqZWN1dGFyQWxlcnRhOiBmYWxzZSxcbiAgICBtZW5zYWplOiAnJ1xuICB9KVxuXG5cbiAgLy9mdW5jaW9uIHF1ZSBndWFyZGEgbGEgZWRhZCBkZWwgdXN1YXJpb1xuICBjb25zdCBlZGFkT25DaGFnZSA9IGUgPT4ge1xuXG4gICAgZ3VhcmRhckRhdG9zVXN1YXJpbyh7XG4gICAgICAuLi5kYXRvc1VzdWFyaW8sXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIC8vZnVuY2lvbiBxdWUgaGFiaWxpdGEgZWwgY2FtcG8gZGUgaW5ncmVzYXIgdmFsb3IgYSByZXRpcmFyXG4gIGNvbnN0IHNpZ3VpZW50ZUNhbXBvMiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKGRhdG9zVXN1YXJpby5mZWNoYU5hY2ltaWVudG8gPT09IDApIHtcbiAgICAgIGd1YXJkYXJBbGVydGFzKHtcbiAgICAgICAgZWplY3V0YXJBbGVydGE6IHRydWUsXG4gICAgICAgIG1lbnNhamU6ICdQb3IgZmF2b3IgaW5ncmVzYSB0dSBmZWNoYSBkZSBuYWNpbWllbnRvJ1xuICAgICAgfSlcblxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGHDsW9BY3R1YWwgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICAgIGNvbnN0IGHDsW9OYWNpbWllbnRvID0gZGF0b3NVc3VhcmlvLmZlY2hhTmFjaW1pZW50b1xuICAgICAgY29uc3QgcmVzcHVlc3RhID0gYcOxb0FjdHVhbCAtIGHDsW9OYWNpbWllbnRvXG5cbiAgICAgIGd1YXJkYXJEYXRvc1VzdWFyaW8oe1xuICAgICAgICAuLi5kYXRvc1VzdWFyaW8sXG4gICAgICAgIGVkYWQ6IHJlc3B1ZXN0YVxuICAgICAgfSlcblxuICAgICAgZ3VhcmRhclZlcmlmaWNhY2lvbih7XG4gICAgICAgIC4uLnZlcmlmaWNhY2lvbixcbiAgICAgICAgdmVyaWZpY2FjaW9uQ2FtcG8yOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgLy9mdW5jaW9uIHF1ZSBndWFyZGEgZW4gZWwgc3RhdGUgZWwgdmFsb3IgYSByZXRpcmFyXG4gIGNvbnN0IHZhbG9yUmV0aXJvT25DaGFnZSA9IGUgPT4ge1xuICAgIGd1YXJkYXJEYXRvc1RyYW5zYWNjaW9uKHtcbiAgICAgIC4uLmRhdG9zVHJhbnNhY2Npb24sXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfVxuICAgIClcblxuICB9XG5cblxuICAvL2Z1bmNpb24gcXVlIGhhYmlsaXRhIGVsIGNhbXBvIGRlIGluZ3Jlc2FyIGxhIGNsYXZlXG4gIGNvbnN0IHNpZ3VpZW50ZUNhbXBvMSA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKGRhdG9zVHJhbnNhY2Npb24udmFsb3JSZXRpcmFyID09PSAwKSB7XG5cbiAgICAgIGd1YXJkYXJBbGVydGFzKHtcbiAgICAgICAgZWplY3V0YXJBbGVydGE6IHRydWUsXG4gICAgICAgIG1lbnNhamU6ICdFbCB2YWxvciBhIHJldGlyYXIgZGViZSBzZXIgbWF5b3IgYSBjZXJvJ1xuICAgICAgfSlcblxuICAgICAgcmV0dXJuXG5cbiAgICB9IGVsc2UgaWYgKGRhdG9zVXN1YXJpby52YWxvckN1ZW50YSA+PSBkYXRvc1RyYW5zYWNjaW9uLnZhbG9yUmV0aXJhcikge1xuXG4gICAgICBndWFyZGFyQWxlcnRhcyh7XG4gICAgICAgIGVqZWN1dGFyQWxlcnRhOiBmYWxzZSxcbiAgICAgICAgbWVuc2FqZTogJydcbiAgICAgIH0pXG5cbiAgICAgIGd1YXJkYXJWZXJpZmljYWNpb24oe1xuICAgICAgICAuLi52ZXJpZmljYWNpb24sXG4gICAgICAgIHZlcmlmaWNhY2lvbkNhbXBvMTogdHJ1ZVxuICAgICAgfSlcblxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogdHJ1ZSxcbiAgICAgICAgbWVuc2FqZTogJ1NhbGRvIGluc3VmaWNlbnRlJ1xuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG5cbiAgLy9mdW5jaW9uIHF1ZSBndWFyZGEgbGEgY2xhdmUgZW4gZWwgc3RhdGVcbiAgY29uc3QgdmFsb3JDbGF2ZU9uQ2hhbmdlID0gZSA9PiB7XG5cbiAgICBndWFyZGFyRGF0b3NUcmFuc2FjY2lvbih7XG4gICAgICAuLi5kYXRvc1RyYW5zYWNjaW9uLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH1cbiAgICApXG4gIH1cblxuICAvL2Z1bmNpb24gcXVlIHZlcmlmaWNhIHF1ZSBsYSBjbGF2ZSBzZWEgY29ycmVjdGFcbiAgY29uc3QgZm9ybU9uU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoZGF0b3NVc3VhcmlvLmNsYXZlVXN1YXJpbyA9PT0gZGF0b3NUcmFuc2FjY2lvbi5jbGF2ZSkge1xuXG4gICAgICBndWFyZGFyQWxlcnRhcyh7XG4gICAgICAgIGVqZWN1dGFyQWxlcnRhOiB0cnVlLFxuICAgICAgICBtZW5zYWplOiAnVHJhbnNhY2Npb24gZXhpdG9zYSByZXRpcmUgc3UgZGluZXJvJ1xuICAgICAgfSlcblxuICAgIH0gZWxzZSB7XG4gICAgICBndWFyZGFyQWxlcnRhcyh7XG4gICAgICAgIGVqZWN1dGFyQWxlcnRhOiB0cnVlLFxuICAgICAgICBtZW5zYWplOiAnY2xhdmUgaW5jb3JyZWN0YSdcbiAgICAgIH0pXG5cbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1KY0tiOHEzaXFKNjFnTlY5S0diOHRoU3NOanBTTDBuOFBBUm45SHVaT25JeE4waG9QK1ZtbURHTU41dDlVSjBaXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTVcIj5CaWVudmVuaWRhIFByb2ZlPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPkVzdGEgZXMgdW5hIHNpbXVsYWNpb24gZGUgdW5hIFRyYW5zYWNjaW9uIGVuIHVuIGNhamVybywgZW4gZWwgY3VhbCBzZSBldmFsdWFuIGxvcyBjYW1wb3MgZGUgbGEgZWRhZCwgZWwgdmFsb3IgcXVlIHNlIHF1aWVyYSByZXRpcmFyIHkgc2kgbGEgY2xhdmUgZXMgY29ycmVjdGEuPC9wPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNVwiPlRpcG8gZGUgdmVyaWZpY2FjaW9uZXMgaW1wbGVtZW50YWRhczo8L2gzPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGJkLWhpZ2hsaWdodCBtYi0zXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTFcIj5TZSB2ZXJpZmljYSBxdWUgZWRhZCB0aWVuZXMuPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMVwiPlNlIHZlcmlmaWNhIHNpIGVyZXMgbWF5b3IgbyBtZW5vciBkZSBlZGFkPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMVwiPkVsIHZhbG9yIGEgcmV0aXJhciBubyBwdWVkZSBzZXIgY2Vyby48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0xXCI+RWwgdmFsb3IgcXVlIHNlIHF1aWVyYSByZXRpcmFyIG5vIHB1ZWRlIHNlciBtYXlvciBhbCBzYWxkby48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0xXCI+U2kgZWwgdmFsb3IgcXVlIHNlIHF1aWVyYSByZXRpcmFyIGVzIG1lbm9yIGFsIHNhbGRvIHkgbWF5b3IgcXVlIGNlcm8gdGUgaGFiaWxpdGEgZWwgc2lndWllbnRlIGNhbXBvLjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTFcIj5MYSBjbGF2ZSBkZWJlIHNlciBsYSBjb3JyZWN0YS48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5TYWxkbyBhY3R1YWwge2RhdG9zVXN1YXJpby52YWxvckN1ZW50YX08L2gyPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5jbGF2ZSBkZSBsYSB0YXJqZXRhIGVzOiAxMjM0PC9oMj5cblxuICAgICAgPC9kaXY+XG4gICAgICB7IXZlcmlmaWNhY2lvbi52ZXJpZmljYWNpb25DYW1wbzIgP1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsPkluZ3Jlc2EgdHUgZmVjaGEgZGUgbmFjaW1pbmVudG88L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPSdmZWNoYU5hY2ltaWVudG8nXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRvc1VzdWFyaW8uZmVjaGFOYWNpbWllbnRvfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZWRhZE9uQ2hhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtzaWd1aWVudGVDYW1wbzJ9XG4gICAgICAgICAgICA+c2lndWllbnRlPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgOiA8PlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17Zm9ybU9uU3VibWl0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGgzPlR1IGVkYWQgZXM6IHtkYXRvc1VzdWFyaW8uZWRhZH08L2gzPlxuICAgICAgICAgICAgICAgIHtkYXRvc1VzdWFyaW8uZWRhZCA+PSAxOCA/IDxoMz5FcmVzIG1heW9yIGRlIGVkYWQ8L2gzPiA6IDxoMz5FcmVzIG1lbm9yIGRlIGVkYWQ8L2gzPn1cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5ncmVzZSBlbCB2YWxvciBhIHJldGlyYXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT0ndmFsb3JSZXRpcmFyJ1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdG9zVHJhbnNhY2Npb24udmFsb3JSZXRpcmFyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbG9yUmV0aXJvT25DaGFnZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ3VpZW50ZUNhbXBvMX1cbiAgICAgICAgICAgICAgICA+c2lndWllbnRlPC9idXR0b24+XG5cblxuXG4gICAgICAgICAgICAgICAge3ZlcmlmaWNhY2lvbi52ZXJpZmljYWNpb25DYW1wbzFcbiAgICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW5ncmVzZSBsYSBjbGF2ZSBkZSBsYSB0YXJqZXRhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2NsYXZlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdG9zVHJhbnNhY2Npb24uY2xhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsb3JDbGF2ZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ2ZXJpZmljYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvPn1cbiAgICAgICAge2FsZXJ0YXMuZWplY3V0YXJBbGVydGEgPyA8aDIgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj57YWxlcnRhcy5tZW5zYWplfTwvaDI+IDogbnVsbH1cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==