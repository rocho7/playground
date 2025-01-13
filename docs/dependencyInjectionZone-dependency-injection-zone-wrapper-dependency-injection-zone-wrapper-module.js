(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dependencyInjectionZone-dependency-injection-zone-wrapper-dependency-injection-zone-wrapper-module"],{

/***/ "/kd7":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/dependencyInjectionZone/food-store/config.ts ***!
  \***********************************************************************************************************/
/*! exports provided: FOOD_STORE_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOD_STORE_CONFIG", function() { return FOOD_STORE_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const FOOD_STORE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("FOOD_STORE_CONFIG");


/***/ }),

/***/ "0yXV":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/dependencyInjectionZone/dependency-injection-zone-wrapper/dependency-injection-zone-wrapper.module.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: DependencyInjectionZoneWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyInjectionZoneWrapperModule", function() { return DependencyInjectionZoneWrapperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dependency_injection_zone_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependency-injection-zone-wrapper-routing.module */ "2dx+");
/* harmony import */ var _containers_food_viewer_food_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/food-viewer/food-viewer.component */ "SfW+");
/* harmony import */ var _dependency_injection_zone_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dependency-injection-zone-wrapper.component */ "zqbW");
/* harmony import */ var _containers_drinks_viewer_drinks_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/drinks-viewer/drinks-viewer.component */ "kU/Z");
/* harmony import */ var _food_store_food_store_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../food-store/food-store.module */ "v6ja");









class DependencyInjectionZoneWrapperModule {
}
DependencyInjectionZoneWrapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DependencyInjectionZoneWrapperModule });
DependencyInjectionZoneWrapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DependencyInjectionZoneWrapperModule_Factory(t) { return new (t || DependencyInjectionZoneWrapperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _food_store_food_store_module__WEBPACK_IMPORTED_MODULE_6__["FoodStoreModule"].forRoot({
                storeId: 10292,
                storeToken: "123abc",
            }),
            _dependency_injection_zone_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependencyInjectionZoneWrapperRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DependencyInjectionZoneWrapperModule, { declarations: [_dependency_injection_zone_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["DependencyInjectionZoneWrapperComponent"],
        _containers_food_viewer_food_viewer_component__WEBPACK_IMPORTED_MODULE_3__["FoodViewerComponent"],
        _containers_drinks_viewer_drinks_viewer_component__WEBPACK_IMPORTED_MODULE_5__["DrinksViewerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _food_store_food_store_module__WEBPACK_IMPORTED_MODULE_6__["FoodStoreModule"], _dependency_injection_zone_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependencyInjectionZoneWrapperRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DependencyInjectionZoneWrapperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _dependency_injection_zone_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["DependencyInjectionZoneWrapperComponent"],
                    _containers_food_viewer_food_viewer_component__WEBPACK_IMPORTED_MODULE_3__["FoodViewerComponent"],
                    _containers_drinks_viewer_drinks_viewer_component__WEBPACK_IMPORTED_MODULE_5__["DrinksViewerComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _food_store_food_store_module__WEBPACK_IMPORTED_MODULE_6__["FoodStoreModule"].forRoot({
                        storeId: 10292,
                        storeToken: "123abc",
                    }),
                    _dependency_injection_zone_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependencyInjectionZoneWrapperRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "2dx+":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/dependencyInjectionZone/dependency-injection-zone-wrapper/dependency-injection-zone-wrapper-routing.module.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: DependencyInjectionZoneWrapperRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyInjectionZoneWrapperRoutingModule", function() { return DependencyInjectionZoneWrapperRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dependency_injection_zone_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependency-injection-zone-wrapper.component */ "zqbW");





const routes = [
    {
        path: "",
        component: _dependency_injection_zone_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["DependencyInjectionZoneWrapperComponent"],
    },
];
class DependencyInjectionZoneWrapperRoutingModule {
}
DependencyInjectionZoneWrapperRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DependencyInjectionZoneWrapperRoutingModule });
DependencyInjectionZoneWrapperRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DependencyInjectionZoneWrapperRoutingModule_Factory(t) { return new (t || DependencyInjectionZoneWrapperRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DependencyInjectionZoneWrapperRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DependencyInjectionZoneWrapperRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "SfW+":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/dependencyInjectionZone/dependency-injection-zone-wrapper/containers/food-viewer/food-viewer.component.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: FoodViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodViewerComponent", function() { return FoodViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../food.service */ "t1ql");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function FoodViewerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r1 == null ? null : item_r1.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, item_r1 == null ? null : item_r1.price, "USD"), " ", item_r1 == null ? null : item_r1.location, "\n");
} }
class PizzaService {
}
class FoodViewerComponent {
    constructor(foodService) {
        this.foodService = foodService;
    }
    ngOnInit() {
        this.items = this.foodService.getFood();
    }
}
FoodViewerComponent.ɵfac = function FoodViewerComponent_Factory(t) { return new (t || FoodViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PizzaService)); };
FoodViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoodViewerComponent, selectors: [["app-food-viewer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: PizzaService,
                useExisting: _food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"],
            },
        ])], decls: 4, vars: 3, consts: [[4, "ngFor", "ngForOf"]], template: function FoodViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "food-viewer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FoodViewerComponent_div_2_Template, 3, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.items)) == null ? null : tmp_0_0.food);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb29kLXZpZXdlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-food-viewer",
                templateUrl: "./food-viewer.component.html",
                styleUrls: ["./food-viewer.component.css"],
                providers: [
                    {
                        provide: PizzaService,
                        useExisting: _food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"],
                    },
                ],
            }]
    }], function () { return [{ type: PizzaService }]; }, null); })();


