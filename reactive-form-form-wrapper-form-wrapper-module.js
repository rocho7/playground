(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reactive-form-form-wrapper-form-wrapper-module"],{

/***/ "38mF":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/form-wrapper/components/stock-selector/stock-selector.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: StockSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockSelectorComponent", function() { return StockSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _stock_counter_stock_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stock-counter/stock-counter.component */ "fYMp");







function StockSelectorComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r2.name);
} }
function StockSelectorComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item already exists in the stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StockSelectorComponent {
    constructor() {
        this.added = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    get notSelected() {
        var _a;
        return !((_a = this.parent.get("selector.product_id")) === null || _a === void 0 ? void 0 : _a.value);
    }
    get stockExists() {
        var _a;
        return (this.parent.hasError("stockExists") && ((_a = this.parent.get("selector.product_id")) === null || _a === void 0 ? void 0 : _a.dirty));
    }
    onAdd() {
        var _a, _b;
        this.added.emit((_a = this.parent.get("selector")) === null || _a === void 0 ? void 0 : _a.value);
        (_b = this.parent.get("selector")) === null || _b === void 0 ? void 0 : _b.reset({
            product_id: "",
            quantity: 10,
        });
    }
}
StockSelectorComponent.ɵfac = function StockSelectorComponent_Factory(t) { return new (t || StockSelectorComponent)(); };
StockSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockSelectorComponent, selectors: [["app-stock-selector"]], inputs: { parent: "parent", products: "products" }, outputs: { added: "added" }, decls: 12, vars: 7, consts: [[1, "stock-selector", 3, "formGroup"], ["formGroupName", "selector"], ["formControlName", "product_id"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "quantity", 3, "step", "min", "max"], ["type", "button", 3, "disabled", "click"], ["class", "stock-selector__error", 4, "ngIf"], [3, "value"], [1, "stock-selector__error"]], template: function StockSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stock-selector works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StockSelectorComponent_option_7_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-stock-counter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockSelectorComponent_Template_button_click_9_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Add stock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StockSelectorComponent_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", 10)("min", 10)("max", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.stockExists || ctx.notSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stockExists);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _stock_counter_stock_counter_component__WEBPACK_IMPORTED_MODULE_3__["StockCounterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".stock-selector[_ngcontent-%COMP%] {\n  padding: 0 0 20px;\n  margin: 0 0 20px;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n}\n.stock-selector__error[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #b52d30;\n  color: #fff;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-radius: 3px;\n  left: 0;\n  bottom: -10px;\n  line-height: 1;\n  padding: 6px 10px;\n}\n.stock-selector__error[_ngcontent-%COMP%]:before {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 5px 5px 5px;\n  border-color: transparent transparent #b52d30 transparent;\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: -5px;\n  left: 10px;\n}\n.stock-selector[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.stock-selector[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1 0;\n}\n.stock-selector[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 100px;\n  margin-left: 30px;\n  background-color: #9e61c8;\n  color: #fff;\n}\n.stock-selector[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   stock-counter[_ngcontent-%COMP%] {\n  flex: 0 0 50px;\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0b2NrLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNJO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseURBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDTjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFESjtBQUdJO0VBQ0UsU0FBQTtBQUROO0FBR0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFETjtBQUdJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBRE4iLCJmaWxlIjoic3RvY2stc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvY2stc2VsZWN0b3Ige1xyXG4gIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gIG1hcmdpbjogMCAwIDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmX19lcnJvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjUyZDMwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCA1cHggNXB4IDVweDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYjUyZDMwIHRyYW5zcGFyZW50O1xyXG4gICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICBmbGV4OiAxIDA7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmbGV4OiAwIDAgMTAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU2MWM4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIHN0b2NrLWNvdW50ZXIge1xyXG4gICAgICBmbGV4OiAwIDAgNTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-stock-selector",
                templateUrl: "./stock-selector.component.html",
                styleUrls: ["./stock-selector.component.scss"],
            }]
    }], function () { return []; }, { parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], added: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "HJ/2":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/form-wrapper/containers/stock-inventory/stock-inventory.module.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: StockInventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockInventoryModule", function() { return StockInventoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_stock_branch_stock_branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/stock-branch/stock-branch.component */ "WXmf");
