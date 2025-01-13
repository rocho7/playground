(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dependency-providers-dependency-providers-module"],{

/***/ "+mB8":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/useClassExample/services/example-two.service.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ExampleTwoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTwoService", function() { return ExampleTwoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExampleTwoService {
    constructor() {
        this.message = 'ExampleTwoService method';
    }
    get() {
        console.log(`%c${this.message} GET`, 'background: green; color: white; display: block;');
        return `${this.message} GET`;
    }
    ;
    post() {
        console.log(`%c${this.message} POST`, 'background: green; color: white; display: block;');
        return `${this.message} POST`;
    }
    ;
}
ExampleTwoService.ɵfac = function ExampleTwoService_Factory(t) { return new (t || ExampleTwoService)(); };
ExampleTwoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExampleTwoService, factory: ExampleTwoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTwoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5T7U":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/dependency-providers.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DependencyProvidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyProvidersComponent", function() { return DependencyProvidersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _experimental_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experimental-logger.service */ "XR8L");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.service */ "FXBs");
/* harmony import */ var _useFactoryExample_const_typeofService_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useFactoryExample/const/typeofService.const */ "M9Al");
/* harmony import */ var _useFactoryExample_services_example_factory_one_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useFactoryExample/services/example-factory-one.service */ "iMkq");
/* harmony import */ var _useFactoryExample_services_example_factory_two_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useFactoryExample/services/example-factory-two.service */ "iF4h");
/* harmony import */ var _useClassExample_use_class_use_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useClassExample/use-class/use-class.component */ "Yw4s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _useFactoryExample_use_factory_use_factory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useFactoryExample/use-factory/use-factory.component */ "hg73");













