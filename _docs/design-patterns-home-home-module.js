(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["design-patterns-home-home-module"],{

/***/ "+nU6":
/*!***************************************************************************************!*\
  !*** ./src/app/components/design-patterns/widget-wrapper/widget-wrapper.component.ts ***!
  \***************************************************************************************/
/*! exports provided: WidgetWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetWrapperComponent", function() { return WidgetWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _injector_token_widget_injector_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector-token/widget-injector-token */ "jN5G");



const _c0 = ["*"];
class WidgetWrapperComponent {
    constructor() { }
    ngOnInit() {
        this.widget.load();
    }
    refresh() {
        this.widget.refresh();
    }
}
WidgetWrapperComponent.ɵfac = function WidgetWrapperComponent_Factory(t) { return new (t || WidgetWrapperComponent)(); };
WidgetWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetWrapperComponent, selectors: [["app-widget-wrapper"]], contentQueries: function WidgetWrapperComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _injector_token_widget_injector_token__WEBPACK_IMPORTED_MODULE_1__["WIDGET_INJECTOR"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.widget = _t.first);
    } }, ngContentSelectors: _c0, decls: 8, vars: 0, consts: [[1, ""], [1, "header"], [1, "btn-primary", 3, "click"], [1, "row", "content"]], template: function WidgetWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "widget-wrapper works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetWrapperComponent_Template_button_click_4_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtd3JhcHBlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-wrapper',
                templateUrl: './widget-wrapper.component.html',
                styleUrls: ['./widget-wrapper.component.css']
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_injector_token_widget_injector_token__WEBPACK_IMPORTED_MODULE_1__["WIDGET_INJECTOR"], { static: true }]
        }] }); })();


/***/ }),

/***/ "/uJB":
/*!******************************************************************************************!*\
  !*** ./src/app/components/design-patterns/data-grid-wrapper/data-grid-wrapper.module.ts ***!
  \******************************************************************************************/
/*! exports provided: DataGridWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridWrapperModule", function() { return DataGridWrapperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _data_grid_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-grid-wrapper.component */ "OCJm");
/* harmony import */ var _components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/data-grid/data-grid.component */ "tb82");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "mp8Q");
/* harmony import */ var _components_data_grid_data_grid_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/data-grid/data-grid.module */ "Wyit");
/* harmony import */ var _components_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.module */ "ak20");








class DataGridWrapperModule {
}
DataGridWrapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataGridWrapperModule });
DataGridWrapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataGridWrapperModule_Factory(t) { return new (t || DataGridWrapperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"],
            _components_data_grid_data_grid_module__WEBPACK_IMPORTED_MODULE_5__["DataGridModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataGridWrapperModule, { declarations: [_data_grid_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["DataGridWrapperComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"],
        _components_data_grid_data_grid_module__WEBPACK_IMPORTED_MODULE_5__["DataGridModule"]], exports: [_data_grid_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["DataGridWrapperComponent"],
        _components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_3__["DataGridComponent"],
        _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataGridWrapperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _data_grid_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["DataGridWrapperComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _components_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"],
                    _components_data_grid_data_grid_module__WEBPACK_IMPORTED_MODULE_5__["DataGridModule"]
                ],
                exports: [
                    _data_grid_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["DataGridWrapperComponent"],
                    _components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_3__["DataGridComponent"],
                    _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5XxC":
/*!*******************************************************************!*\
  !*** ./src/app/components/design-patterns/home/home.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_grid_wrapper_components_data_grid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-grid-wrapper/components/data-grid.service */ "QB4A");
/* harmony import */ var _data_grid_wrapper_components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-grid-wrapper/components/data-grid/data-grid.component */ "tb82");
/* harmony import */ var _data_grid_wrapper_data_grid_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-grid-wrapper/data-grid-wrapper.component */ "OCJm");
/* harmony import */ var _widget_wrapper_widget_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget-wrapper/widget-wrapper.component */ "+nU6");
/* harmony import */ var _widget_wrapper_widgets_velocity_widget_velocity_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widget-wrapper/widgets/velocity-widget/velocity-widget.component */ "Ryrf");
/* harmony import */ var _widget_wrapper_widgets_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widget-wrapper/widgets/weather-widget/weather-widget.component */ "e8PP");
/* harmony import */ var _data_grid_wrapper_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data-grid-wrapper/components/breadcrumb/breadcrumb.component */ "mp8Q");