/* harmony import */ var _components_stock_products_stock_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/stock-products/stock-products.component */ "ux9Z");
/* harmony import */ var _components_stock_selector_stock_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/stock-selector/stock-selector.component */ "38mF");
/* harmony import */ var _stock_inventory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-inventory.component */ "t1py");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_show_info_product_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../directives/show-info-product.directive */ "l7Bq");
/* harmony import */ var _components_stock_counter_stock_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/stock-counter/stock-counter.component */ "fYMp");










class StockInventoryModule {
}
StockInventoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StockInventoryModule });
StockInventoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StockInventoryModule_Factory(t) { return new (t || StockInventoryModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StockInventoryModule, { declarations: [_stock_inventory_component__WEBPACK_IMPORTED_MODULE_5__["StockInventoryComponent"],
        _components_stock_selector_stock_selector_component__WEBPACK_IMPORTED_MODULE_4__["StockSelectorComponent"],
        _components_stock_branch_stock_branch_component__WEBPACK_IMPORTED_MODULE_2__["StockBranchComponent"],
        _components_stock_products_stock_products_component__WEBPACK_IMPORTED_MODULE_3__["StockProductsComponent"],
        _components_stock_counter_stock_counter_component__WEBPACK_IMPORTED_MODULE_8__["StockCounterComponent"],
        _directives_show_info_product_directive__WEBPACK_IMPORTED_MODULE_7__["ShowInfoProductDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]], exports: [_stock_inventory_component__WEBPACK_IMPORTED_MODULE_5__["StockInventoryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockInventoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _stock_inventory_component__WEBPACK_IMPORTED_MODULE_5__["StockInventoryComponent"],
                    _components_stock_selector_stock_selector_component__WEBPACK_IMPORTED_MODULE_4__["StockSelectorComponent"],
                    _components_stock_branch_stock_branch_component__WEBPACK_IMPORTED_MODULE_2__["StockBranchComponent"],
                    _components_stock_products_stock_products_component__WEBPACK_IMPORTED_MODULE_3__["StockProductsComponent"],
                    _components_stock_counter_stock_counter_component__WEBPACK_IMPORTED_MODULE_8__["StockCounterComponent"],
                    _directives_show_info_product_directive__WEBPACK_IMPORTED_MODULE_7__["ShowInfoProductDirective"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
                exports: [_stock_inventory_component__WEBPACK_IMPORTED_MODULE_5__["StockInventoryComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Lizu":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/form-wrapper/form-wrapper.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: FormWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapperModule", function() { return FormWrapperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _form_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-wrapper-routing.module */ "jPKJ");
/* harmony import */ var _form_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-wrapper.component */ "R7hB");
/* harmony import */ var _containers_stock_inventory_stock_inventory_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/stock-inventory/stock-inventory.module */ "HJ/2");






class FormWrapperModule {
}
FormWrapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormWrapperModule });
FormWrapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormWrapperModule_Factory(t) { return new (t || FormWrapperModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _containers_stock_inventory_stock_inventory_module__WEBPACK_IMPORTED_MODULE_4__["StockInventoryModule"], _form_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormWrapperRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormWrapperModule, { declarations: [_form_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["FormWrapperComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _containers_stock_inventory_stock_inventory_module__WEBPACK_IMPORTED_MODULE_4__["StockInventoryModule"], _form_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormWrapperRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormWrapperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_form_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["FormWrapperComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _containers_stock_inventory_stock_inventory_module__WEBPACK_IMPORTED_MODULE_4__["StockInventoryModule"], _form_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormWrapperRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "R7hB":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/form-wrapper/form-wrapper.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: FormWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapperComponent", function() { return FormWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _containers_stock_inventory_stock_inventory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/stock-inventory/stock-inventory.component */ "t1py");



class FormWrapperComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormWrapperComponent.ɵfac = function FormWrapperComponent_Factory(t) { return new (t || FormWrapperComponent)(); };
FormWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormWrapperComponent, selectors: [["app-form-wrapper"]], decls: 3, vars: 0, template: function FormWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "form-wrapper works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-stock-inventory");
    } }, directives: [_containers_stock_inventory_stock_inventory_component__WEBPACK_IMPORTED_MODULE_1__["StockInventoryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXdyYXBwZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-wrapper',
                templateUrl: './form-wrapper.component.html',
                styleUrls: ['./form-wrapper.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WXmf":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/form-wrapper/components/stock-branch/stock-branch.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: StockBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockBranchComponent", function() { return StockBranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function StockBranchComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockBranchComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It must contain 1 letter and 3 numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockBranchComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StockBranchComponent {
    constructor() { }
    ngOnInit() { }
    get invalidCustomValidator() {
        var _a, _b, _c, _d;
        return (((_b = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.get("store.branch")) === null || _b === void 0 ? void 0 : _b.hasError("invalidBranch")) && ((_d = (_c = this.parent) === null || _c === void 0 ? void 0 : _c.get("store.branch")) === null || _d === void 0 ? void 0 : _d.dirty) &&
            !this.required("branch"));
    }
    required(controlName) {
        var _a, _b, _c, _d;
        return (((_b = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.get(`store.${controlName}`)) === null || _b === void 0 ? void 0 : _b.hasError("required")) && ((_d = (_c = this.parent) === null || _c === void 0 ? void 0 : _c.get(`store.${controlName}`)) === null || _d === void 0 ? void 0 : _d.touched));
    }
}
StockBranchComponent.ɵfac = function StockBranchComponent_Factory(t) { return new (t || StockBranchComponent)(); };
StockBranchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockBranchComponent, selectors: [["app-stock-branch"]], inputs: { parent: "parent" }, decls: 9, vars: 4, consts: [[3, "formGroup"], ["formGroupName", "store", 1, "store-container"], ["type", "text", "name", "branch", "id", "branch", "formControlName", "branch", "placeholder", "Branch"], ["class", "error", 4, "ngIf"], ["type", "text", "name", "code", "id", "code", "formControlName", "code", "placeholder", "Code id"], [1, "error"]], template: function StockBranchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stock-branch works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StockBranchComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StockBranchComponent_div_6_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StockBranchComponent_div_8_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required("branch"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidCustomValidator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required("code"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\r\n    border-bottom: 1px solid #ccc;\r\n    margin: 0 0 20px;\r\n    padding: 0 0 20px;\r\n    display: block;\r\n  }\r\n  .error[_ngcontent-%COMP%] {\r\n    background: #B52D30;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    border-radius: 0 0 3px 3px;\r\n    line-height: 1;\r\n    padding: 6px 10px;\r\n    margin-top: -1px;\r\n  }\r\n  .store-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2NrLWJyYW5jaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYjtFQUNGIiwiZmlsZSI6InN0b2NrLWJyYW5jaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmVycm9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNCNTJEMzA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICB9XHJcbiAgLnN0b3JlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockBranchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-stock-branch",
                templateUrl: "./stock-branch.component.html",
                styleUrls: ["./stock-branch.component.css"],
            }]
    }], function () { return []; }, { parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "bEZc":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/services/stock.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class StockService {
    constructor(http) {
        this.http = http;
    }
    get() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = "/assets/ultimate-course/angular-pro/data.json";
            const response = yield this.http.get(url).toPromise();
            return response;
        });
    }
}
StockService.ɵfac = function StockService_Factory(t) { return new (t || StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
StockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StockService, factory: StockService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](StockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "f9Eg":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/form-wrapper/containers/stock-inventory/validations/stock-inventory.validations.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: StockValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockValidators", function() { return StockValidators; });
class StockValidators {
    static checkBranch(control) {
        const regExpr = /^[a-z]\d{3}$/i;
        const valid = regExpr.test(control.value);
        return valid ? null : { invalidBranch: true };
    }
    static checkStockExists(control) {
        const stockItem = control.get("stock");
        const selector = control.get("selector");
        if (!(stockItem && selector))
            return null;
        const exists = stockItem.value.some((stock) => {
            return stock.product_id === parseInt(selector.value.product_id, 10);
        });
        return exists ? { stockExists: true } : null;
    }
}


/***/ }),

/***/ "fYMp":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/form-wrapper/components/stock-counter/stock-counter.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: StockCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCounterComponent", function() { return StockCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const COUNTER_CONTROL_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => StockCounterComponent),
    multi: true,
};
class StockCounterComponent {
    constructor() {
        this.step = 10;
        this.min = 10;
        this.max = 1000;
        this.value = 10;
    }
    writeValue(value) {
        this.value = value || 0;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    onKeyDown(event) {
        const handlers = {
            ArrowDown: () => this.decrement(),
            ArrowUp: () => this.increment(),
        };
        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
        this.onTouch();
    }
    onBlur(event) {
        this.focus = false;
        this.stopDefaultBehavior(event);
    }
    onFocus(event) {
        this.focus = true;
        this.stopDefaultBehavior(event);
    }
    stopDefaultBehavior(event) {
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }
    increment() {
        if (this.value < this.max) {
            this.value = this.value + this.step;
            // this.onChange(this.value);
        }
        // this.onTouch();
    }
    decrement() {
        if (this.value > this.min) {
            this.value = this.value - this.step;
            // this.onChange(this.value);
        }
        // this.onTouch();
    }
}
StockCounterComponent.ɵfac = function StockCounterComponent_Factory(t) { return new (t || StockCounterComponent)(); };
StockCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockCounterComponent, selectors: [["app-stock-counter"]], inputs: { step: "step", min: "min", max: "max" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([COUNTER_CONTROL_ACCESSOR])], decls: 12, vars: 5, consts: [[1, "stock-counter"], ["tabindex", "0", 3, "keydown", "blur", "focus"], ["type", "button", 3, "disabled", "click"]], template: function StockCounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stock-counter works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function StockCounterComponent_Template_div_keydown_4_listener($event) { return ctx.onKeyDown($event); })("blur", function StockCounterComponent_Template_div_blur_4_listener($event) { return ctx.onBlur($event); })("focus", function StockCounterComponent_Template_div_focus_4_listener($event) { return ctx.onFocus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockCounterComponent_Template_button_click_8_listener() { return ctx.increment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockCounterComponent_Template_button_click_10_listener() { return ctx.decrement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx.focus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.value === ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.value === ctx.min);
    } }, styles: [".stock-counter[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.stock-counter.focused[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 1px #9e61c8;\n}\n.stock-counter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.stock-counter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stock-counter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  width: 50px;\n}\n.stock-counter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 3px;\n  border-radius: 0;\n  line-height: 1;\n  padding: 3px 7px;\n  background: #9e61c8;\n  color: #fff;\n  font-weight: 500;\n}\n.stock-counter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background: rgba(0, 0, 0, 0.1);\n  color: rgba(0, 0, 0, 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0b2NrLWNvdW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUhFO0VBQ0UsNkJBQUE7QUFLSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUVOO0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUVJO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtBQUFOIiwiZmlsZSI6InN0b2NrLWNvdW50ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvY2stY291bnRlciB7XHJcbiAgJi5mb2N1c2VkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAjOWU2MWM4O1xyXG4gIH1cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICYgPiBkaXYgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzllNjFjODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-stock-counter",
                providers: [COUNTER_CONTROL_ACCESSOR],
                templateUrl: "./stock-counter.component.html",
                styleUrls: ["./stock-counter.component.scss"],
            }]
    }], null, { step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jPKJ":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/form-wrapper/form-wrapper-routing.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: FormWrapperRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapperRoutingModule", function() { return FormWrapperRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-wrapper.component */ "R7hB");





const routes = [
    {
        path: "",
        component: _form_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["FormWrapperComponent"],
    },
];
class FormWrapperRoutingModule {
}
FormWrapperRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormWrapperRoutingModule });
FormWrapperRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormWrapperRoutingModule_Factory(t) { return new (t || FormWrapperRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormWrapperRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormWrapperRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "l7Bq":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/directives/show-info-product.directive.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ShowInfoProductDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInfoProductDirective", function() { return ShowInfoProductDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ShowInfoProductDirective {
    constructor() { }
    transform(value) {
        return `${value.name} ${value.price}`;
    }
}
ShowInfoProductDirective.ɵfac = function ShowInfoProductDirective_Factory(t) { return new (t || ShowInfoProductDirective)(); };
ShowInfoProductDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ShowInfoProductDirective, selectors: [["appShowInfoProduct"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowInfoProductDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "appShowInfoProduct",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t1py":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/form-wrapper/containers/stock-inventory/stock-inventory.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: StockInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockInventoryComponent", function() { return StockInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/stock.service */ "bEZc");
/* harmony import */ var _validations_stock_inventory_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validations/stock-inventory.validations */ "f9Eg");
/* harmony import */ var _components_stock_branch_stock_branch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/stock-branch/stock-branch.component */ "WXmf");
/* harmony import */ var _components_stock_selector_stock_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/stock-selector/stock-selector.component */ "38mF");
/* harmony import */ var _components_stock_products_stock_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/stock-products/stock-products.component */ "ux9Z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");