function DependencyProvidersComponent_app_use_factory_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-use-factory");
} }
class DependencyProvidersComponent {
    constructor(logger, serviceOne, serviceTwo) {
        this.logger = logger;
        this.serviceOne = serviceOne;
        this.serviceTwo = serviceTwo;
        this.serviceSelected = '';
    }
    ngOnInit() {
        this.logger.prefix = 'App';
        this.logger.log('dependency providers init');
    }
    destroyChildComponent() {
        this.serviceSelected = '';
    }
    buildChildComponent(service) {
        setTimeout(() => {
            this.serviceSelected = service;
        }, 1000);
    }
    changeService(service) {
        if (this.serviceSelected) {
            this.destroyChildComponent();
        }
        else {
        }
        if (service === 'one') {
            _useFactoryExample_const_typeofService_const__WEBPACK_IMPORTED_MODULE_3__["TYPE_OF_SERVICE"].one = true;
            this.serviceOne.typeService.next('one');
            // this.serviceOne.typeOfService(service);
        }
        else {
            _useFactoryExample_const_typeofService_const__WEBPACK_IMPORTED_MODULE_3__["TYPE_OF_SERVICE"].one = false;
            // TYPE_OF_SERVICE.one = false;
            this.serviceTwo.typeService.next('two');
        }
        this.buildChildComponent(service);
        // this.serviceTwo.typeOfService(service);
    }
}
DependencyProvidersComponent.ɵfac = function DependencyProvidersComponent_Factory(t) { return new (t || DependencyProvidersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_useFactoryExample_services_example_factory_one_service__WEBPACK_IMPORTED_MODULE_4__["ExampleFactoryOneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_useFactoryExample_services_example_factory_two_service__WEBPACK_IMPORTED_MODULE_5__["ExampleFactoryTwoService"])); };
DependencyProvidersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DependencyProvidersComponent, selectors: [["app-dependency-provider"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // {
            //   provide: LoggerService,
            //   useExisting: ExperimentalLoggerService
            // }
            {
                provide: _logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
                useFactory: () => {
                    const dev = Math.random() > 0.5;
                    console.log('%cuseFactory ', 'color: red; display: block; width: 100%;', dev);
                    if (dev) {
                        return new _logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]();
                    }
                    else {
                        return new _experimental_logger_service__WEBPACK_IMPORTED_MODULE_1__["ExperimentalLoggerService"]();
                    }
                },
                deps: []
            }
        ])], decls: 62, vars: 1, consts: [["href", "https://www.youtube.com/watch?v=T1xmCC4y3xo"], ["href", "https://runebook.dev/es/docs/angular/guide/dependency-injection-providers"], [1, "row"], [1, "col-6"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [4, "ngIf"]], template: function DependencyProvidersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dependency-providers!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Video Decoded Fronted Dependency providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ejemplo dependecy providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " useClass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " constructor(private readonly loggerService: LoggerService) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cuando Angular llame a LoggerService, este crear\u00E1 una instancia de ExperimentalLoggerService ( los dos servicios deben tener la misma interfaz). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Te permite crear una implementaci\u00F3n alternativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "      @Component(\n        selector: 'app-dependency-provider',\n        templateUrl: './dependency-providers.component.html',\n        providers: [\n            provide: LoggerService,\n            useClass: ExperimentalLoggerService\n        ]\n      )\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lo de arriba ser\u00EDa igual que:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "const loggerService = new ExperimentalLoggerService()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "genera una instancia con la clase(injector DI) que le pasas en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "useClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-use-class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " useFactory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " constructor(private readonly loggerService: LoggerService) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Se pueden utilizar diferentes servicios de acuerdo con la condici\u00F3n ( nos permitir\u00EDa carga un servicio din\u00E1micamente).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "La Factory nos devolver\u00EDa el servicio a utilizar dependiendo de la condici\u00F3n. Pudiendo pasar otro servicio como [deps]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Solucion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "        @Component(\n          selector: 'app-menu',\n          templateUrl: './menu.component.html',\n          styleUrls: ['./menu.component.css'],\n          provide: UserInfoService,\n            useFactory: () =>\n              const dev = Math.random() > 0.5;\n              console.log(dev);\n              if (dev) // abre llaves\n                return new LoggerService();\n              else //abre llaves\n                return new ExperimentalLoggerService();\n              //cierra llaver\n            //cierra llaves.\n            deps: [] // deps ser\u00E1n las dependencias que se pasen en useFactory:() como par\u00E1metro.\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ejemplo: deps: [http] useFactory:(http: HttpClient) =>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n        )\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DependencyProvidersComponent_Template_button_click_46_listener() { return ctx.changeService("one"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Call service one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DependencyProvidersComponent_Template_button_click_49_listener() { return ctx.changeService("two"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Call service two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, DependencyProvidersComponent_app_use_factory_51_Template, 1, 0, "app-use-factory", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " useExisting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Se utiliza como alias de un DI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " useValue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Simplemente se le pasa un valor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serviceSelected);
    } }, directives: [_useClassExample_use_class_use_class_component__WEBPACK_IMPORTED_MODULE_6__["UseClassComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _useFactoryExample_use_factory_use_factory_component__WEBPACK_IMPORTED_MODULE_8__["UseFactoryComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DependencyProvidersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dependency-provider',
                templateUrl: './dependency-providers.component.html',
                providers: [
                    // {
                    //   provide: LoggerService,
                    //   useExisting: ExperimentalLoggerService
                    // }
                    {
                        provide: _logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
                        useFactory: () => {
                            const dev = Math.random() > 0.5;
                            console.log('%cuseFactory ', 'color: red; display: block; width: 100%;', dev);
                            if (dev) {
                                return new _logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]();
                            }
                            else {
                                return new _experimental_logger_service__WEBPACK_IMPORTED_MODULE_1__["ExperimentalLoggerService"]();
                            }
                        },
                        deps: []
                    }
                ]
            }]
    }], function () { return [{ type: _logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }, { type: _useFactoryExample_services_example_factory_one_service__WEBPACK_IMPORTED_MODULE_4__["ExampleFactoryOneService"] }, { type: _useFactoryExample_services_example_factory_two_service__WEBPACK_IMPORTED_MODULE_5__["ExampleFactoryTwoService"] }]; }, null); })();


/***/ }),

/***/ "A73v":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/dependency-providers-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DependencyProvidersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyProvidersRoutingModule", function() { return DependencyProvidersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dependency_providers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependency-providers.component */ "5T7U");





const routes = [
    {
        path: '',
        component: _dependency_providers_component__WEBPACK_IMPORTED_MODULE_2__["DependencyProvidersComponent"]
    }
];
class DependencyProvidersRoutingModule {
}
DependencyProvidersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DependencyProvidersRoutingModule });
DependencyProvidersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DependencyProvidersRoutingModule_Factory(t) { return new (t || DependencyProvidersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DependencyProvidersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DependencyProvidersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "C3gx":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/useClassExample/services/example-one.service.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ExampleOneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleOneService", function() { return ExampleOneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExampleOneService {
    constructor() {
        this.message = 'ExampleOneService method';
    }
    get() {
        console.log(`%c${this.message} GET`, 'background: green; color: white; display: block;');
        return `${this.message} GET`;
    }
    ;
    post() {
        console.log(`%c${this.message} POST`, 'background: green; color: white; display: block;');
        return `${this.message} POST`;
    }
    ;
}
ExampleOneService.ɵfac = function ExampleOneService_Factory(t) { return new (t || ExampleOneService)(); };
ExampleOneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExampleOneService, factory: ExampleOneService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleOneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FXBs":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/logger.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoggerService {
    constructor() {
        this.prefix = "root";
    }
    log(message) {
        console.log('%cLOGGER SERVICE ', 'color: white; background-color: #007acc;', message);
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

/***/ "M9Al":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/useFactoryExample/const/typeofService.const.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: TYPE_OF_SERVICE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_OF_SERVICE", function() { return TYPE_OF_SERVICE; });
const TYPE_OF_SERVICE = {
    one: true
};


/***/ }),

