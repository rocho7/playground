(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-ultimate-course-index-ultimate-course-index-module"],{

/***/ "4WWn":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/ultimate-course-index-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: UltimateCourseIndexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateCourseIndexRoutingModule", function() { return UltimateCourseIndexRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ultimate_course_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ultimate-course-index.component */ "IZQr");





const routes = [
    {
        path: "",
        component: _ultimate_course_index_component__WEBPACK_IMPORTED_MODULE_2__["UltimateCourseIndexComponent"],
    },
    {
        path: "angular-pro",
        loadChildren: () => __webpack_require__.e(/*! import() | angular-pro-angular-pro-module */ "angular-pro-angular-pro-module").then(__webpack_require__.bind(null, /*! ./angular-pro/angular-pro.module */ "jNCv")).then((m) => m.AngularProModule),
    },
    {
        path: "typescript-basic",
        loadChildren: () => __webpack_require__.e(/*! import() | typescript-basic-typescript-basic-module */ "typescript-basic-typescript-basic-module").then(__webpack_require__.bind(null, /*! ./typescript-basic/typescript-basic.module */ "9/er")).then((m) => m.TypescriptBasicModule),
    },
];
class UltimateCourseIndexRoutingModule {
}
UltimateCourseIndexRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UltimateCourseIndexRoutingModule });
UltimateCourseIndexRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UltimateCourseIndexRoutingModule_Factory(t) { return new (t || UltimateCourseIndexRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UltimateCourseIndexRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UltimateCourseIndexRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "IZQr":
/*!*************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/ultimate-course-index.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UltimateCourseIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateCourseIndexComponent", function() { return UltimateCourseIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




class UltimateCourseIndexComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goTo(navigateTo) {
        this.router.navigate(["ultimate", navigateTo]);
    }
}
UltimateCourseIndexComponent.ɵfac = function UltimateCourseIndexComponent_Factory(t) { return new (t || UltimateCourseIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UltimateCourseIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UltimateCourseIndexComponent, selectors: [["app-ultimate-course-index"]], decls: 6, vars: 0, consts: [["mat-flat-button", "", "color", "primary", 3, "click"]], template: function UltimateCourseIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ultimate-course-index works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UltimateCourseIndexComponent_Template_button_click_2_listener() { return ctx.goTo("angular-pro"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Angular PRO\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UltimateCourseIndexComponent_Template_button_click_4_listener() { return ctx.goTo("typescript-basic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " TypesScript Basic\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bHRpbWF0ZS1jb3Vyc2UtaW5kZXguY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UltimateCourseIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-ultimate-course-index",
                templateUrl: "./ultimate-course-index.component.html",
                styleUrls: ["./ultimate-course-index.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "mqNq":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/ultimate-course-index.module.ts ***!
  \**********************************************************************************/
/*! exports provided: UltimateCourseIndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateCourseIndexModule", function() { return UltimateCourseIndexModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ultimate_course_index_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ultimate-course-index-routing.module */ "4WWn");
/* harmony import */ var _ultimate_course_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ultimate-course-index.component */ "IZQr");





class UltimateCourseIndexModule {
}
UltimateCourseIndexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UltimateCourseIndexModule });
UltimateCourseIndexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UltimateCourseIndexModule_Factory(t) { return new (t || UltimateCourseIndexModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ultimate_course_index_routing_module__WEBPACK_IMPORTED_MODULE_2__["UltimateCourseIndexRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UltimateCourseIndexModule, { declarations: [_ultimate_course_index_component__WEBPACK_IMPORTED_MODULE_3__["UltimateCourseIndexComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ultimate_course_index_routing_module__WEBPACK_IMPORTED_MODULE_2__["UltimateCourseIndexRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UltimateCourseIndexModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ultimate_course_index_component__WEBPACK_IMPORTED_MODULE_3__["UltimateCourseIndexComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ultimate_course_index_routing_module__WEBPACK_IMPORTED_MODULE_2__["UltimateCourseIndexRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-ultimate-course-index-ultimate-course-index-module.js.map