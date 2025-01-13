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
/* harmony import */ var _understanding_this_understanding_this_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./understanding-this/understanding-this.component */ "cVqL");






class TypescriptBasicModule {
}
TypescriptBasicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TypescriptBasicModule });
TypescriptBasicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TypescriptBasicModule_Factory(t) { return new (t || TypescriptBasicModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _typescript_basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypescriptBasicRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypescriptBasicModule, { declarations: [_typescript_basic_component__WEBPACK_IMPORTED_MODULE_3__["TypescriptBasicComponent"], _understanding_this_understanding_this_component__WEBPACK_IMPORTED_MODULE_4__["UnderstandingThisComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _typescript_basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypescriptBasicRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypescriptBasicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_typescript_basic_component__WEBPACK_IMPORTED_MODULE_3__["TypescriptBasicComponent"], _understanding_this_understanding_this_component__WEBPACK_IMPORTED_MODULE_4__["UnderstandingThisComponent"]],
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
        children: [
            {
                path: "understanding-this",
                loadChildren: () => __webpack_require__.e(/*! import() | understanding-this-understanding-this-module */ "understanding-this-understanding-this-module").then(__webpack_require__.bind(null, /*! ./understanding-this/understanding-this.module */ "0WzB")).then((m) => m.UnderstandingThisModule),
            },
        ],
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

/***/ "cVqL":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/typescript-basic/understanding-this/understanding-this.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: UnderstandingThisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderstandingThisComponent", function() { return UnderstandingThisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MyClass {
    myArrowFunctionMethod() {
        const foo = 123;
        console.log("%cmyArrowFunctionMethod OUT TIMEOUT", "color: white; background-color: #007acc;", this, foo);
        setTimeout(() => {
            console.log("%cmyArrowFunctionMethod IN TIMEOUT", "color: white; background-color: #007acc;", this, foo);
        }, 0);
    }
}
class UnderstandingThisComponent {
    constructor() { }
    ngOnInit() {
        this.myObj = {
            name: "foo",
            age: 33,
            greet: () => console.log("%cgreet method ", "color: red; display: block; width: 100%;", this),
        };
        this.myFunction("ABC", "arg");
        this.myFunction.call(this.myObj, "FROM", "CALL");
        this.myFunction.apply(this.myObj, ["FROM", "APPLY"]);
        const bindFunction = this.myFunction.bind(this.myObj);
        bindFunction("FROM", "BIND");
        bindFunction("FROM", "BIND_2");
        bindFunction("FROM", "BIND_3");
        this.arrowFunctionAndLexicalScope();
    }
    myFunction(text, arg) {
        console.log("%cmyFunction:: ", "background: green; color: white; display: block;", this, text, arg);
    }
    //! ARROW FUNCTIONS AND LEXICAL SCOPES
    arrowFunctionAndLexicalScope() {
        const instanceMyClass = new MyClass();
        instanceMyClass.myArrowFunctionMethod();
    }
}
UnderstandingThisComponent.ɵfac = function UnderstandingThisComponent_Factory(t) { return new (t || UnderstandingThisComponent)(); };
UnderstandingThisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnderstandingThisComponent, selectors: [["app-understanding-this"]], decls: 42, vars: 0, consts: [[1, "row"], [1, "col-6"], ["href", "https://app.ultimatecourses.com/course/typescript-masterclass/exploring-this-with-call-apply-and-bind"], ["href", "https://app.ultimatecourses.com/course/typescript-masterclass/arrow-functions-and-lexical-scope"]], template: function UnderstandingThisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Exploring this with .call, .apply and .bind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ultime course. Exploring \u201Cthis\u201D with .call, .apply and .bind video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The .call invokes the function and method changes the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " scope of the function and pass some arguments as a string, number, etc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ".apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The .apply invokes the function and method changes the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " scope of the function and pass some arguments as an array ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ".bind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The .bind doesn't invoke the function untill the function is invoked and method changes the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " scope of the function and pass some arguments as a string, number, etc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Arrow Functions and Lexical Scope");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Arrow Functions and Lexical Scope");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "function() (lexical scope)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " changes the scope");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "() => (Arrow Function)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " doesn't change the scope");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmRlcnN0YW5kaW5nLXRoaXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderstandingThisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-understanding-this",
                templateUrl: "./understanding-this.component.html",
                styleUrls: ["./understanding-this.component.css"],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class TypescriptBasicComponent {
    constructor() { }
    ngOnInit() {
    }
}
TypescriptBasicComponent.ɵfac = function TypescriptBasicComponent_Factory(t) { return new (t || TypescriptBasicComponent)(); };
TypescriptBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypescriptBasicComponent, selectors: [["app-typescript-basic"]], decls: 10, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "understanding-this", 1, "nav-link", "active"]], template: function TypescriptBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "typescript-basic works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Understanding this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBlc2NyaXB0LWJhc2ljLmNvbXBvbmVudC5jc3MifQ== */"] });
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