/***/ "XR8L":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/experimental-logger.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ExperimentalLoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentalLoggerService", function() { return ExperimentalLoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExperimentalLoggerService {
    constructor() {
        this.prefix = "root";
    }
    log(message) {
        console.log('%c experimental SERVICE', 'color: white; background-color: #007acc;', this.prefix, message);
    }
    log2(message) {
        console.log('%c experimental', 'color: white; background-color: #007acc;', this.prefix, message);
    }
}
ExperimentalLoggerService.ɵfac = function ExperimentalLoggerService_Factory(t) { return new (t || ExperimentalLoggerService)(); };
ExperimentalLoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExperimentalLoggerService, factory: ExperimentalLoggerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperimentalLoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Yw4s":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/useClassExample/use-class/use-class.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: UseClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseClassComponent", function() { return UseClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_example_one_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/example-one.service */ "C3gx");
/* harmony import */ var _services_example_two_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/example-two.service */ "+mB8");





class UseClassComponent {
    constructor(exampleUseClass) {
        this.exampleUseClass = exampleUseClass;
    }
    ngOnInit() {
        this.messageGet = this.exampleUseClass.get();
        this.messagePost = this.exampleUseClass.post();
    }
}
UseClassComponent.ɵfac = function UseClassComponent_Factory(t) { return new (t || UseClassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_example_one_service__WEBPACK_IMPORTED_MODULE_1__["ExampleOneService"])); };
UseClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UseClassComponent, selectors: [["app-use-class"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _services_example_one_service__WEBPACK_IMPORTED_MODULE_1__["ExampleOneService"],
                useClass: _services_example_two_service__WEBPACK_IMPORTED_MODULE_2__["ExampleTwoService"]
            }])], decls: 7, vars: 2, template: function UseClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "use-class works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nFetching data from Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.messageGet, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.messagePost, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2UtY2xhc3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UseClassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-use-class',
                templateUrl: './use-class.component.html',
                styleUrls: ['./use-class.component.css'],
                providers: [{
                        provide: _services_example_one_service__WEBPACK_IMPORTED_MODULE_1__["ExampleOneService"],
                        useClass: _services_example_two_service__WEBPACK_IMPORTED_MODULE_2__["ExampleTwoService"]
                    }]
            }]
    }], function () { return [{ type: _services_example_one_service__WEBPACK_IMPORTED_MODULE_1__["ExampleOneService"] }]; }, null); })();


/***/ }),

/***/ "hg73":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/useFactoryExample/use-factory/use-factory.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: UseFactoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseFactoryComponent", function() { return UseFactoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _const_typeofService_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/typeofService.const */ "M9Al");
/* harmony import */ var _services_example_factory_one_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/example-factory-one.service */ "iMkq");
/* harmony import */ var _services_example_factory_two_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/example-factory-two.service */ "iF4h");






const environment = {
    pro: true
};
class UseFactoryComponent {
    constructor(serviceAny) {
        this.serviceAny = serviceAny;
    }
    ngOnInit() {
        this.messageService = this.serviceAny.get();
    }
    ngOnDestroy() {
        console.log('%cbye bye ', 'color: white; background-color: #007acc;');
    }
}
UseFactoryComponent.ɵfac = function UseFactoryComponent_Factory(t) { return new (t || UseFactoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_example_factory_one_service__WEBPACK_IMPORTED_MODULE_2__["ExampleFactoryOneService"])); };
UseFactoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UseFactoryComponent, selectors: [["app-use-factory"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: 'ENVIRONMENT', useValue: environment },
            { provide: 'typeOfService', useValue: _const_typeofService_const__WEBPACK_IMPORTED_MODULE_1__["TYPE_OF_SERVICE"] },
            {
                provide: _services_example_factory_one_service__WEBPACK_IMPORTED_MODULE_2__["ExampleFactoryOneService"],
                useFactory: (en, typeOfService) => {
                    console.log('%cENVIRONMENT', 'color: red; display: block; width: 100%;', en, typeOfService);
                    if (typeOfService === null || typeOfService === void 0 ? void 0 : typeOfService.one) {
                        return new _services_example_factory_one_service__WEBPACK_IMPORTED_MODULE_2__["ExampleFactoryOneService"];
                    }
                    else {
                        return new _services_example_factory_two_service__WEBPACK_IMPORTED_MODULE_3__["ExampleFactoryTwoService"];
                    }
                },
                deps: ['ENVIRONMENT', 'typeOfService']
            }
        ])], decls: 4, vars: 1, template: function UseFactoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "use-factory works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageService);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2UtZmFjdG9yeS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UseFactoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-use-factory',
                templateUrl: './use-factory.component.html',
                styleUrls: ['./use-factory.component.css'],
                providers: [
                    { provide: 'ENVIRONMENT', useValue: environment },
                    { provide: 'typeOfService', useValue: _const_typeofService_const__WEBPACK_IMPORTED_MODULE_1__["TYPE_OF_SERVICE"] },
                    {
                        provide: _services_example_factory_one_service__WEBPACK_IMPORTED_MODULE_2__["ExampleFactoryOneService"],
                        useFactory: (en, typeOfService) => {
                            console.log('%cENVIRONMENT', 'color: red; display: block; width: 100%;', en, typeOfService);
                            if (typeOfService === null || typeOfService === void 0 ? void 0 : typeOfService.one) {
                                return new _services_example_factory_one_service__WEBPACK_IMPORTED_MODULE_2__["ExampleFactoryOneService"];
                            }
                            else {
                                return new _services_example_factory_two_service__WEBPACK_IMPORTED_MODULE_3__["ExampleFactoryTwoService"];
                            }
                        },
                        deps: ['ENVIRONMENT', 'typeOfService']
                    }
                ],
            }]
    }], function () { return [{ type: _services_example_factory_one_service__WEBPACK_IMPORTED_MODULE_2__["ExampleFactoryOneService"] }]; }, null); })();