class HomeComponent {
    constructor(dataGridService) {
        this.dataGridService = dataGridService;
        this.columnsDataGrid = [];
    }
    ngOnInit() {
        this.columnsDataGrid = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
    }
    ngAfterContentInit() {
    }
    ngAfterViewInit() {
        const data = this.dataGridWrapperComponent.dataGridComponent.sendRequestFind();
        console.log('%cdata ', 'background: green; color: white; display: block;', data);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_grid_wrapper_components_data_grid_service__WEBPACK_IMPORTED_MODULE_1__["DataGridService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], contentQueries: function HomeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _data_grid_wrapper_components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_2__["DataGridComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dataGridComponent = _t.first);
    } }, viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_data_grid_wrapper_data_grid_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["DataGridWrapperComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dataGridWrapperComponent = _t.first);
    } }, decls: 16, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-3"], [3, "service", "columns"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Example by using Injector Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-widget-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-velocity-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-widget-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-weather-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Example data grid wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-data-grid-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-data-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("service", ctx.dataGridService)("columns", ctx.columnsDataGrid);
    } }, directives: [_widget_wrapper_widget_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WidgetWrapperComponent"], _widget_wrapper_widgets_velocity_widget_velocity_widget_component__WEBPACK_IMPORTED_MODULE_5__["VelocityWidgetComponent"], _widget_wrapper_widgets_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_6__["WeatherWidgetComponent"], _data_grid_wrapper_data_grid_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["DataGridWrapperComponent"], _data_grid_wrapper_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _data_grid_wrapper_components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_2__["DataGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _data_grid_wrapper_components_data_grid_service__WEBPACK_IMPORTED_MODULE_1__["DataGridService"] }]; }, { dataGridWrapperComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_data_grid_wrapper_data_grid_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["DataGridWrapperComponent"]]
        }], dataGridComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_data_grid_wrapper_components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_2__["DataGridComponent"]]
        }] }); })();


/***/ }),

/***/ "OCJm":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/design-patterns/data-grid-wrapper/data-grid-wrapper.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DataGridWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridWrapperComponent", function() { return DataGridWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/data-grid/data-grid.component */ "tb82");



const _c0 = ["*"];
class DataGridWrapperComponent {
    constructor() {
        this.foo = "hola";
    }
    ngOnInit() {
    }
}
DataGridWrapperComponent.ɵfac = function DataGridWrapperComponent_Factory(t) { return new (t || DataGridWrapperComponent)(); };
DataGridWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataGridWrapperComponent, selectors: [["app-data-grid-wrapper"]], contentQueries: function DataGridWrapperComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_1__["DataGridComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dataGridComponent = _t.first);
    } }, ngContentSelectors: _c0, decls: 3, vars: 0, template: function DataGridWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "data-grid-wrapper works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWdyaWQtd3JhcHBlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataGridWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-grid-wrapper',
                templateUrl: './data-grid-wrapper.component.html',
                styleUrls: ['./data-grid-wrapper.component.css']
            }]
    }], function () { return []; }, { dataGridComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_1__["DataGridComponent"]]
        }] }); })();


/***/ }),

/***/ "QB4A":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/design-patterns/data-grid-wrapper/components/data-grid.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: DataGridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridService", function() { return DataGridService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataGridService {
    constructor() { }
    get() {
        return 'data from DataGridService';
    }
}
DataGridService.ɵfac = function DataGridService_Factory(t) { return new (t || DataGridService)(); };
DataGridService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataGridService, factory: DataGridService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataGridService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Qxq1":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/design-patterns/widget-wrapper/widgets/weather-widget/weather-widget.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: WeatherWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetModule", function() { return WeatherWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _weather_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-widget.component */ "e8PP");




