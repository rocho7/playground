(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dependency-injection-dependency-injection-module"],{

/***/ "/fKK":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/resolution-modifiers/logger.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoggerService {
    constructor() { }
    log(message) {
        console.log('%c ', 'color: white; background-color: #007acc;', message);
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "A0JB":
/*!************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/menu.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_tokens_user_request_injection_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/tokens/user-request.injection-token */ "Vpe9");
/* harmony import */ var _resolution_modifiers_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolution-modifiers/logger.service */ "/fKK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MenuComponent_ul_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.name);
} }
class MenuComponent {
    constructor(loggerService, users, theme) {
        this.loggerService = loggerService;
        this.users = users;
        this.theme = theme;
        console.clear();
        if (this.loggerService) {
            this.loggerService.log('constructor init');
        }
        console.log('%ctheme ', 'background: green; color: white; display: block;', this.theme);
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_resolution_modifiers_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"], 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_tokens_user_request_injection_token__WEBPACK_IMPORTED_MODULE_1__["USER_REQUEST"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_tokens_user_request_injection_token__WEBPACK_IMPORTED_MODULE_1__["THEME_PROOF"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_resolution_modifiers_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])], decls: 22, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "dark"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "resolution-modifiers", 1, "nav-link"], ["routerLink", "dependency-providers", 1, "nav-link"], ["routerLink", "injection-token", 1, "nav-link"], [4, "ngFor", "ngForOf"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dependency Injection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Resolution Modifieres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dependency providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Injection token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Prueba de injection token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MenuComponent_ul_19_Template, 3, 1, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 1, ctx.users));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css'],
                providers: [_resolution_modifiers_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]]
            }]
    }], function () { return [{ type: _resolution_modifiers_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }, { type: Promise, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [src_app_core_tokens_user_request_injection_token__WEBPACK_IMPORTED_MODULE_1__["USER_REQUEST"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [src_app_core_tokens_user_request_injection_token__WEBPACK_IMPORTED_MODULE_1__["THEME_PROOF"]]
            }] }]; }, null); })();


/***/ }),

/***/ "NggD":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/menu-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function() { return MenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "A0JB");





const routes = [
    {
        path: '',
        component: _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        children: [
            {
                path: 'resolution-modifiers',
                loadChildren: () => __webpack_require__.e(/*! import() | resolution-modifiers-resolution-modifiers-module */ "resolution-modifiers-resolution-modifiers-module").then(__webpack_require__.bind(null, /*! ./resolution-modifiers/resolution-modifiers.module */ "QoYO")).then(m => m.ResolutionModifiersModule)
            },
            {
                path: 'dependency-providers',
                loadChildren: () => __webpack_require__.e(/*! import() | dependency-providers-dependency-providers-module */ "dependency-providers-dependency-providers-module").then(__webpack_require__.bind(null, /*! ./dependency-providers/dependency-providers.module */ "nFJx")).then(m => m.DependencyProvidersModule)
            },
            {
                path: 'injection-token',
                loadChildren: () => __webpack_require__.e(/*! import() | injection-token-injection-token-module */ "injection-token-injection-token-module").then(__webpack_require__.bind(null, /*! ./injection-token/injection-token.module */ "4pE+")).then(m => m.InjectionTokenModule)
            }
        ]
    }
];
class MenuRoutingModule {
}
MenuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuRoutingModule });
MenuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuRoutingModule_Factory(t) { return new (t || MenuRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PJGv":
/*!*********************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/menu.module.ts ***!
  \*********************************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-routing.module */ "NggD");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.component */ "A0JB");
/* harmony import */ var _injection_token_injection_token_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./injection-token/injection-token.component */ "dVsy");






