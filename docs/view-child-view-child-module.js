(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-child-view-child-module"],{

/***/ "AcTP":
/*!*****************************************************!*\
  !*** ./src/app/view-child/hijo2/hijo2.component.ts ***!
  \*****************************************************/
/*! exports provided: Hijo2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hijo2Component", function() { return Hijo2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




class Hijo2Component {
    constructor(router) {
        this.router = router;
    }
    goTo() {
        this.router.navigate(['operador-pluck']);
    }
}
Hijo2Component.ɵfac = function Hijo2Component_Factory(t) { return new (t || Hijo2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Hijo2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Hijo2Component, selectors: [["app-hijo2"]], decls: 5, vars: 0, consts: [[3, "click"]], template: function Hijo2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hijo2 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Hijo2Component_Template_button_click_3_listener() { return ctx.goTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "go to operator-cluck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaWpvMi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Hijo2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hijo2',
                templateUrl: './hijo2.component.html',
                styleUrls: ['./hijo2.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "kB9m":
/*!*************************************************!*\
  !*** ./src/app/view-child/view-child.module.ts ***!
  \*************************************************/
/*! exports provided: ViewChildModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewChildModule", function() { return ViewChildModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_child_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-child-routing.module */ "ypqN");




class ViewChildModule {
}
ViewChildModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewChildModule });
ViewChildModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewChildModule_Factory(t) { return new (t || ViewChildModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _view_child_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewChildRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewChildModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _view_child_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewChildRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewChildModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _view_child_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewChildRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ypqN":
/*!*********************************************************!*\
  !*** ./src/app/view-child/view-child-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewChildRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewChildRoutingModule", function() { return ViewChildRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _hijo_hijo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hijo/hijo.component */ "UAyU");
/* harmony import */ var _hijo2_hijo2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hijo2/hijo2.component */ "AcTP");
/* harmony import */ var _view_child_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-child.component */ "Ytv6");







const routes = [
    {
        path: '',
        component: _view_child_component__WEBPACK_IMPORTED_MODULE_4__["ViewChildComponent"],
        children: [
            {
                path: 'hijo',
                component: _hijo_hijo_component__WEBPACK_IMPORTED_MODULE_2__["HijoComponent"]
            },
            {
                path: 'hijo2',
                component: _hijo2_hijo2_component__WEBPACK_IMPORTED_MODULE_3__["Hijo2Component"]
            }
        ]
    }
];
class ViewChildRoutingModule {
}
ViewChildRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewChildRoutingModule });
ViewChildRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewChildRoutingModule_Factory(t) { return new (t || ViewChildRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewChildRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewChildRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=view-child-view-child-module.js.map