class WeatherWidgetModule {
}
WeatherWidgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WeatherWidgetModule });
WeatherWidgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WeatherWidgetModule_Factory(t) { return new (t || WeatherWidgetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WeatherWidgetModule, { declarations: [_weather_widget_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWidgetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_weather_widget_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWidgetComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherWidgetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_weather_widget_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWidgetComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_weather_widget_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWidgetComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ryrf":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/design-patterns/widget-wrapper/widgets/velocity-widget/velocity-widget.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: VelocityWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VelocityWidgetComponent", function() { return VelocityWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _injector_token_widget_injector_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../injector-token/widget-injector-token */ "jN5G");



class VelocityWidgetComponent {
    constructor() { }
    ngOnInit() {
    }
    load() {
        console.log('%cVelocityComponent loading ', 'color: red; display: block; width: 100%;');
    }
    refresh() {
        console.log('%cVelocityComponent refresing ', 'color: white; background-color: #ff7acc;');
    }
    ;
}
VelocityWidgetComponent.ɵfac = function VelocityWidgetComponent_Factory(t) { return new (t || VelocityWidgetComponent)(); };
VelocityWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VelocityWidgetComponent, selectors: [["app-velocity-widget"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _injector_token_widget_injector_token__WEBPACK_IMPORTED_MODULE_1__["WIDGET_INJECTOR"],
                useExisting: VelocityWidgetComponent
            }
        ])], decls: 4, vars: 0, template: function VelocityWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "velocity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "-widget works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWxvY2l0eS13aWRnZXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VelocityWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-velocity-widget',
                templateUrl: './velocity-widget.component.html',
                styleUrls: ['./velocity-widget.component.css'],
                providers: [
                    {
                        provide: _injector_token_widget_injector_token__WEBPACK_IMPORTED_MODULE_1__["WIDGET_INJECTOR"],
                        useExisting: VelocityWidgetComponent
                    }
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TTf4":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/design-patterns/widget-wrapper/widgets/velocity-widget/velocity-widget.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: VelocityWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VelocityWidgetModule", function() { return VelocityWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _velocity_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./velocity-widget.component */ "Ryrf");




class VelocityWidgetModule {
}
VelocityWidgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VelocityWidgetModule });
VelocityWidgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VelocityWidgetModule_Factory(t) { return new (t || VelocityWidgetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VelocityWidgetModule, { declarations: [_velocity_widget_component__WEBPACK_IMPORTED_MODULE_2__["VelocityWidgetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_velocity_widget_component__WEBPACK_IMPORTED_MODULE_2__["VelocityWidgetComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VelocityWidgetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_velocity_widget_component__WEBPACK_IMPORTED_MODULE_2__["VelocityWidgetComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_velocity_widget_component__WEBPACK_IMPORTED_MODULE_2__["VelocityWidgetComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Wyit":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/design-patterns/data-grid-wrapper/components/data-grid/data-grid.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DataGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridModule", function() { return DataGridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _data_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-grid.component */ "tb82");





class DataGridModule {
}
DataGridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataGridModule });
DataGridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataGridModule_Factory(t) { return new (t || DataGridModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataGridModule, { declarations: [_data_grid_component__WEBPACK_IMPORTED_MODULE_3__["DataGridComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridModule"]], exports: [_data_grid_component__WEBPACK_IMPORTED_MODULE_3__["DataGridComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataGridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_data_grid_component__WEBPACK_IMPORTED_MODULE_3__["DataGridComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridModule"]
                ],
                exports: [_data_grid_component__WEBPACK_IMPORTED_MODULE_3__["DataGridComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ak20":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/design-patterns/data-grid-wrapper/components/breadcrumb/breadcrumb.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb.component */ "mp8Q");




class BreadcrumbModule {
}
BreadcrumbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BreadcrumbModule, { declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "e8PP":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/design-patterns/widget-wrapper/widgets/weather-widget/weather-widget.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: WeatherWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetComponent", function() { return WeatherWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _injector_token_widget_injector_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../injector-token/widget-injector-token */ "jN5G");



class WeatherWidgetComponent {
    constructor() { }
    ngOnInit() {
    }
    load() {
        console.log('%cWeatherWidgetComponent loading ', 'color: red; display: block; width: 100%;');
    }
    refresh() {
        console.log('%cWeatherWidgetComponent refresing ', 'color: white; background-color: #ff7acc;');
    }
    ;
}
WeatherWidgetComponent.ɵfac = function WeatherWidgetComponent_Factory(t) { return new (t || WeatherWidgetComponent)(); };
WeatherWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherWidgetComponent, selectors: [["app-weather-widget"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _injector_token_widget_injector_token__WEBPACK_IMPORTED_MODULE_1__["WIDGET_INJECTOR"],
                useExisting: WeatherWidgetComponent
            }
        ])], decls: 4, vars: 0, template: function WeatherWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "weather");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "-widget works2!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWF0aGVyLXdpZGdldC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-widget',
                templateUrl: './weather-widget.component.html',
                styleUrls: ['./weather-widget.component.css'],
                providers: [
                    {
                        provide: _injector_token_widget_injector_token__WEBPACK_IMPORTED_MODULE_1__["WIDGET_INJECTOR"],
                        useExisting: WeatherWidgetComponent
                    }
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jN5G":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/design-patterns/widget-wrapper/injector-token/widget-injector-token.ts ***!
  \***************************************************************************************************/
/*! exports provided: WIDGET_INJECTOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDGET_INJECTOR", function() { return WIDGET_INJECTOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const WIDGET_INJECTOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('widget');


/***/ }),

/***/ "mp8Q":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/design-patterns/data-grid-wrapper/components/breadcrumb/breadcrumb.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BreadcrumbComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 2, vars: 0, template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "breadcrumb works2!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tb82":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/design-patterns/data-grid-wrapper/components/data-grid/data-grid.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: Customer, DataGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridComponent", function() { return DataGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "384S");



class Customer {
}
class DataGridComponent {
    constructor() {
        this.customers = [{
                ID: 1,
                CompanyName: 'Super Mart of the West',
                Address: '702 SW 8th Street',
                City: 'Bentonville',
                State: 'Arkansas',
                Zipcode: 72716,
                Phone: '(800) 555-2797',
                Fax: '(800) 555-2171',
                Website: 'http://www.nowebsitesupermart.com',
            }, {
                ID: 2,
                CompanyName: 'Electronics Depot',
                Address: '2455 Paces Ferry Road NW',
                City: 'Atlanta',
                State: 'Georgia',
                Zipcode: 30339,
                Phone: '(800) 595-3232',
                Fax: '(800) 595-3231',
                Website: 'http://www.nowebsitedepot.com',
            }, {
                ID: 3,
                CompanyName: 'K&S Music',
                Address: '1000 Nicllet Mall',
                City: 'Minneapolis',
                State: 'Minnesota',
                Zipcode: 55403,
                Phone: '(612) 304-6073',
                Fax: '(612) 304-6074',
                Website: 'http://www.nowebsitemusic.com',
            }, {
                ID: 4,
                CompanyName: "Tom's Club",
                Address: '999 Lake Drive',
                City: 'Issaquah',
                State: 'Washington',
                Zipcode: 98027,
                Phone: '(800) 955-2292',
                Fax: '(800) 955-2293',
                Website: 'http://www.nowebsitetomsclub.com',
            }, {
                ID: 5,
                CompanyName: 'E-Mart',
                Address: '3333 Beverly Rd',
                City: 'Hoffman Estates',
                State: 'Illinois',
                Zipcode: 60179,
                Phone: '(847) 286-2500',
                Fax: '(847) 286-2501',
                Website: 'http://www.nowebsiteemart.com',
            }, {
                ID: 6,
                CompanyName: 'Walters',
                Address: '200 Wilmot Rd',
                City: 'Deerfield',
                State: 'Illinois',
                Zipcode: 60015,
                Phone: '(847) 940-2500',
                Fax: '(847) 940-2501',
                Website: 'http://www.nowebsitewalters.com',
            }, {
                ID: 7,
                CompanyName: 'StereoShack',
                Address: '400 Commerce S',
                City: 'Fort Worth',
                State: 'Texas',
                Zipcode: 76102,
                Phone: '(817) 820-0741',
                Fax: '(817) 820-0742',
                Website: 'http://www.nowebsiteshack.com',
            }, {
                ID: 8,
                CompanyName: 'Circuit Town',
                Address: '2200 Kensington Court',
                City: 'Oak Brook',
                State: 'Illinois',
                Zipcode: 60523,
                Phone: '(800) 955-2929',
                Fax: '(800) 955-9392',
                Website: 'http://www.nowebsitecircuittown.com',
            }, {
                ID: 9,
                CompanyName: 'Premier Buy',
                Address: '7601 Penn Avenue South',
                City: 'Richfield',
                State: 'Minnesota',
                Zipcode: 55423,
                Phone: '(612) 291-1000',
                Fax: '(612) 291-2001',
                Website: 'http://www.nowebsitepremierbuy.com',
            }, {
                ID: 10,
                CompanyName: 'ElectrixMax',
                Address: '263 Shuman Blvd',
                City: 'Naperville',
                State: 'Illinois',
                Zipcode: 60563,
                Phone: '(630) 438-7800',
                Fax: '(630) 438-7801',
                Website: 'http://www.nowebsiteelectrixmax.com',
            }, {
                ID: 11,
                CompanyName: 'Video Emporium',
                Address: '1201 Elm Street',
                City: 'Dallas',
                State: 'Texas',
                Zipcode: 75270,
                Phone: '(214) 854-3000',
                Fax: '(214) 854-3001',
                Website: 'http://www.nowebsitevideoemporium.com',
            }, {
                ID: 12,
                CompanyName: 'Screen Shop',
                Address: '1000 Lowes Blvd',
                City: 'Mooresville',
                State: 'North Carolina',
                Zipcode: 28117,
                Phone: '(800) 445-6937',
                Fax: '(800) 445-6938',
                Website: 'http://www.nowebsitescreenshop.com',
            }];
        this.customizeColumns = this.customizeColumns.bind(this);
    }
    ngOnInit() {
    }
    customizeColumns(columns) {
        const custom = ['paco'];
        if (this.customers) {
            columns.forEach((column, index) => {
                if (Object.keys(this.customers[0]).includes(column === null || column === void 0 ? void 0 : column.dataField)) {
                    column.caption = custom[index];
                }
            });
        }
        console.log('%ccolumns ', 'color: white; background-color: #007acc;', columns);
    }
    sendRequestFind() {
        return this.service.get();
    }
}
DataGridComponent.ɵfac = function DataGridComponent_Factory(t) { return new (t || DataGridComponent)(); };
DataGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataGridComponent, selectors: [["app-data-grid"]], inputs: { columns: "columns", service: "service" }, decls: 3, vars: 4, consts: [["id", "gridContainer", "keyExpr", "ID", 3, "dataSource", "columns", "customizeColumns", "showBorders"]], template: function DataGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "data-grid works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dx-data-grid", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.customers)("columns", ctx.columns)("customizeColumns", ctx.customizeColumns)("showBorders", true);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWdyaWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-grid',
                templateUrl: './data-grid.component.html',
                styleUrls: ['./data-grid.component.css']
            }]
    }], function () { return []; }, { columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], service: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "usSG":
/*!************************************************************************************!*\
  !*** ./src/app/components/design-patterns/widget-wrapper/widget-wrapper.module.ts ***!
  \************************************************************************************/
/*! exports provided: WidgetWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetWrapperModule", function() { return WidgetWrapperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widget_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget-wrapper.component */ "+nU6");




class WidgetWrapperModule {
}
WidgetWrapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetWrapperModule });
WidgetWrapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetWrapperModule_Factory(t) { return new (t || WidgetWrapperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetWrapperModule, { declarations: [_widget_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WidgetWrapperComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_widget_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WidgetWrapperComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetWrapperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_widget_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WidgetWrapperComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_widget_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WidgetWrapperComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vSp9":
/*!************************************************************************!*\
  !*** ./src/app/components/design-patterns/home/home-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "5XxC");





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xBZ+":
/*!****************************************************************!*\
  !*** ./src/app/components/design-patterns/home/home.module.ts ***!
  \****************************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "vSp9");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "5XxC");
/* harmony import */ var _widget_wrapper_widget_wrapper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget-wrapper/widget-wrapper.module */ "usSG");
/* harmony import */ var _widget_wrapper_widgets_velocity_widget_velocity_widget_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widget-wrapper/widgets/velocity-widget/velocity-widget.module */ "TTf4");
/* harmony import */ var _widget_wrapper_widgets_weather_widget_weather_widget_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widget-wrapper/widgets/weather-widget/weather-widget.module */ "Qxq1");
/* harmony import */ var _data_grid_wrapper_data_grid_wrapper_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data-grid-wrapper/data-grid-wrapper.module */ "/uJB");









