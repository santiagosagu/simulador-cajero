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
  /* const fechaNacimiento = 1995
  const añoActual = new Date().getFullYear()
  const prueba = false */

  /* console.log(añoActual - fechaNacimiento) */


  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 160,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "d-flex justify-content-center mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, "Bienvenida Profe"), __jsx("p", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, "Esta es una simulacion de una Transaccion en un cajero, en el cual se evaluan los campos de la edad, el valor que se quiera retirar y si la clave es correcta."), __jsx("h3", {
    className: "d-flex justify-content-center mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, "Tipo de verificaciones implementadas:"), __jsx("ul", {
    className: "d-flex flex-column bd-highlight mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, "Se verifica que edad tienes."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  }, "El valor a retirar no puede ser cero."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, "El valor que se quiera retirar no puede ser mayor al saldo."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, "Si el valor que se quiera retirar es menor al saldo y mayor que cero te habilita el siguiente campo."), __jsx("li", {
    className: "d-flex justify-content-center mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, "La clave debe ser la correcta.")), __jsx("h2", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, "Saldo actual ", datosUsuario.valorCuenta), __jsx("h2", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, "clave de la tarjeta es: 1234")), !verificacion.verificacionCampo2 ? __jsx("div", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 183,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    onClick: siguienteCampo2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, "siguiente"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    onSubmit: formOnSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, "Tu edad es: ", datosUsuario.edad), datosUsuario.edad >= 0 ? __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 43
    }
  }, "Eres mayor de edad") : __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 73
    }
  }, "Eres menor de edad"), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
      lineNumber: 205,
      columnNumber: 17
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    onClick: siguienteCampo1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, "siguiente"), verificacion.verificacionCampo1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
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
      lineNumber: 225,
      columnNumber: 23
    }
  }), __jsx("input", {
    type: "submit",
    value: "verificar",
    className: "btn btn-primary ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 23
    }
  }))))))), alertas.ejecutarAlerta ? __jsx("h2", {
    className: "alert alert-light d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmFsb3JDdWVudGEiLCJjbGF2ZVVzdWFyaW8iLCJlZGFkIiwiZmVjaGFOYWNpbWllbnRvIiwiZGF0b3NVc3VhcmlvIiwiZ3VhcmRhckRhdG9zVXN1YXJpbyIsInZhbG9yUmV0aXJhciIsImNsYXZlIiwiZGF0b3NUcmFuc2FjY2lvbiIsImd1YXJkYXJEYXRvc1RyYW5zYWNjaW9uIiwidmVyaWZpY2FjaW9uQ2FtcG8xIiwidmVyaWZpY2FjaW9uQ2FtcG8yIiwidmVyaWZpY2FjaW9uIiwiZ3VhcmRhclZlcmlmaWNhY2lvbiIsImVqZWN1dGFyQWxlcnRhIiwibWVuc2FqZSIsImFsZXJ0YXMiLCJndWFyZGFyQWxlcnRhcyIsImVkYWRPbkNoYWdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNpZ3VpZW50ZUNhbXBvMiIsInByZXZlbnREZWZhdWx0IiwiYcOxb0FjdHVhbCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImHDsW9OYWNpbWllbnRvIiwicmVzcHVlc3RhIiwidmFsb3JSZXRpcm9PbkNoYWdlIiwic2lndWllbnRlQ2FtcG8xIiwidmFsb3JDbGF2ZU9uQ2hhbmdlIiwiZm9ybU9uU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRzdCO0FBSDZCLGtCQUllQyxzREFBUSxDQUFDO0FBQ25EQyxlQUFXLEVBQUUsTUFEc0M7QUFFbkRDLGdCQUFZLEVBQUUsTUFGcUM7QUFHbkRDLFFBQUksRUFBRSxDQUg2QztBQUluREMsbUJBQWUsRUFBRTtBQUprQyxHQUFELENBSnZCO0FBQUEsTUFJdEJDLFlBSnNCO0FBQUEsTUFJUkMsbUJBSlE7O0FBQUEsbUJBV3VCTixzREFBUSxDQUFDO0FBQzNETyxnQkFBWSxFQUFFLENBRDZDO0FBRTNEQyxT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RUFBQyxNQURQO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxhQUFTLEVBQUMsbUJBSFo7QUFJRSxTQUFLLEVBQUVGLGdCQUFnQixDQUFDRCxLQUoxQjtBQUtFLFlBQVEsRUFBRXlCLGtCQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVVFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFLLEVBQUMsV0FGUjtBQUdFLGFBQVMsRUFBQyxrQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERixDQXJCSixDQURGLENBSEYsQ0FEQSxDQXRDTixFQXdGS2hCLE9BQU8sQ0FBQ0YsY0FBUixHQUF5QjtBQUFJLGFBQVMsRUFBQyxpREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlFRSxPQUFPLENBQUNELE9BQXpFLENBQXpCLEdBQWtILElBeEZ2SCxDQURGO0FBNEZEOztHQXJQdUJqQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzYmQxZTIyMTM4ZTliZjg1YTUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cbiAgLy9zdGF0ZXNcbiAgY29uc3QgW2RhdG9zVXN1YXJpbywgZ3VhcmRhckRhdG9zVXN1YXJpb10gPSB1c2VTdGF0ZSh7XG4gICAgdmFsb3JDdWVudGE6IDYwMDAwMCxcbiAgICBjbGF2ZVVzdWFyaW86ICcxMjM0JyxcbiAgICBlZGFkOiAwLFxuICAgIGZlY2hhTmFjaW1pZW50bzogMFxuICB9KVxuXG4gIGNvbnN0IFtkYXRvc1RyYW5zYWNjaW9uLCBndWFyZGFyRGF0b3NUcmFuc2FjY2lvbl0gPSB1c2VTdGF0ZSh7XG4gICAgdmFsb3JSZXRpcmFyOiAwLFxuICAgIGNsYXZlOiAwXG4gIH0pO1xuXG4gIGNvbnN0IFt2ZXJpZmljYWNpb24sIGd1YXJkYXJWZXJpZmljYWNpb25dID0gdXNlU3RhdGUoe1xuICAgIHZlcmlmaWNhY2lvbkNhbXBvMTogZmFsc2UsXG4gICAgdmVyaWZpY2FjaW9uQ2FtcG8yOiBmYWxzZVxuXG4gIH0pXG5cbiAgY29uc3QgW2FsZXJ0YXMsIGd1YXJkYXJBbGVydGFzXSA9IHVzZVN0YXRlKHtcbiAgICBlamVjdXRhckFsZXJ0YTogZmFsc2UsXG4gICAgbWVuc2FqZTogJydcbiAgfSlcblxuXG4gIC8vZnVuY2lvbiBxdWUgZ3VhcmRhIGxhIGVkYWQgZGVsIHVzdWFyaW9cbiAgY29uc3QgZWRhZE9uQ2hhZ2UgPSBlID0+IHtcblxuICAgIGd1YXJkYXJEYXRvc1VzdWFyaW8oe1xuICAgICAgLi4uZGF0b3NVc3VhcmlvLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICAvL2Z1bmNpb24gcXVlIGhhYmlsaXRhIGVsIGNhbXBvIGRlIGluZ3Jlc2FyIHZhbG9yIGEgcmV0aXJhclxuICBjb25zdCBzaWd1aWVudGVDYW1wbzIgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChkYXRvc1VzdWFyaW8uZmVjaGFOYWNpbWllbnRvID09PSAwKSB7XG4gICAgICBndWFyZGFyQWxlcnRhcyh7XG4gICAgICAgIGVqZWN1dGFyQWxlcnRhOiB0cnVlLFxuICAgICAgICBtZW5zYWplOiAnUG9yIGZhdm9yIGluZ3Jlc2EgdHUgZmVjaGEgZGUgbmFjaW1pZW50bydcbiAgICAgIH0pXG5cbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhw7FvQWN0dWFsID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgICBjb25zdCBhw7FvTmFjaW1pZW50byA9IGRhdG9zVXN1YXJpby5mZWNoYU5hY2ltaWVudG9cbiAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGHDsW9BY3R1YWwgLSBhw7FvTmFjaW1pZW50b1xuXG4gICAgICBndWFyZGFyRGF0b3NVc3VhcmlvKHtcbiAgICAgICAgLi4uZGF0b3NVc3VhcmlvLFxuICAgICAgICBlZGFkOiByZXNwdWVzdGFcbiAgICAgIH0pXG5cbiAgICAgIGd1YXJkYXJWZXJpZmljYWNpb24oe1xuICAgICAgICAuLi52ZXJpZmljYWNpb24sXG4gICAgICAgIHZlcmlmaWNhY2lvbkNhbXBvMjogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4gIC8vZnVuY2lvbiBxdWUgZ3VhcmRhIGVuIGVsIHN0YXRlIGVsIHZhbG9yIGEgcmV0aXJhclxuICBjb25zdCB2YWxvclJldGlyb09uQ2hhZ2UgPSBlID0+IHtcbiAgICBndWFyZGFyRGF0b3NUcmFuc2FjY2lvbih7XG4gICAgICAuLi5kYXRvc1RyYW5zYWNjaW9uLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH1cbiAgICApXG5cbiAgfVxuXG5cbiAgLy9mdW5jaW9uIHF1ZSBoYWJpbGl0YSBlbCBjYW1wbyBkZSBpbmdyZXNhciBsYSBjbGF2ZVxuICBjb25zdCBzaWd1aWVudGVDYW1wbzEgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChkYXRvc1RyYW5zYWNjaW9uLnZhbG9yUmV0aXJhciA9PT0gMCkge1xuXG4gICAgICBndWFyZGFyQWxlcnRhcyh7XG4gICAgICAgIGVqZWN1dGFyQWxlcnRhOiB0cnVlLFxuICAgICAgICBtZW5zYWplOiAnRWwgdmFsb3IgYSByZXRpcmFyIGRlYmUgc2VyIG1heW9yIGEgY2VybydcbiAgICAgIH0pXG5cbiAgICAgIHJldHVyblxuXG4gICAgfSBlbHNlIGlmIChkYXRvc1VzdWFyaW8udmFsb3JDdWVudGEgPj0gZGF0b3NUcmFuc2FjY2lvbi52YWxvclJldGlyYXIpIHtcblxuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogZmFsc2UsXG4gICAgICAgIG1lbnNhamU6ICcnXG4gICAgICB9KVxuXG4gICAgICBndWFyZGFyVmVyaWZpY2FjaW9uKHtcbiAgICAgICAgLi4udmVyaWZpY2FjaW9uLFxuICAgICAgICB2ZXJpZmljYWNpb25DYW1wbzE6IHRydWVcbiAgICAgIH0pXG5cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGd1YXJkYXJBbGVydGFzKHtcbiAgICAgICAgZWplY3V0YXJBbGVydGE6IHRydWUsXG4gICAgICAgIG1lbnNhamU6ICdTYWxkbyBpbnN1ZmljZW50ZSdcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8vZnVuY2lvbiBxdWUgZ3VhcmRhIGxhIGNsYXZlIGVuIGVsIHN0YXRlXG4gIGNvbnN0IHZhbG9yQ2xhdmVPbkNoYW5nZSA9IGUgPT4ge1xuXG4gICAgZ3VhcmRhckRhdG9zVHJhbnNhY2Npb24oe1xuICAgICAgLi4uZGF0b3NUcmFuc2FjY2lvbixcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9XG4gICAgKVxuICB9XG5cbiAgLy9mdW5jaW9uIHF1ZSB2ZXJpZmljYSBxdWUgbGEgY2xhdmUgc2VhIGNvcnJlY3RhXG4gIGNvbnN0IGZvcm1PblN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKGRhdG9zVXN1YXJpby5jbGF2ZVVzdWFyaW8gPT09IGRhdG9zVHJhbnNhY2Npb24uY2xhdmUpIHtcblxuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogdHJ1ZSxcbiAgICAgICAgbWVuc2FqZTogJ1RyYW5zYWNjaW9uIGV4aXRvc2EgcmV0aXJlIHN1IGRpbmVybydcbiAgICAgIH0pXG5cbiAgICB9IGVsc2Uge1xuICAgICAgZ3VhcmRhckFsZXJ0YXMoe1xuICAgICAgICBlamVjdXRhckFsZXJ0YTogdHJ1ZSxcbiAgICAgICAgbWVuc2FqZTogJ2NsYXZlIGluY29ycmVjdGEnXG4gICAgICB9KVxuXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuXG4gIC8qIGNvbnN0IGZlY2hhTmFjaW1pZW50byA9IDE5OTVcbiAgY29uc3QgYcOxb0FjdHVhbCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBwcnVlYmEgPSBmYWxzZSAqL1xuXG4gIC8qIGNvbnNvbGUubG9nKGHDsW9BY3R1YWwgLSBmZWNoYU5hY2ltaWVudG8pICovXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtSmNLYjhxM2lxSjYxZ05WOUtHYjh0aFNzTmpwU0wwbjhQQVJuOUh1Wk9uSXhOMGhvUCtWbW1ER01ONXQ5VUowWlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01XCI+QmllbnZlbmlkYSBQcm9mZTwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5Fc3RhIGVzIHVuYSBzaW11bGFjaW9uIGRlIHVuYSBUcmFuc2FjY2lvbiBlbiB1biBjYWplcm8sIGVuIGVsIGN1YWwgc2UgZXZhbHVhbiBsb3MgY2FtcG9zIGRlIGxhIGVkYWQsIGVsIHZhbG9yIHF1ZSBzZSBxdWllcmEgcmV0aXJhciB5IHNpIGxhIGNsYXZlIGVzIGNvcnJlY3RhLjwvcD5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTVcIj5UaXBvIGRlIHZlcmlmaWNhY2lvbmVzIGltcGxlbWVudGFkYXM6PC9oMz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBiZC1oaWdobGlnaHQgbWItM1wiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0xXCI+U2UgdmVyaWZpY2EgcXVlIGVkYWQgdGllbmVzLjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTFcIj5FbCB2YWxvciBhIHJldGlyYXIgbm8gcHVlZGUgc2VyIGNlcm8uPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMVwiPkVsIHZhbG9yIHF1ZSBzZSBxdWllcmEgcmV0aXJhciBubyBwdWVkZSBzZXIgbWF5b3IgYWwgc2FsZG8uPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMVwiPlNpIGVsIHZhbG9yIHF1ZSBzZSBxdWllcmEgcmV0aXJhciBlcyBtZW5vciBhbCBzYWxkbyB5IG1heW9yIHF1ZSBjZXJvIHRlIGhhYmlsaXRhIGVsIHNpZ3VpZW50ZSBjYW1wby48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0xXCI+TGEgY2xhdmUgZGViZSBzZXIgbGEgY29ycmVjdGEuPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+U2FsZG8gYWN0dWFsIHtkYXRvc1VzdWFyaW8udmFsb3JDdWVudGF9PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+Y2xhdmUgZGUgbGEgdGFyamV0YSBlczogMTIzNDwvaDI+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgeyF2ZXJpZmljYWNpb24udmVyaWZpY2FjaW9uQ2FtcG8yID9cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbD5JbmdyZXNhIHR1IGZlY2hhIGRlIG5hY2ltaW5lbnRvPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT0nZmVjaGFOYWNpbWllbnRvJ1xuICAgICAgICAgICAgICB2YWx1ZT17ZGF0b3NVc3VhcmlvLmZlY2hhTmFjaW1pZW50b31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2VkYWRPbkNoYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17c2lndWllbnRlQ2FtcG8yfVxuICAgICAgICAgICAgPnNpZ3VpZW50ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDogPD5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1PblN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMz5UdSBlZGFkIGVzOiB7ZGF0b3NVc3VhcmlvLmVkYWR9PC9oMz5cbiAgICAgICAgICAgICAgICB7ZGF0b3NVc3VhcmlvLmVkYWQgPj0gMCA/IDxoMz5FcmVzIG1heW9yIGRlIGVkYWQ8L2gzPiA6IDxoMz5FcmVzIG1lbm9yIGRlIGVkYWQ8L2gzPn1cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW5ncmVzZSBlbCB2YWxvciBhIHJldGlyYXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT0ndmFsb3JSZXRpcmFyJ1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdG9zVHJhbnNhY2Npb24udmFsb3JSZXRpcmFyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbG9yUmV0aXJvT25DaGFnZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ3VpZW50ZUNhbXBvMX1cbiAgICAgICAgICAgICAgICA+c2lndWllbnRlPC9idXR0b24+XG5cblxuXG4gICAgICAgICAgICAgICAge3ZlcmlmaWNhY2lvbi52ZXJpZmljYWNpb25DYW1wbzFcbiAgICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW5ncmVzZSBsYSBjbGF2ZSBkZSBsYSB0YXJqZXRhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2NsYXZlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdG9zVHJhbnNhY2Npb24uY2xhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsb3JDbGF2ZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ2ZXJpZmljYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvPn1cbiAgICAgICAge2FsZXJ0YXMuZWplY3V0YXJBbGVydGEgPyA8aDIgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtbGlnaHQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj57YWxlcnRhcy5tZW5zYWplfTwvaDI+IDogbnVsbH1cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==