/***/ }),

/***/ "kU/Z":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/dependencyInjectionZone/dependency-injection-zone-wrapper/containers/drinks-viewer/drinks-viewer.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: DrinksViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksViewerComponent", function() { return DrinksViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../food.service */ "t1ql");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DrinksViewerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r1 == null ? null : item_r1.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, item_r1 == null ? null : item_r1.price, "USD"), " ", item_r1 == null ? null : item_r1.location, "\n");
} }
class DrinkService {
}
class DrinksViewerComponent {
    constructor(foodService) {
        this.foodService = foodService;
    }
    ngOnInit() {
        this.items = this.foodService.getDrinks();
        //   .subscribe((res: any) => (this.items = res?.drinks));
        // console.log(
        //   "%cthis.items ",
        //   "color: red; display: block; width: 100%;",
        //   this.items
        // );
    }
}
DrinksViewerComponent.ɵfac = function DrinksViewerComponent_Factory(t) { return new (t || DrinksViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DrinkService)); };
DrinksViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinksViewerComponent, selectors: [["app-drinks-viewer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: DrinkService,
                useExisting: _food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"],
            },
        ])], decls: 4, vars: 3, consts: [[4, "ngFor", "ngForOf"]], template: function DrinksViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "drinks-viewer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DrinksViewerComponent_div_2_Template, 3, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.items)) == null ? null : tmp_0_0.drinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmlua3Mtdmlld2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrinksViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-drinks-viewer",
                templateUrl: "./drinks-viewer.component.html",
                styleUrls: ["./drinks-viewer.component.css"],
                providers: [
                    {
                        provide: DrinkService,
                        useExisting: _food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"],
                    },
                ],
            }]
    }], function () { return [{ type: DrinkService }]; }, null); })();


/***/ }),

/***/ "pBhB":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/dependencyInjectionZone/food-store/food-store.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: FoodStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodStoreService", function() { return FoodStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "/kd7");







class FoodStoreService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    getStore() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("%ccheck configuration ", "color: red; display: block; width: 100%;", (_a = this.config) === null || _a === void 0 ? void 0 : _a.storeId, (_b = this.config) === null || _b === void 0 ? void 0 : _b.storeToken);
            const url = "/assets/ultimate-course/angular-pro/dependency-injection/store.json";
            const response = yield this.http
                .get(url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                return res.filter((it) => { var _a; return (it === null || it === void 0 ? void 0 : it.storeId) === ((_a = this.config) === null || _a === void 0 ? void 0 : _a.storeId); });
            }))
                .toPromise();
            return response;
        });
    }
}
FoodStoreService.ɵfac = function FoodStoreService_Factory(t) { return new (t || FoodStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_config__WEBPACK_IMPORTED_MODULE_4__["FOOD_STORE_CONFIG"])); };
FoodStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FoodStoreService, factory: FoodStoreService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FoodStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_config__WEBPACK_IMPORTED_MODULE_4__["FOOD_STORE_CONFIG"]]
            }] }]; }, null); })();


