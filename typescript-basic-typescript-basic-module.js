(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["typescript-basic-typescript-basic-module"],{

/***/ "9/er":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/typescript-basic/typescript-basic.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: TypescriptBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypescriptBasicModule", function() { return TypescriptBasicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _typescript_basic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typescript-basic-routing.module */ "DLvD");
/* harmony import */ var _typescript_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typescript-basic.component */ "uwxR");





class TypescriptBasicModule {
}
TypescriptBasicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TypescriptBasicModule });
TypescriptBasicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TypescriptBasicModule_Factory(t) { return new (t || TypescriptBasicModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _typescript_basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypescriptBasicRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypescriptBasicModule, { declarations: [_typescript_basic_component__WEBPACK_IMPORTED_MODULE_3__["TypescriptBasicComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _typescript_basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypescriptBasicRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypescriptBasicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_typescript_basic_component__WEBPACK_IMPORTED_MODULE_3__["TypescriptBasicComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _typescript_basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypescriptBasicRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "DLvD":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/typescript-basic/typescript-basic-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: TypescriptBasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypescriptBasicRoutingModule", function() { return TypescriptBasicRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _typescript_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typescript-basic.component */ "uwxR");





const routes = [
    {
        path: "",
        component: _typescript_basic_component__WEBPACK_IMPORTED_MODULE_2__["TypescriptBasicComponent"],
    },
];
class TypescriptBasicRoutingModule {
}
TypescriptBasicRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TypescriptBasicRoutingModule });
TypescriptBasicRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TypescriptBasicRoutingModule_Factory(t) { return new (t || TypescriptBasicRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypescriptBasicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypescriptBasicRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "uwxR":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/typescript-basic/typescript-basic.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TypescriptBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypescriptBasicComponent", function() { return TypescriptBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TypescriptBasicComponent {
    constructor() { }
    ngOnInit() {
    }
}
TypescriptBasicComponent.ɵfac = function TypescriptBasicComponent_Factory(t) { return new (t || TypescriptBasicComponent)(); };
TypescriptBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypescriptBasicComponent, selectors: [["app-typescript-basic"]], decls: 2, vars: 0, template: function TypescriptBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "typescript-basic works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBlc2NyaXB0LWJhc2ljLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypescriptBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-typescript-basic',
                templateUrl: './typescript-basic.component.html',
                styleUrls: ['./typescript-basic.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=typescript-basic-typescript-basic-module.js.map