/***/ }),

/***/ "iF4h":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/useFactoryExample/services/example-factory-two.service.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ExampleFactoryTwoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleFactoryTwoService", function() { return ExampleFactoryTwoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ExampleFactoryTwoService {
    constructor() {
        this.message = 'ExampleFactoryTwoService method';
        this.typeService = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    typeOfService(service) {
        this.typeService.next(service);
    }
    ;
    get() {
        console.log(`%c${this.message} GET`, 'background: green; color: white; display: block;');
        return `${this.message} GET`;
    }
    ;
}
ExampleFactoryTwoService.ɵfac = function ExampleFactoryTwoService_Factory(t) { return new (t || ExampleFactoryTwoService)(); };
ExampleFactoryTwoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExampleFactoryTwoService, factory: ExampleFactoryTwoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleFactoryTwoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iMkq":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/useFactoryExample/services/example-factory-one.service.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ExampleFactoryOneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleFactoryOneService", function() { return ExampleFactoryOneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ExampleFactoryOneService {
    constructor() {
        this.message = 'ExampleFactoryOneService method';
        this.typeService = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    typeOfService(service) {
        this.typeService.next(service);
    }
    ;
    get() {
        console.log(`%c${this.message} GET`, 'background: green; color: white; display: block;');
        return `${this.message} GET`;
    }
    ;
}
ExampleFactoryOneService.ɵfac = function ExampleFactoryOneService_Factory(t) { return new (t || ExampleFactoryOneService)(); };
ExampleFactoryOneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExampleFactoryOneService, factory: ExampleFactoryOneService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleFactoryOneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nFJx":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/dependency-injection/menu/dependency-providers/dependency-providers.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DependencyProvidersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyProvidersModule", function() { return DependencyProvidersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dependency_providers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependency-providers-routing.module */ "A73v");
/* harmony import */ var _dependency_providers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dependency-providers.component */ "5T7U");
/* harmony import */ var _useClassExample_use_class_use_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useClassExample/use-class/use-class.component */ "Yw4s");
/* harmony import */ var _useFactoryExample_use_factory_use_factory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useFactoryExample/use-factory/use-factory.component */ "hg73");







class DependencyProvidersModule {
}
DependencyProvidersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DependencyProvidersModule });
DependencyProvidersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DependencyProvidersModule_Factory(t) { return new (t || DependencyProvidersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dependency_providers_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependencyProvidersRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DependencyProvidersModule, { declarations: [_dependency_providers_component__WEBPACK_IMPORTED_MODULE_3__["DependencyProvidersComponent"], _useClassExample_use_class_use_class_component__WEBPACK_IMPORTED_MODULE_4__["UseClassComponent"], _useFactoryExample_use_factory_use_factory_component__WEBPACK_IMPORTED_MODULE_5__["UseFactoryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dependency_providers_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependencyProvidersRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DependencyProvidersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dependency_providers_component__WEBPACK_IMPORTED_MODULE_3__["DependencyProvidersComponent"], _useClassExample_use_class_use_class_component__WEBPACK_IMPORTED_MODULE_4__["UseClassComponent"], _useFactoryExample_use_factory_use_factory_component__WEBPACK_IMPORTED_MODULE_5__["UseFactoryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dependency_providers_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependencyProvidersRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dependency-providers-dependency-providers-module.js.map