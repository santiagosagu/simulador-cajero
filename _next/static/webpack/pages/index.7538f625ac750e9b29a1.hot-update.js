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
  }, "El valor a retirar no puede ser cero."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, "El valor que se quiera retirar no puede ser mayor al saldo."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, "Si el valor que se quiera retirar es menor al saldo y mayor que cero te habilita el siguiente campo."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "La clave debe ser la correcta.")), __jsx("h2", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, "Saldo actual ", datosUsuario.valorCuenta), __jsx("h2", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, "clave de la tarjeta es: 1234")), !verificacion.verificacionCampo2 ? __jsx("div", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 175,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    onClick: siguienteCampo2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, "siguiente"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    onSubmit: formOnSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, "Tu edad es: ", datosUsuario.edad), datosUsuario.edad >= 18 ? __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 44
    }
  }, "Eres mayor de edad") : __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 74
    }
  }, "Eres menor de edad"), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 197,
      columnNumber: 17
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    onClick: siguienteCampo1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, "siguiente"), verificacion.verificacionCampo1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
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
      lineNumber: 217,
      columnNumber: 23
    }
  }), __jsx("input", {
    type: "submit",
    value: "verificar",
    className: "btn btn-primary ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 23
    }
  }))))))), alertas.ejecutarAlerta ? __jsx("h2", {
    className: "alert alert-light d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmFsb3JDdWVudGEiLCJjbGF2ZVVzdWFyaW8iLCJlZGFkIiwiZmVjaGFOYWNpbWllbnRvIiwiZGF0b3NVc3VhcmlvIiwiZ3VhcmRhckRhdG9zVXN1YXJpbyIsInZhbG9yUmV0aXJhciIsImNsYXZlIiwiZGF0b3NUcmFuc2FjY2lvbiIsImd1YXJkYXJEYXRvc1RyYW5zYWNjaW9uIiwidmVyaWZpY2FjaW9uQ2FtcG8xIiwidmVyaWZpY2FjaW9uQ2FtcG8yIiwidmVyaWZpY2FjaW9uIiwiZ3VhcmRhclZlcmlmaWNhY2lvbiIsImVqZWN1dGFyQWxlcnRhIiwibWVuc2FqZSIsImFsZXJ0YXMiLCJndWFyZGFyQWxlcnRhcyIsImVkYWRPbkNoYWdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNpZ3VpZW50ZUNhbXBvMiIsInByZXZlbnREZWZhdWx0IiwiYcOxb0FjdHVhbCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImHDsW9OYWNpbWllbnRvIiwicmVzcHVlc3RhIiwidmFsb3JSZXRpcm9PbkNoYWdlIiwic2lndWllbnRlQ2FtcG8xIiwidmFsb3JDbGF2ZU9uQ2hhbmdlIiwiZm9ybU9uU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRzdCO0FBSDZCLGtCQUllQyxzREFBUSxDQUFDO0FBQ25EQyxlQUFXLEVBQUUsTUFEc0M7QUFFbkRDLGdCQUFZLEVBQUUsTUFGcUM7QUFHbkRDLFFBQUksRUFBRSxDQUg2QztBQUluREMsbUJBQWUsRUFBRTtBQUprQyxHQUFELENBSnZCO0FBQUEsTUFJdEJDLFlBSnNCO0FBQUEsTUFJUkMsbUJBSlE7O0FBQUEsbUJBV3VCTixzREFBUSxDQUFDO0FBQzNETyxnQkFBWSxFQUFFLENBRDZDO0FBRTNEQyxT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LFFBQUksRUFBQyxPQUZQO0FBR0UsYUFBUyxFQUFDLG1CQUhaO0FBSUUsU0FBSyxFQUFFRixnQkFBZ0IsQ0FBQ0QsS0FKMUI7QUFLRSxZQUFRLEVBQUV5QixrQkFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFVRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsU0FBSyxFQUFDLFdBRlI7QUFHRSxhQUFTLEVBQUMsa0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREYsQ0FyQkosQ0FERixDQUhGLENBREEsQ0F0Q04sRUF3RktoQixPQUFPLENBQUNGLGNBQVIsR0FBeUI7QUFBSSxhQUFTLEVBQUMsaURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpRUUsT0FBTyxDQUFDRCxPQUF6RSxDQUF6QixHQUFrSCxJQXhGdkgsQ0FERjtBQTRGRDs7R0E3T3VCakIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NTM4ZjYyNWFjNzUwZTliMjlhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuXG4gIC8vc3RhdGVzXG4gIGNvbnN0IFtkYXRvc1VzdWFyaW8sIGd1YXJkYXJEYXRvc1VzdWFyaW9dID0gdXNlU3RhdGUoe1xuICAgIHZhbG9yQ3VlbnRhOiA2MDAwMDAsXG4gICAgY2xhdmVVc3VhcmlvOiAnMTIzNCcsXG4gICAgZWRhZDogMCxcbiAgICBmZWNoYU5hY2ltaWVudG86IDBcbiAgfSlcblxuICBjb25zdCBbZGF0b3NUcmFuc2FjY2lvbiwgZ3VhcmRhckRhdG9zVHJhbnNhY2Npb25dID0gdXNlU3RhdGUoe1xuICAgIHZhbG9yUmV0aXJhcjogMCxcbiAgICBjbGF2ZTogMFxuICB9KTtcblxuICBjb25zdCBbdmVyaWZpY2FjaW9uLCBndWFyZGFyVmVyaWZpY2FjaW9uXSA9IHVzZVN0YXRlKHtcbiAgICB2ZXJpZmljYWNpb25DYW1wbzE6IGZhbHNlLFxuICAgIHZlcmlmaWNhY2lvbkNhbXBvMjogZmFsc2VcblxuICB9KVxuXG4gIGNvbnN0IFthbGVydGFzLCBndWFyZGFyQWxlcnRhc10gPSB1c2VTdGF0ZSh7XG4gICAgZWplY3V0YXJBbGVydGE6IGZhbHNlLFxuICAgIG1lbnNhamU6ICcnXG4gIH0pXG5cblxuICAvL2Z1bmNpb24gcXVlIGd1YXJkYSBsYSBlZGFkIGRlbCB1c3VhcmlvXG4gIGNvbnN0IGVkYWRPbkNoYWdlID0gZSA9PiB7XG5cbiAgICBndWFyZGFyRGF0b3NVc3VhcmlvKHtcbiAgICAgIC4uLmRhdG9zVXN1YXJpbyxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgLy9mdW5jaW9uIHF1ZSBoYWJpbGl0YSBlbCBjYW1wbyBkZSBpbmdyZXNhciB2YWxvciBhIHJldGlyYXJcbiAgY29uc3Qgc2lndWllbnRlQ2FtcG8yID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoZGF0b3NVc3VhcmlvLmZlY2hhTmFjaW1pZW50byA9PT0gMCkge1xuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogdHJ1ZSxcbiAgICAgICAgbWVuc2FqZTogJ1BvciBmYXZvciBpbmdyZXNhIHR1IGZlY2hhIGRlIG5hY2ltaWVudG8nXG4gICAgICB9KVxuXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYcOxb0FjdHVhbCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgICAgY29uc3QgYcOxb05hY2ltaWVudG8gPSBkYXRvc1VzdWFyaW8uZmVjaGFOYWNpbWllbnRvXG4gICAgICBjb25zdCByZXNwdWVzdGEgPSBhw7FvQWN0dWFsIC0gYcOxb05hY2ltaWVudG9cblxuICAgICAgZ3VhcmRhckRhdG9zVXN1YXJpbyh7XG4gICAgICAgIC4uLmRhdG9zVXN1YXJpbyxcbiAgICAgICAgZWRhZDogcmVzcHVlc3RhXG4gICAgICB9KVxuXG4gICAgICBndWFyZGFyVmVyaWZpY2FjaW9uKHtcbiAgICAgICAgLi4udmVyaWZpY2FjaW9uLFxuICAgICAgICB2ZXJpZmljYWNpb25DYW1wbzI6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICAvL2Z1bmNpb24gcXVlIGd1YXJkYSBlbiBlbCBzdGF0ZSBlbCB2YWxvciBhIHJldGlyYXJcbiAgY29uc3QgdmFsb3JSZXRpcm9PbkNoYWdlID0gZSA9PiB7XG4gICAgZ3VhcmRhckRhdG9zVHJhbnNhY2Npb24oe1xuICAgICAgLi4uZGF0b3NUcmFuc2FjY2lvbixcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9XG4gICAgKVxuXG4gIH1cblxuXG4gIC8vZnVuY2lvbiBxdWUgaGFiaWxpdGEgZWwgY2FtcG8gZGUgaW5ncmVzYXIgbGEgY2xhdmVcbiAgY29uc3Qgc2lndWllbnRlQ2FtcG8xID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoZGF0b3NUcmFuc2FjY2lvbi52YWxvclJldGlyYXIgPT09IDApIHtcblxuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogdHJ1ZSxcbiAgICAgICAgbWVuc2FqZTogJ0VsIHZhbG9yIGEgcmV0aXJhciBkZWJlIHNlciBtYXlvciBhIGNlcm8nXG4gICAgICB9KVxuXG4gICAgICByZXR1cm5cblxuICAgIH0gZWxzZSBpZiAoZGF0b3NVc3VhcmlvLnZhbG9yQ3VlbnRhID49IGRhdG9zVHJhbnNhY2Npb24udmFsb3JSZXRpcmFyKSB7XG5cbiAgICAgIGd1YXJkYXJBbGVydGFzKHtcbiAgICAgICAgZWplY3V0YXJBbGVydGE6IGZhbHNlLFxuICAgICAgICBtZW5zYWplOiAnJ1xuICAgICAgfSlcblxuICAgICAgZ3VhcmRhclZlcmlmaWNhY2lvbih7XG4gICAgICAgIC4uLnZlcmlmaWNhY2lvbixcbiAgICAgICAgdmVyaWZpY2FjaW9uQ2FtcG8xOiB0cnVlXG4gICAgICB9KVxuXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBndWFyZGFyQWxlcnRhcyh7XG4gICAgICAgIGVqZWN1dGFyQWxlcnRhOiB0cnVlLFxuICAgICAgICBtZW5zYWplOiAnU2FsZG8gaW5zdWZpY2VudGUnXG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvL2Z1bmNpb24gcXVlIGd1YXJkYSBsYSBjbGF2ZSBlbiBlbCBzdGF0ZVxuICBjb25zdCB2YWxvckNsYXZlT25DaGFuZ2UgPSBlID0+IHtcblxuICAgIGd1YXJkYXJEYXRvc1RyYW5zYWNjaW9uKHtcbiAgICAgIC4uLmRhdG9zVHJhbnNhY2Npb24sXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfVxuICAgIClcbiAgfVxuXG4gIC8vZnVuY2lvbiBxdWUgdmVyaWZpY2EgcXVlIGxhIGNsYXZlIHNlYSBjb3JyZWN0YVxuICBjb25zdCBmb3JtT25TdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChkYXRvc1VzdWFyaW8uY2xhdmVVc3VhcmlvID09PSBkYXRvc1RyYW5zYWNjaW9uLmNsYXZlKSB7XG5cbiAgICAgIGd1YXJkYXJBbGVydGFzKHtcbiAgICAgICAgZWplY3V0YXJBbGVydGE6IHRydWUsXG4gICAgICAgIG1lbnNhamU6ICdUcmFuc2FjY2lvbiBleGl0b3NhIHJldGlyZSBzdSBkaW5lcm8nXG4gICAgICB9KVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGd1YXJkYXJBbGVydGFzKHtcbiAgICAgICAgZWplY3V0YXJBbGVydGE6IHRydWUsXG4gICAgICAgIG1lbnNhamU6ICdjbGF2ZSBpbmNvcnJlY3RhJ1xuICAgICAgfSlcblxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUpjS2I4cTNpcUo2MWdOVjlLR2I4dGhTc05qcFNMMG44UEFSbjlIdVpPbkl4TjBob1ArVm1tREdNTjV0OVVKMFpcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNVwiPkJpZW52ZW5pZGEgUHJvZmU8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+RXN0YSBlcyB1bmEgc2ltdWxhY2lvbiBkZSB1bmEgVHJhbnNhY2Npb24gZW4gdW4gY2FqZXJvLCBlbiBlbCBjdWFsIHNlIGV2YWx1YW4gbG9zIGNhbXBvcyBkZSBsYSBlZGFkLCBlbCB2YWxvciBxdWUgc2UgcXVpZXJhIHJldGlyYXIgeSBzaSBsYSBjbGF2ZSBlcyBjb3JyZWN0YS48L3A+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01XCI+VGlwbyBkZSB2ZXJpZmljYWNpb25lcyBpbXBsZW1lbnRhZGFzOjwvaDM+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYmQtaGlnaGxpZ2h0IG1iLTNcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMVwiPlNlIHZlcmlmaWNhIHF1ZSBlZGFkIHRpZW5lcy48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0xXCI+RWwgdmFsb3IgYSByZXRpcmFyIG5vIHB1ZWRlIHNlciBjZXJvLjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTFcIj5FbCB2YWxvciBxdWUgc2UgcXVpZXJhIHJldGlyYXIgbm8gcHVlZGUgc2VyIG1heW9yIGFsIHNhbGRvLjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTFcIj5TaSBlbCB2YWxvciBxdWUgc2UgcXVpZXJhIHJldGlyYXIgZXMgbWVub3IgYWwgc2FsZG8geSBtYXlvciBxdWUgY2VybyB0ZSBoYWJpbGl0YSBlbCBzaWd1aWVudGUgY2FtcG8uPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMVwiPkxhIGNsYXZlIGRlYmUgc2VyIGxhIGNvcnJlY3RhLjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlNhbGRvIGFjdHVhbCB7ZGF0b3NVc3VhcmlvLnZhbG9yQ3VlbnRhfTwvaDI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPmNsYXZlIGRlIGxhIHRhcmpldGEgZXM6IDEyMzQ8L2gyPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIHshdmVyaWZpY2FjaW9uLnZlcmlmaWNhY2lvbkNhbXBvMiA/XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWw+SW5ncmVzYSB0dSBmZWNoYSBkZSBuYWNpbWluZW50bzwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9J2ZlY2hhTmFjaW1pZW50bydcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdG9zVXN1YXJpby5mZWNoYU5hY2ltaWVudG99XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlZGFkT25DaGFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ3VpZW50ZUNhbXBvMn1cbiAgICAgICAgICAgID5zaWd1aWVudGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA6IDw+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtmb3JtT25TdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aDM+VHUgZWRhZCBlczoge2RhdG9zVXN1YXJpby5lZGFkfTwvaDM+XG4gICAgICAgICAgICAgICAge2RhdG9zVXN1YXJpby5lZGFkID49IDE4ID8gPGgzPkVyZXMgbWF5b3IgZGUgZWRhZDwvaDM+IDogPGgzPkVyZXMgbWVub3IgZGUgZWRhZDwvaDM+fVxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbmdyZXNlIGVsIHZhbG9yIGEgcmV0aXJhcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPSd2YWxvclJldGlyYXInXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0b3NUcmFuc2FjY2lvbi52YWxvclJldGlyYXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsb3JSZXRpcm9PbkNoYWdlfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2lndWllbnRlQ2FtcG8xfVxuICAgICAgICAgICAgICAgID5zaWd1aWVudGU8L2J1dHRvbj5cblxuXG5cbiAgICAgICAgICAgICAgICB7dmVyaWZpY2FjaW9uLnZlcmlmaWNhY2lvbkNhbXBvMVxuICAgICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JbmdyZXNlIGxhIGNsYXZlIGRlIGxhIHRhcmpldGE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nY2xhdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0b3NUcmFuc2FjY2lvbi5jbGF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWxvckNsYXZlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInZlcmlmaWNhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC8+fVxuICAgICAgICB7YWxlcnRhcy5lamVjdXRhckFsZXJ0YSA/IDxoMiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1saWdodCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPnthbGVydGFzLm1lbnNhamV9PC9oMj4gOiBudWxsfVxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9