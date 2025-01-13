(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["understanding-this-understanding-this-module"],{

/***/ "0WzB":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/typescript-basic/understanding-this/understanding-this.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: UnderstandingThisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderstandingThisModule", function() { return UnderstandingThisModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _understanding_this_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./understanding-this-routing.module */ "7UL5");




class UnderstandingThisModule {
}
UnderstandingThisModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnderstandingThisModule });
UnderstandingThisModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnderstandingThisModule_Factory(t) { return new (t || UnderstandingThisModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _understanding_this_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnderstandingThisRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnderstandingThisModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _understanding_this_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnderstandingThisRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderstandingThisModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _understanding_this_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnderstandingThisRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "7UL5":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/typescript-basic/understanding-this/understanding-this-routing.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: UnderstandingThisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderstandingThisRoutingModule", function() { return UnderstandingThisRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _understanding_this_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./understanding-this.component */ "cVqL");





const routes = [
    {
        path: "",
        component: _understanding_this_component__WEBPACK_IMPORTED_MODULE_2__["UnderstandingThisComponent"],
    },
];
class UnderstandingThisRoutingModule {
}
UnderstandingThisRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnderstandingThisRoutingModule });
UnderstandingThisRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnderstandingThisRoutingModule_Factory(t) { return new (t || UnderstandingThisRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnderstandingThisRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderstandingThisRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=understanding-this-understanding-this-module.js.map