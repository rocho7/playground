(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["composition-composition-module"],{

/***/ "2sg+":
/*!****************************************************************************!*\
  !*** ./src/app/components/composition/product-list/product-list.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return ProductListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component */ "h+Dm");
/* harmony import */ var _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/ui/data-list/data-list.component */ "PRGc");
/* harmony import */ var _base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/ui/search-bar/search-bar.component */ "b0Xu");






class ProductListModule {
}
ProductListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductListModule });
ProductListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductListModule_Factory(t) { return new (t || ProductListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // ProductListRoutingModule,
            _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_3__["DataListComponentModule"],
            _base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponentModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductListModule, { declarations: [_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        // ProductListRoutingModule,
        _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_3__["DataListComponentModule"],
        _base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponentModule"]], exports: [_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // ProductListRoutingModule,
                    _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_3__["DataListComponentModule"],
                    _base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponentModule"],
                ],
                exports: [_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "4M/A":
/*!************************************************************************************!*\
  !*** ./src/app/components/composition/product-list/data-access/product.service.ts ***!
  \************************************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _base_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/list-page */ "DXDg");




class ProductService extends _base_list_page__WEBPACK_IMPORTED_MODULE_2__["AbstractListPageService"] {
    constructor() {
        super(...arguments);
        this.listData$ = this.getAll();
    }
    getAll() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([
            'Iron Throne',
            'Dragon Glass',
            'Arrow',
            'Leather',
            'Chain Mail',
            'Wine',
        ]);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return ɵProductService_BaseFactory(t || ProductService); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
const ɵProductService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ProductService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "DXDg":
/*!**********************************************************!*\
  !*** ./src/app/components/composition/base/list-page.ts ***!
  \**********************************************************/
/*! exports provided: AbstractListPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractListPageService", function() { return AbstractListPageService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


class AbstractListPageService {
    constructor() {
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        this.listSearch$ = this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((contents) => typeof contents === 'string'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(100));
    }
}


/***/ }),

/***/ "KmCC":
/*!**********************************************************************!*\
  !*** ./src/app/components/composition/composition-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CompositionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositionRoutingModule", function() { return CompositionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "nuZl");





const routes = [
    {
        path: '',
        component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"]
    }
];
class CompositionRoutingModule {
}
CompositionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompositionRoutingModule });
CompositionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompositionRoutingModule_Factory(t) { return new (t || CompositionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompositionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompositionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PRGc":
/*!*********************************************************************************!*\
  !*** ./src/app/components/composition/base/ui/data-list/data-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DataListComponent, DataListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataListComponent", function() { return DataListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataListComponentModule", function() { return DataListComponentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");





function DataListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1, "\n");
} }
class DataListComponent {
    constructor() {
        this.displayData = [];
    }
    set search(searchTerm) {
        this.displayData = this.data.filter((value) => !searchTerm
            || searchTerm === ''
            || value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }
}
DataListComponent.ɵfac = function DataListComponent_Factory(t) { return new (t || DataListComponent)(); };
DataListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataListComponent, selectors: [["app-data-list"]], inputs: { data: "data", search: "search" }, decls: 3, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function DataListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "data-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataListComponent_div_2_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-data-list',
                templateUrl: './data-list.component.html',
                styleUrls: ['./data-list.component.css'],
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
class DataListComponentModule {
}
DataListComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DataListComponentModule });
DataListComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DataListComponentModule_Factory(t) { return new (t || DataListComponentModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DataListComponentModule, { declarations: [DataListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [DataListComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataListComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [DataListComponent],
                exports: [DataListComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "b0Xu":
/*!***********************************************************************************!*\
  !*** ./src/app/components/composition/base/ui/search-bar/search-bar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SearchBarComponent, SearchBarComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponentModule", function() { return SearchBarComponentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SearchBarComponent {
    updateValue(event) {
        this.control.setValue(event.target.value);
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], inputs: { control: "control" }, decls: 3, vars: 0, consts: [["type", "text", "name", "search", "id", "search", 3, "change"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "search-bar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SearchBarComponent_Template_input_change_2_listener($event) { return ctx.updateValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.css'],
            }]
    }], null, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
class SearchBarComponentModule {
}
SearchBarComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SearchBarComponentModule });
SearchBarComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SearchBarComponentModule_Factory(t) { return new (t || SearchBarComponentModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchBarComponentModule, { declarations: [SearchBarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [SearchBarComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchBarComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [SearchBarComponent],
                exports: [SearchBarComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "b40+":
/*!******************************************************************************!*\
  !*** ./src/app/components/composition/employee-list/employee-list.module.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeeListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListModule", function() { return EmployeeListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-list-routing.module */ "kNxx");
/* harmony import */ var _employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-list.component */ "nuZl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/ui/data-list/data-list.component */ "PRGc");
/* harmony import */ var _base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/ui/search-bar/search-bar.component */ "b0Xu");
/* harmony import */ var _product_list_product_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-list/product-list.module */ "2sg+");









