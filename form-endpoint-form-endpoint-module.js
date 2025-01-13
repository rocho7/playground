(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-endpoint-form-endpoint-module"],{

/***/ "DO/s":
/*!**************************************************************************!*\
  !*** ./src/app/components/form-endpoint/form-endpoint-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FormEndpointRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEndpointRoutingModule", function() { return FormEndpointRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_endpoint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-endpoint.component */ "Hpu4");





const routes = [
    {
        path: '',
        component: _form_endpoint_component__WEBPACK_IMPORTED_MODULE_2__["FormEndpointComponent"]
    }
];
class FormEndpointRoutingModule {
}
FormEndpointRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormEndpointRoutingModule });
FormEndpointRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormEndpointRoutingModule_Factory(t) { return new (t || FormEndpointRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormEndpointRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormEndpointRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Hpu4":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-endpoint/form-endpoint.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormEndpointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEndpointComponent", function() { return FormEndpointComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_swagger_apis_products_services_api_productsRest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/swagger-apis/products.services/api/productsRest.service */ "eEDv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/header/header.component */ "8rb8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







function FormEndpointComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.name);
} }
class FormEndpointComponent {
    constructor(productsRestService) {
        this.productsRestService = productsRestService;
        this.companies = [
            { "id": 0, "name": "Available" },
            { "id": 1, "name": "Ready" },
            { "id": 2, "name": "Started" }
        ];
    }
    ngOnInit() {
        // this.productsRestService.createProductUsingPOST({name: 'created from angular project'}).subscribe();
        this.getProducts();
    }
    getProducts() {
        this.productsRestService.getProductUsingGET().subscribe(products => {
            this.productList = products;
        });
    }
}
FormEndpointComponent.ɵfac = function FormEndpointComponent_Factory(t) { return new (t || FormEndpointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_swagger_apis_products_services_api_productsRest_service__WEBPACK_IMPORTED_MODULE_1__["ProductsRestService"])); };
FormEndpointComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormEndpointComponent, selectors: [["app-form-endpoint"]], decls: 15, vars: 2, consts: [[1, "container"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function FormEndpointComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Product description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormEndpointComponent_tr_8_Template, 5, 2, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWVuZHBvaW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormEndpointComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-endpoint',
                templateUrl: './form-endpoint.component.html',
                styleUrls: ['./form-endpoint.component.css']
            }]
    }], function () { return [{ type: src_app_services_swagger_apis_products_services_api_productsRest_service__WEBPACK_IMPORTED_MODULE_1__["ProductsRestService"] }]; }, null); })();


/***/ }),

/***/ "YUiR":
/*!******************************************************************!*\
  !*** ./src/app/components/form-endpoint/form-endpoint.module.ts ***!
  \******************************************************************/
/*! exports provided: FormEndpointModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEndpointModule", function() { return FormEndpointModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _form_endpoint_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-endpoint-routing.module */ "DO/s");
/* harmony import */ var _form_endpoint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-endpoint.component */ "Hpu4");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");






class FormEndpointModule {
}
FormEndpointModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormEndpointModule });
FormEndpointModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormEndpointModule_Factory(t) { return new (t || FormEndpointModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _form_endpoint_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormEndpointRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormEndpointModule, { declarations: [_form_endpoint_component__WEBPACK_IMPORTED_MODULE_3__["FormEndpointComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _form_endpoint_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormEndpointRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormEndpointModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_form_endpoint_component__WEBPACK_IMPORTED_MODULE_3__["FormEndpointComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _form_endpoint_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormEndpointRoutingModule"],
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=form-endpoint-form-endpoint-module.js.map