/***/ }),

/***/ "t1ql":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/dependencyInjectionZone/dependency-injection-zone-wrapper/food.service.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "kYAY");





class FoodService {
    constructor(http, foodApiPath) {
        this.http = http;
        this.foodApiPath = foodApiPath;
    }
    getFood() {
        return this.http.get(`${this.foodApiPath}food.json`);
    }
    getDrinks() {
        return this.http.get(`${this.foodApiPath}drinks.json`);
    }
    getSides() {
        return this.http.get(`${this.foodApiPath}sides.json`);
    }
}
FoodService.ɵfac = function FoodService_Factory(t) { return new (t || FoodService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token__WEBPACK_IMPORTED_MODULE_2__["FOOD_API_TOKEN"])); };
FoodService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FoodService, factory: FoodService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FoodService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_token__WEBPACK_IMPORTED_MODULE_2__["FOOD_API_TOKEN"]]
            }] }]; }, null); })();


/***/ }),

/***/ "v6ja":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/dependencyInjectionZone/food-store/food-store.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: FOOD_PROVIDERS, FoodStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOD_PROVIDERS", function() { return FOOD_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodStoreModule", function() { return FoodStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "/kd7");
/* harmony import */ var _food_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-store.service */ "pBhB");





const FOOD_PROVIDERS = [_food_store_service__WEBPACK_IMPORTED_MODULE_3__["FoodStoreService"]];
class FoodStoreModule {
    static forRoot(config) {
        return {
            ngModule: FoodStoreModule,
            providers: [
                FOOD_PROVIDERS,
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_2__["FOOD_STORE_CONFIG"],
                    useValue: config,
                },
            ],
        };
    }
}
FoodStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FoodStoreModule });
FoodStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FoodStoreModule_Factory(t) { return new (t || FoodStoreModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FoodStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zqbW":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/dependencyInjectionZone/dependency-injection-zone-wrapper/dependency-injection-zone-wrapper.component.ts ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: DependencyInjectionZoneWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyInjectionZoneWrapperComponent", function() { return DependencyInjectionZoneWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _food_store_food_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food-store/food-store.service */ "pBhB");
/* harmony import */ var _containers_food_viewer_food_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/food-viewer/food-viewer.component */ "SfW+");
/* harmony import */ var _containers_drinks_viewer_drinks_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/drinks-viewer/drinks-viewer.component */ "kU/Z");






class DependencyInjectionZoneWrapperComponent {
    constructor(foodService) {
        this.foodService = foodService;
    }
    ngOnInit() {
        this.foodService.getStore().then((res) => {
            this.store = res[0];
        });
    }
}
DependencyInjectionZoneWrapperComponent.ɵfac = function DependencyInjectionZoneWrapperComponent_Factory(t) { return new (t || DependencyInjectionZoneWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_food_store_food_store_service__WEBPACK_IMPORTED_MODULE_1__["FoodStoreService"])); };
DependencyInjectionZoneWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DependencyInjectionZoneWrapperComponent, selectors: [["app-dependency-injection-zone-wrapper"]], decls: 12, vars: 2, consts: [[1, "row"], [1, "col-6"]], template: function DependencyInjectionZoneWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dependency-injection-zone-wrapper works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Using useExisting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-food-viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-drinks-viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Configuration NgModules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Food Store ", ctx.store == null ? null : ctx.store.storeId, ", location (", ctx.store == null ? null : ctx.store.location, ") ");
    } }, directives: [_containers_food_viewer_food_viewer_component__WEBPACK_IMPORTED_MODULE_2__["FoodViewerComponent"], _containers_drinks_viewer_drinks_viewer_component__WEBPACK_IMPORTED_MODULE_3__["DrinksViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBlbmRlbmN5LWluamVjdGlvbi16b25lLXdyYXBwZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DependencyInjectionZoneWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-dependency-injection-zone-wrapper",
                templateUrl: "./dependency-injection-zone-wrapper.component.html",
                styleUrls: ["./dependency-injection-zone-wrapper.component.css"],
            }]
    }], function () { return [{ type: _food_store_food_store_service__WEBPACK_IMPORTED_MODULE_1__["FoodStoreService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dependencyInjectionZone-dependency-injection-zone-wrapper-dependency-injection-zone-wrapper-module.js.map