(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["observables-observables-module"],{

/***/ "SwV3":
/*!**************************************************************!*\
  !*** ./src/app/components/observables/observables.module.ts ***!
  \**************************************************************/
/*! exports provided: ObservablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservablesModule", function() { return ObservablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _observables_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observables-routing.module */ "a7xe");
/* harmony import */ var _observables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observables.component */ "gcdJ");





class ObservablesModule {
}
ObservablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ObservablesModule });
ObservablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ObservablesModule_Factory(t) { return new (t || ObservablesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _observables_routing_module__WEBPACK_IMPORTED_MODULE_2__["ObservablesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ObservablesModule, { declarations: [_observables_component__WEBPACK_IMPORTED_MODULE_3__["ObservablesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _observables_routing_module__WEBPACK_IMPORTED_MODULE_2__["ObservablesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_observables_component__WEBPACK_IMPORTED_MODULE_3__["ObservablesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _observables_routing_module__WEBPACK_IMPORTED_MODULE_2__["ObservablesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "a7xe":
/*!**********************************************************************!*\
  !*** ./src/app/components/observables/observables-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ObservablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservablesRoutingModule", function() { return ObservablesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _observables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observables.component */ "gcdJ");





const routes = [
    {
        path: '',
        component: _observables_component__WEBPACK_IMPORTED_MODULE_2__["ObservablesComponent"]
    }
];
class ObservablesRoutingModule {
}
ObservablesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ObservablesRoutingModule });
ObservablesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ObservablesRoutingModule_Factory(t) { return new (t || ObservablesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ObservablesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservablesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gcdJ":
/*!*****************************************************************!*\
  !*** ./src/app/components/observables/observables.component.ts ***!
  \*****************************************************************/
/*! exports provided: ObservablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservablesComponent", function() { return ObservablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/ajax */ "laIk");
/* harmony import */ var _services_obs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/obs.service */ "0StC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








class ObservablesComponent {
    constructor(obs) {
        this.obs = obs;
        this.numbers$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        this.myArray = [10, 20, 30];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        // const result = this.numbers$;
        // console.log(result);
        this.numbers$.subscribe(n => {
            if (n === 5) {
                this.myArray.push(40);
                console.log(this.myArray);
                this.subject.next(this.myArray);
            }
        });
        this.myArrayOf$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.myArray);
        this.myArrayOf$.subscribe(value => console.log(value));
        this.myArrayFrom$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.myArray);
        this.myArrayFrom$.subscribe(value => console.log(value));
        this.myArrayFrom$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(data => console.log("tap ", data)))
            .subscribe(data => console.log("tap 2", data));
        this.myArrayFrom$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data * 2))
            .subscribe(data => console.log("map ", data));
        //SUBJECT
        this.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(value => console.log("subject ", value)))
            .subscribe(value => console.log("subject 2 ", value));
        const nums = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(1, 2, 3, 4, 5);
        console.log("typeof ", typeof nums);
        const alCuadrado = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((n) => n % 2 === 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(n => n * n));
        const cuadrado = alCuadrado(nums);
        cuadrado.subscribe(x => console.log("cuadrado ", x));
        //*MERGEMAP NO IMPORTA EL ORDEN CONCATMAP IMPORTA EL ORDEN
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.obs.getGithub('1'), this.obs.getGithub('2'), this.obs.getGithub('3'));
        source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(v => v)).subscribe(result => console.log("ejempleo mergemap ", result));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this.obs.getGithub('1'), this.obs.getGithub('2'), this.obs.getGithub('3')).subscribe((x) => console.log("zip ", x));
        const c1 = this.obs.getResult(1);
        const c2 = this.obs.getResult(2);
        const newZip = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(c1, c2);
        newZip.subscribe(result => console.log("New zip ", result));
        //*MULTIPLES LLAMADAS
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.obs.getGithub('1'), this.obs.getGithub('2'), this.obs.getGithub('3')).subscribe((x) => console.log("forkjoin ", x));
        //* HACER UNA LLAMADA AJAX CON LA RESPUESTA DE OTRA LLAMADA AJAX.
        this.obs.getGithub('3').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((res) => Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"])(res.url))).subscribe((result) => {
            console.log("recibo respuesta ajax y realizo otra con la respuesta ", result);
        });
        source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(v => v)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((acc, curr) => [...acc, curr.url], [])).subscribe((result) => console.log("utilizando scan ", result));
    }
}
ObservablesComponent.ɵfac = function ObservablesComponent_Factory(t) { return new (t || ObservablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_obs_service__WEBPACK_IMPORTED_MODULE_4__["ObsService"])); };
ObservablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObservablesComponent, selectors: [["app-observables"]], decls: 4, vars: 3, template: function ObservablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.numbers$), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYnNlcnZhYmxlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservablesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-observables',
                templateUrl: './observables.component.html',
                styleUrls: ['./observables.component.css']
            }]
    }], function () { return [{ type: _services_obs_service__WEBPACK_IMPORTED_MODULE_4__["ObsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=observables-observables-module.js.map