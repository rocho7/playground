(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["control-value-accessor-control-value-accessor-module"],{

/***/ "6qtn":
/*!***************************************************************************************!*\
  !*** ./src/app/components/control-value-accessor/control-value-accessor.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ControlValueAccessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlValueAccessorComponent", function() { return ControlValueAccessorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _name_field_name_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./name-field/name-field.component */ "OCof");
/* harmony import */ var _element_input_filter_element_input_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-input-filter/element-input-filter.component */ "hTjQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ControlValueAccessorComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-element-input-filter", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-element-input-filter", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
} }
class ControlValueAccessorComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.form = this.fb.group({
            itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            isLocked: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true)
        });
        this.formAccessor = this.fb.group({
            name: this.fb.control('name data'),
            lastName: this.fb.control('last name data')
        });
        this.formAccessor.touched;
        this.formMultiple = this.fb.group({
            elements: this.fb.array([])
        });
        this.addElement();
    }
    get elements() {
        return this.formMultiple.controls['elements'];
    }
    addElement() {
        const input = this.fb.group({
            name: this.fb.control(''),
            email: this.fb.control('')
        });
        this.elements.push(input);
    }
    onSubmit() {
        console.log('%conSubmit ', 'color: red; display: block; width: 100%;', this.form.value);
    }
    onSubmitFormArray() {
        console.log('%cArray from ', 'color: red; display: block; width: 100%;', this.formMultiple.value);
    }
}
ControlValueAccessorComponent.ɵfac = function ControlValueAccessorComponent_Factory(t) { return new (t || ControlValueAccessorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ControlValueAccessorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlValueAccessorComponent, selectors: [["app-control-value-accessor"]], decls: 26, vars: 12, consts: [["href", "https://www.youtube.com/watch?v=OrmIfW8Ak3w&list=PLX7eV3JL9sfkgIka4CmlLMkErbaVPe4LC"], [1, "form", 3, "formGroup"], ["type", "text", "formControlName", "itemName"], ["formControlName", "isLocked"], [3, "disabled", "click"], [3, "formGroup"], ["formControlName", "name"], ["formControlName", "lastName"], [3, "formGroup", "ngSubmit"], ["formArrayName", "elements", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-info"], ["formArrayName", "elements"], [3, "formGroupName"], ["formControlName", "email"]], template: function ControlValueAccessorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Video control value accessor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "control-value-accessor works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-name-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlValueAccessorComponent_Template_button_click_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-element-input-filter", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-element-input-filter", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Form Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ControlValueAccessorComponent_Template_form_ngSubmit_19_listener() { return ctx.onSubmitFormArray(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ControlValueAccessorComponent_ng_container_20_Template, 4, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit formArray");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAccessor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx.formAccessor.value), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  isTouched : ", ctx.formAccessor.touched, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.elements == null ? null : ctx.elements.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 10, ctx.formMultiple.value), "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _name_field_name_field_component__WEBPACK_IMPORTED_MODULE_2__["NameFieldComponent"], _element_input_filter_element_input_filter_component__WEBPACK_IMPORTED_MODULE_3__["ElementInputFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9sLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlValueAccessorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-control-value-accessor',
                templateUrl: './control-value-accessor.component.html',
                styleUrls: ['./control-value-accessor.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "7jKf":
/*!********************************************************************************************!*\
  !*** ./src/app/components/control-value-accessor/control-value-accessor-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ControlValueAccessorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlValueAccessorRoutingModule", function() { return ControlValueAccessorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _control_value_accessor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-value-accessor.component */ "6qtn");





const routes = [
    {
        path: '',
        component: _control_value_accessor_component__WEBPACK_IMPORTED_MODULE_2__["ControlValueAccessorComponent"]
    }
];
class ControlValueAccessorRoutingModule {
}
ControlValueAccessorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ControlValueAccessorRoutingModule });
ControlValueAccessorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ControlValueAccessorRoutingModule_Factory(t) { return new (t || ControlValueAccessorRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ControlValueAccessorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlValueAccessorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ITkA":
/*!***********************************************************************************!*\
  !*** ./src/app/components/control-value-accessor/name-field/name-field.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NameFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameFieldModule", function() { return NameFieldModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _name_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./name-field.component */ "OCof");




class NameFieldModule {
}
NameFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NameFieldModule });
NameFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NameFieldModule_Factory(t) { return new (t || NameFieldModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NameFieldModule, { declarations: [_name_field_component__WEBPACK_IMPORTED_MODULE_2__["NameFieldComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_name_field_component__WEBPACK_IMPORTED_MODULE_2__["NameFieldComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NameFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_name_field_component__WEBPACK_IMPORTED_MODULE_2__["NameFieldComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_name_field_component__WEBPACK_IMPORTED_MODULE_2__["NameFieldComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "OCof":
/*!**************************************************************************************!*\
  !*** ./src/app/components/control-value-accessor/name-field/name-field.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NameFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameFieldComponent", function() { return NameFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



// ? https://www.youtube.com/watch?v=OrmIfW8Ak3w&list=PLX7eV3JL9sfkgIka4CmlLMkErbaVPe4LC
class NameFieldComponent {
    constructor() {
        this.isLocked = false;
    }
    writeValue(obj) {
        console.log('%cwritevalue valor pasado desde el componente padre ', 'color: red; display: block; width: 100%;', obj);
        this.isLocked = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngOnInit() {
    }
    setValue() {
        this.isLocked = !this.isLocked;
        this.onChange(this.isLocked);
        this.onTouched();
    }
}
NameFieldComponent.ɵfac = function NameFieldComponent_Factory(t) { return new (t || NameFieldComponent)(); };
NameFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NameFieldComponent, selectors: [["app-name-field"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: NameFieldComponent,
                multi: true
            }])], decls: 7, vars: 1, consts: [[3, "click"]], template: function NameFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "name-field works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " isLocked?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " click me ==>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NameFieldComponent_Template_span_click_5_listener() { return ctx.setValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isLocked);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYW1lLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NameFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-name-field',
                templateUrl: './name-field.component.html',
                styleUrls: ['./name-field.component.css'],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: NameFieldComponent,
                        multi: true
                    }]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hTjQ":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/control-value-accessor/element-input-filter/element-input-filter.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ElementInputFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementInputFilterComponent", function() { return ElementInputFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ElementInputFilterComponent {
    constructor() {
        this.onTouched = Function;
    }
    writeValue(obj) {
        this.inputValue = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    changeInput(ev) {
        this.onChange(ev.target.value);
        this.onTouched();
    }
}
ElementInputFilterComponent.ɵfac = function ElementInputFilterComponent_Factory(t) { return new (t || ElementInputFilterComponent)(); };
ElementInputFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ElementInputFilterComponent, selectors: [["app-element-input-filter"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ElementInputFilterComponent),
                multi: true,
            }
        ])], decls: 4, vars: 2, consts: [["type", "text", "name", "data", "id", "data", 3, "value", "change"]], template: function ElementInputFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "element-input-filter works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ElementInputFilterComponent_Template_input_change_2_listener($event) { return ctx.changeInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.inputValue, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbGVtZW50LWlucHV0LWZpbHRlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElementInputFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-element-input-filter',
                templateUrl: './element-input-filter.component.html',
                styleUrls: ['./element-input-filter.component.css'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ElementInputFilterComponent),
                        multi: true,
                    }
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nVq4":
/*!************************************************************************************!*\
  !*** ./src/app/components/control-value-accessor/control-value-accessor.module.ts ***!
  \************************************************************************************/
/*! exports provided: ControlValueAccessorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlValueAccessorModule", function() { return ControlValueAccessorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _control_value_accessor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-value-accessor-routing.module */ "7jKf");
/* harmony import */ var _control_value_accessor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-value-accessor.component */ "6qtn");
/* harmony import */ var _name_field_name_field_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./name-field/name-field.module */ "ITkA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _element_input_filter_element_input_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element-input-filter/element-input-filter.component */ "hTjQ");








class ControlValueAccessorModule {
}
ControlValueAccessorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ControlValueAccessorModule });
ControlValueAccessorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ControlValueAccessorModule_Factory(t) { return new (t || ControlValueAccessorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _name_field_name_field_module__WEBPACK_IMPORTED_MODULE_4__["NameFieldModule"],
            _control_value_accessor_routing_module__WEBPACK_IMPORTED_MODULE_2__["ControlValueAccessorRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ControlValueAccessorModule, { declarations: [_control_value_accessor_component__WEBPACK_IMPORTED_MODULE_3__["ControlValueAccessorComponent"], _element_input_filter_element_input_filter_component__WEBPACK_IMPORTED_MODULE_6__["ElementInputFilterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _name_field_name_field_module__WEBPACK_IMPORTED_MODULE_4__["NameFieldModule"],
        _control_value_accessor_routing_module__WEBPACK_IMPORTED_MODULE_2__["ControlValueAccessorRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlValueAccessorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_control_value_accessor_component__WEBPACK_IMPORTED_MODULE_3__["ControlValueAccessorComponent"], _element_input_filter_element_input_filter_component__WEBPACK_IMPORTED_MODULE_6__["ElementInputFilterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _name_field_name_field_module__WEBPACK_IMPORTED_MODULE_4__["NameFieldModule"],
                    _control_value_accessor_routing_module__WEBPACK_IMPORTED_MODULE_2__["ControlValueAccessorRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=control-value-accessor-control-value-accessor-module.js.map