class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _widget_wrapper_widget_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["WidgetWrapperModule"],
            _widget_wrapper_widgets_velocity_widget_velocity_widget_module__WEBPACK_IMPORTED_MODULE_5__["VelocityWidgetModule"],
            _widget_wrapper_widgets_weather_widget_weather_widget_module__WEBPACK_IMPORTED_MODULE_6__["WeatherWidgetModule"],
            _data_grid_wrapper_data_grid_wrapper_module__WEBPACK_IMPORTED_MODULE_7__["DataGridWrapperModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _widget_wrapper_widget_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["WidgetWrapperModule"],
        _widget_wrapper_widgets_velocity_widget_velocity_widget_module__WEBPACK_IMPORTED_MODULE_5__["VelocityWidgetModule"],
        _widget_wrapper_widgets_weather_widget_weather_widget_module__WEBPACK_IMPORTED_MODULE_6__["WeatherWidgetModule"],
        _data_grid_wrapper_data_grid_wrapper_module__WEBPACK_IMPORTED_MODULE_7__["DataGridWrapperModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _widget_wrapper_widget_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["WidgetWrapperModule"],
                    _widget_wrapper_widgets_velocity_widget_velocity_widget_module__WEBPACK_IMPORTED_MODULE_5__["VelocityWidgetModule"],
                    _widget_wrapper_widgets_weather_widget_weather_widget_module__WEBPACK_IMPORTED_MODULE_6__["WeatherWidgetModule"],
                    _data_grid_wrapper_data_grid_wrapper_module__WEBPACK_IMPORTED_MODULE_7__["DataGridWrapperModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=design-patterns-home-home-module.js.map