class MenuModule {
}
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _injection_token_injection_token_component__WEBPACK_IMPORTED_MODULE_4__["InjectionTokenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _injection_token_injection_token_component__WEBPACK_IMPORTED_MODULE_4__["InjectionTokenComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Vpe9":
/*!*************************************************************!*\
  !*** ./src/app/core/tokens/user-request.injection-token.ts ***!
  \*************************************************************/
/*! exports provided: USER_REQUEST, THEME_PROOF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REQUEST", function() { return USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_PROOF", function() { return THEME_PROOF; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_components_dependency_injection_menu_injection_token_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/dependency-injection/menu/injection-token/service/user.service */ "yyTp");



function getUser() {
    return 'userService.getUsersRequest()';
}
const USER_REQUEST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('user.request', {
    factory() {
        const service = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(src_app_components_dependency_injection_menu_injection_token_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]);
        return service.getUsersRequest();
    }
});
const THEME_PROOF = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('active theme', {
    providedIn: 'root',
    factory() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('string');
    }
});


/***/ }),

/***/ "dVsy":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/injection-token/injection-token.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: InjectionTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectionTokenComponent", function() { return InjectionTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_tokens_user_request_injection_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/tokens/user-request.injection-token */ "Vpe9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function InjectionTokenComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.email);
} }
class InjectionTokenComponent {
    constructor(users) {
        this.users = users;
    }
    ngOnInit() {
        console.log('%cusers ', 'color: white; background-color: #007acc;', this.users);
    }
}
InjectionTokenComponent.ɵfac = function InjectionTokenComponent_Factory(t) { return new (t || InjectionTokenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_tokens_user_request_injection_token__WEBPACK_IMPORTED_MODULE_1__["USER_REQUEST"])); };
InjectionTokenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InjectionTokenComponent, selectors: [["app-injection-token"]], decls: 9, vars: 3, consts: [["href", "https://www.youtube.com/watch?v=P6m3H5jJMWk"], [4, "ngFor", "ngForOf"]], template: function InjectionTokenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "injection-token works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "InjectionToken es una variable para almacenar valores a nivel global");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You tube video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InjectionTokenComponent_ul_7_Template, 3, 1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.users));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmplY3Rpb24tdG9rZW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InjectionTokenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-injection-token',
                templateUrl: './injection-token.component.html',
                styleUrls: ['./injection-token.component.css']
            }]
    }], function () { return [{ type: Promise, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [src_app_core_tokens_user_request_injection_token__WEBPACK_IMPORTED_MODULE_1__["USER_REQUEST"]]
            }] }]; }, null); })();


/***/ }),

/***/ "eA/b":
/*!********************************************************************************!*\
  !*** ./src/app/components/dependency-injection/dependency-injection.module.ts ***!
  \********************************************************************************/
/*! exports provided: DependencyInjectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyInjectionModule", function() { return DependencyInjectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dependency_injection_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependency-injection-routing.module */ "xRV/");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.module */ "PJGv");





class DependencyInjectionModule {
}
DependencyInjectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DependencyInjectionModule });
DependencyInjectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DependencyInjectionModule_Factory(t) { return new (t || DependencyInjectionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__["MenuModule"],
            _dependency_injection_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependencyInjectionRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DependencyInjectionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__["MenuModule"],
        _dependency_injection_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependencyInjectionRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DependencyInjectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__["MenuModule"],
                    _dependency_injection_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependencyInjectionRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xRV/":
/*!****************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/dependency-injection-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: DependencyInjectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyInjectionRoutingModule", function() { return DependencyInjectionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "A0JB");





const routes = [
    {
        path: '',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]
    }
];
class DependencyInjectionRoutingModule {
}
DependencyInjectionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DependencyInjectionRoutingModule });
DependencyInjectionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DependencyInjectionRoutingModule_Factory(t) { return new (t || DependencyInjectionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DependencyInjectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DependencyInjectionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yyTp":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/injection-token/service/user.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");






class UserService {
    constructor(http) {
        this.http = http;
        this.theme = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.theme$ = this.theme.asObservable();
    }
    getUsersRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
        });
    }
    setTheme(theme) {
        this.theme.next(theme);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dependency-injection-dependency-injection-module.js.map