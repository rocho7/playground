(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resolution-modifiers-resolution-modifiers-module"],{

/***/ "0ZQk":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/resolution-modifiers/resolution-modifiers.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ResolutionModifiersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolutionModifiersComponent", function() { return ResolutionModifiersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ResolutionModifiersComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResolutionModifiersComponent.ɵfac = function ResolutionModifiersComponent_Factory(t) { return new (t || ResolutionModifiersComponent)(); };
ResolutionModifiersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResolutionModifiersComponent, selectors: [["app-resolution-modifiers"]], decls: 40, vars: 0, consts: [["href", "https://www.youtube.com/watch?v=uVGnsmm9g-I"], ["href", "https://runebook.dev/es/docs/angular/guide/dependency-injection-in-action"]], template: function ResolutionModifiersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "resolution-modifiers!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Video Decoded Fronted Resolution modifiers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ejemplo Resolution modifiers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " @Optional() ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " constructor(@Optional() private readonly loggerService: LoggerService) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Esto se utiliza para prevenir que el servicio no haya sido encontrado en los componentes padres y produzca un error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "@Self() ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " constructor(@Self() private readonly loggerService: LoggerService) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Solo busca el servicio donde se ha implementado, no buscandolo en los componentes padres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Solucion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "  @Component(\n    selector: 'app-menu',\n    templateUrl: './menu.component.html',\n    styleUrls: ['./menu.component.css'],\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " providers: [LoggerService]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n  )\n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "@SkipSelf()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " constructor(@SkipSelf() private readonly loggerService: LoggerService) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Salta el servicio donde se ha implementado, buscandolo en los componentes padres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "@Host() ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Se utiliza en directivas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvbHV0aW9uLW1vZGlmaWVycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResolutionModifiersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resolution-modifiers',
                templateUrl: './resolution-modifiers.component.html',
                styleUrls: ['./resolution-modifiers.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QoYO":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/resolution-modifiers/resolution-modifiers.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ResolutionModifiersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolutionModifiersModule", function() { return ResolutionModifiersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _resolution_modifiers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolution-modifiers-routing.module */ "dLwz");
/* harmony import */ var _resolution_modifiers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolution-modifiers.component */ "0ZQk");





class ResolutionModifiersModule {
}
ResolutionModifiersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResolutionModifiersModule });
ResolutionModifiersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResolutionModifiersModule_Factory(t) { return new (t || ResolutionModifiersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _resolution_modifiers_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResolutionModifiersRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResolutionModifiersModule, { declarations: [_resolution_modifiers_component__WEBPACK_IMPORTED_MODULE_3__["ResolutionModifiersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _resolution_modifiers_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResolutionModifiersRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResolutionModifiersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_resolution_modifiers_component__WEBPACK_IMPORTED_MODULE_3__["ResolutionModifiersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _resolution_modifiers_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResolutionModifiersRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "dLwz":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/resolution-modifiers/resolution-modifiers-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ResolutionModifiersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolutionModifiersRoutingModule", function() { return ResolutionModifiersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resolution_modifiers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolution-modifiers.component */ "0ZQk");





const routes = [
    {
        path: '',
        component: _resolution_modifiers_component__WEBPACK_IMPORTED_MODULE_2__["ResolutionModifiersComponent"]
    }
];
class ResolutionModifiersRoutingModule {
}
ResolutionModifiersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResolutionModifiersRoutingModule });
ResolutionModifiersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResolutionModifiersRoutingModule_Factory(t) { return new (t || ResolutionModifiersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResolutionModifiersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResolutionModifiersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=resolution-modifiers-resolution-modifiers-module.js.map