class EmployeeListModule {
}
EmployeeListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeListModule });
EmployeeListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeListModule_Factory(t) { return new (t || EmployeeListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _product_list_product_list_module__WEBPACK_IMPORTED_MODULE_7__["ProductListModule"],
            _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeListRoutingModule"],
            _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__["DataListComponentModule"],
            _base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponentModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeListModule, { declarations: [_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _product_list_product_list_module__WEBPACK_IMPORTED_MODULE_7__["ProductListModule"],
        _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeListRoutingModule"],
        _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__["DataListComponentModule"],
        _base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _product_list_product_list_module__WEBPACK_IMPORTED_MODULE_7__["ProductListModule"],
                    _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeListRoutingModule"],
                    _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__["DataListComponentModule"],
                    _base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponentModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "h+Dm":
/*!*******************************************************************************!*\
  !*** ./src/app/components/composition/product-list/product-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/list-page */ "DXDg");
/* harmony import */ var _data_access_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-access/product.service */ "4M/A");
/* harmony import */ var _base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/ui/search-bar/search-bar.component */ "b0Xu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/ui/data-list/data-list.component */ "PRGc");








function ProductListComponent_app_data_list_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-data-list", 2);
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", vm_r1.data)("search", vm_r1.search);
} }
const _c0 = function (a0, a1) { return { data: a0, search: a1 }; };
class ProductListComponent {
    constructor(listPage) {
        this.listPage = listPage;
    }
    ngOnInit() {
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_base_list_page__WEBPACK_IMPORTED_MODULE_1__["AbstractListPageService"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _base_list_page__WEBPACK_IMPORTED_MODULE_1__["AbstractListPageService"],
                useClass: _data_access_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
            }
        ])], decls: 6, vars: 9, consts: [[3, "control"], [3, "data", "search", 4, "ngIf"], [3, "data", "search"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-search-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductListComponent_app_data_list_3_Template, 1, 2, "app-data-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.listPage.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.listPage.listData$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.listPage.listSearch$)));
    } }, directives: [_base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__["SearchBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__["DataListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.css'],
                providers: [
                    {
                        provide: _base_list_page__WEBPACK_IMPORTED_MODULE_1__["AbstractListPageService"],
                        useClass: _data_access_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
                    }
                ]
            }]
    }], function () { return [{ type: _base_list_page__WEBPACK_IMPORTED_MODULE_1__["AbstractListPageService"] }]; }, null); })();


/***/ }),

/***/ "kNxx":
/*!**************************************************************************************!*\
  !*** ./src/app/components/composition/employee-list/employee-list-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: EmployeeListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListRoutingModule", function() { return EmployeeListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-list.component */ "nuZl");





