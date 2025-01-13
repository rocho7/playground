(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["injection-token-injection-token-module"],{

/***/ "4pE+":
/*!************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/injection-token/injection-token.module.ts ***!
  \************************************************************************************************/
/*! exports provided: InjectionTokenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectionTokenModule", function() { return InjectionTokenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _injection_token_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injection-token-routing.module */ "BiPC");




class InjectionTokenModule {
}
InjectionTokenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InjectionTokenModule });
InjectionTokenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InjectionTokenModule_Factory(t) { return new (t || InjectionTokenModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _injection_token_routing_module__WEBPACK_IMPORTED_MODULE_2__["InjectionTokenRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InjectionTokenModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _injection_token_routing_module__WEBPACK_IMPORTED_MODULE_2__["InjectionTokenRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InjectionTokenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _injection_token_routing_module__WEBPACK_IMPORTED_MODULE_2__["InjectionTokenRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "BiPC":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/injection-token/injection-token-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: InjectionTokenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectionTokenRoutingModule", function() { return InjectionTokenRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _injection_token_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injection-token.component */ "dVsy");





const routes = [
    {
        path: '',
        component: _injection_token_component__WEBPACK_IMPORTED_MODULE_2__["InjectionTokenComponent"]
    }
];
class InjectionTokenRoutingModule {
}
InjectionTokenRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InjectionTokenRoutingModule });
InjectionTokenRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InjectionTokenRoutingModule_Factory(t) { return new (t || InjectionTokenRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InjectionTokenRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InjectionTokenRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=injection-token-injection-token-module.js.map