class StockInventoryComponent {
    constructor(fb, stockService) {
        this.fb = fb;
        this.stockService = stockService;
        this.products = [];
    }
    ngOnInit() {
        this.createForm();
        this.getApiCall();
    }
    getApiCall() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.responseApi = yield this.stockService.get();
            if (this.responseApi) {
                this.products = this.responseApi.products;
                const myMap = this.responseApi.products.map((p) => [p.id, p]);
                this.productMap = new Map(myMap);
                console.log("%cmyMap ", "color: white; background-color: #007acc;", this.productMap);
                if (this.responseApi.carts) {
                    this.responseApi.carts.forEach((cart) => {
                        this.onProductAdded(cart);
                    });
                }
                this.getTotal((_a = this.form.get("stock")) === null || _a === void 0 ? void 0 : _a.value);
                (_b = this.form.get("stock")) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((value) => {
                    console.log("%cvaluechanges ", "background: green; color: white; display: block;", value);
                    this.getTotal(value);
                });
            }
        });
    }
    createForm() {
        this.form = this.fb.group({
            store: this.fb.group({
                branch: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _validations_stock_inventory_validations__WEBPACK_IMPORTED_MODULE_4__["StockValidators"].checkBranch]],
                code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
            selector: this.createStock({}),
            stock: this.fb.array([]),
        }
        // { validator: StockValidators.checkStockExists }
        );
    }
    getTotal(value) {
        this.total = value.reduce((prev, curr) => {
            var _a;
            const currentPrice = (_a = this.productMap.get(curr === null || curr === void 0 ? void 0 : curr.product_id)) === null || _a === void 0 ? void 0 : _a.price;
            return prev + curr.quantity * currentPrice;
        }, 0);
    }
    createStock(stock) {
        return this.fb.group({
            product_id: parseInt(stock.product_id, 10) || "",
            quantity: stock.quantity || 10,
        });
    }
    getStock() {
        return this.form.get("stock");
    }
    onProductAdded(product) {
        const control = this.getStock();
        control.push(this.createStock(product));
    }
    onProductRemoved(index) {
        const control = this.getStock();
        control.removeAt(index);
    }
    submit() {
        console.log("%csubmit ", "color: white; background-color: #007acc;", this.form.value);
    }
}
StockInventoryComponent.ɵfac = function StockInventoryComponent_Factory(t) { return new (t || StockInventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"])); };
StockInventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StockInventoryComponent, selectors: [["app-stock-inventory"]], decls: 13, vars: 15, consts: [[1, "col-6"], [3, "formGroup", "ngSubmit"], [3, "parent"], [3, "parent", "products", "added"], [3, "parent", "map", "removed"], [1, "stock-inventory__price"], ["mat-icon-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function StockInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StockInventoryComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-stock-branch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-stock-selector", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("added", function StockInventoryComponent_Template_app_stock_selector_added_3_listener($event) { return ctx.onProductAdded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-stock-products", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function StockInventoryComponent_Template_app_stock_products_removed_4_listener($event) { return ctx.onProductRemoved($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parent", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parent", ctx.form)("products", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parent", ctx.form)("map", ctx.productMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 9, ctx.total, "EUR", true), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 13, ctx.form.value), "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _components_stock_branch_stock_branch_component__WEBPACK_IMPORTED_MODULE_5__["StockBranchComponent"], _components_stock_selector_stock_selector_component__WEBPACK_IMPORTED_MODULE_6__["StockSelectorComponent"], _components_stock_products_stock_products_component__WEBPACK_IMPORTED_MODULE_7__["StockProductsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay1pbnZlbnRvcnkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StockInventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-stock-inventory",
                templateUrl: "./stock-inventory.component.html",
                styleUrls: ["./stock-inventory.component.sass"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"] }]; }, null); })();


/***/ }),

/***/ "ux9Z":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/components/ultimate-course-index/angular-pro/reactive-form/form-wrapper/components/stock-products/stock-products.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: StockProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockProductsComponent", function() { return StockProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function StockProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockProductsComponent_div_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeItem(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r0.getProducts(item_r1.value.product_id)), " ");
} }
class StockProductsComponent {
    constructor() {
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get stocks() {
        return this.parent.get("stock").controls;
    }
    ngOnInit() { }
    getProducts(id) {
        return this.map.get(id);
    }
    removeItem(i) {
        this.removed.emit(i);
    }
}
StockProductsComponent.ɵfac = function StockProductsComponent_Factory(t) { return new (t || StockProductsComponent)(); };
StockProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockProductsComponent, selectors: [["app-stock-products"]], inputs: { parent: "parent", map: "map" }, outputs: { removed: "removed" }, decls: 5, vars: 2, consts: [[1, "stock-product", 3, "formGroup"], ["formArrayName", "stock"], [4, "ngFor", "ngForOf"], [1, "stock-product__content", 3, "formGroupName"], [1, "stock-product__name"], ["type", "number", "name", "quantity", "id", "quantity", "step", "10", "min", "10", "max", "1000", "formControlName", "quantity"], ["type", "button", 3, "click"]], template: function StockProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stock-products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StockProductsComponent_div_4_Template, 8, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stocks);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: [".stock-product__content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.stock-product__content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 100px;\n  margin-left: 30px;\n  flex: 0 0 50px;\n  margin-left: 30px;\n}\n.stock-product__content__name[_ngcontent-%COMP%] {\n  flex: 1 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0b2NrLXByb2R1Y3RzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFHQSxjQUFBO0VBQ0EsaUJBQUE7QUFGTjtBQUlJO0VBQ0UsU0FBQTtBQUZOIiwiZmlsZSI6InN0b2NrLXByb2R1Y3RzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0b2NrLXByb2R1Y3RcclxuICAmX19jb250ZW50XHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuXHJcbiAgICBidXR0b25cclxuICAgICAgZmxleDogMCAwIDEwMHB4XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4XHJcblxyXG4gICAgICBzdG9jay1jb3VudGVyXHJcbiAgICAgIGZsZXg6IDAgMCA1MHB4XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4XHJcblxyXG4gICAgJl9fbmFtZVxyXG4gICAgICBmbGV4OiAxIDBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-stock-products",
                templateUrl: "./stock-products.component.html",
                styleUrls: ["./stock-products.component.sass"],
            }]
    }], function () { return []; }, { parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=reactive-form-form-wrapper-form-wrapper-module.js.map