const routes = [
    {
        path: '',
        component: _employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"]
    }
];
class EmployeeListRoutingModule {
}
EmployeeListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeListRoutingModule });
EmployeeListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeListRoutingModule_Factory(t) { return new (t || EmployeeListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nuZl":
/*!*********************************************************************************!*\
  !*** ./src/app/components/composition/employee-list/employee-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/list-page */ "DXDg");
/* harmony import */ var _data_access_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-access/employee.service */ "zWje");
/* harmony import */ var _base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/ui/search-bar/search-bar.component */ "b0Xu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-list/product-list.component */ "h+Dm");
/* harmony import */ var _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/ui/data-list/data-list.component */ "PRGc");









function EmployeeListComponent_app_data_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-data-list", 5);
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", vm_r1.data)("search", vm_r1.search);
} }
const _c0 = function (a0, a1) { return { data: a0, search: a1 }; };
class EmployeeListComponent {
    constructor(listPage) {
        this.listPage = listPage;
    }
}
EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) { return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_base_list_page__WEBPACK_IMPORTED_MODULE_1__["AbstractListPageService"])); };
EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeListComponent, selectors: [["app-employee-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _base_list_page__WEBPACK_IMPORTED_MODULE_1__["AbstractListPageService"],
                useClass: _data_access_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
            }
        ])], decls: 14, vars: 9, consts: [[1, "container"], ["href", "https://github.com/joshuamorony/composition-vs-inheritance/tree/service-composition-two/src"], ["href", "https://www.youtube.com/watch?v=rcDsRyVhcxY"], [3, "control"], [3, "data", "search", 4, "ngIf"], [3, "data", "search"]], template: function EmployeeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "employee-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "github project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-search-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmployeeListComponent_app_data_list_9_Template, 1, 2, "app-data-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-product-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.listPage.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, ctx.listPage.listData$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.listPage.listSearch$)));
    } }, directives: [_base_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__["SearchBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], _base_ui_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_6__["DataListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n  border-color: red;\r\n    border: 2px solid;\r\n    padding: 13px;\r\n    margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztBQUNmIiwiZmlsZSI6ImVtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-list',
                templateUrl: './employee-list.component.html',
                styleUrls: ['./employee-list.component.css'],
                providers: [
                    {
                        provide: _base_list_page__WEBPACK_IMPORTED_MODULE_1__["AbstractListPageService"],
                        useClass: _data_access_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
                    }
                ]
            }]
    }], function () { return [{ type: _base_list_page__WEBPACK_IMPORTED_MODULE_1__["AbstractListPageService"] }]; }, null); })();


/***/ }),

/***/ "ujL1":
/*!**************************************************************!*\
  !*** ./src/app/components/composition/composition.module.ts ***!
  \**************************************************************/
/*! exports provided: CompositionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositionModule", function() { return CompositionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _composition_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./composition-routing.module */ "KmCC");
/* harmony import */ var _employee_list_employee_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-list/employee-list.module */ "b40+");





class CompositionModule {
}
CompositionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompositionModule });
CompositionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompositionModule_Factory(t) { return new (t || CompositionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _employee_list_employee_list_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeListModule"],
            _composition_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompositionRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompositionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _employee_list_employee_list_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeListModule"],
        _composition_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompositionRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompositionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _employee_list_employee_list_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeListModule"],
                    _composition_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompositionRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zWje":
/*!**************************************************************************************!*\
  !*** ./src/app/components/composition/employee-list/data-access/employee.service.ts ***!
  \**************************************************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _base_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/list-page */ "DXDg");




class EmployeeService extends _base_list_page__WEBPACK_IMPORTED_MODULE_2__["AbstractListPageService"] {
    constructor() {
        super(...arguments);
        this.listData$ = this.getAll();
    }
    getAll() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(['employee 1', 'employee 2', 'employee 3', 'employee 4', 'employee 5',]);
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return ɵEmployeeService_BaseFactory(t || EmployeeService); };
EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: 'root' });
const ɵEmployeeService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EmployeeService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=composition-composition-module.js.map